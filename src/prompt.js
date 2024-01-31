import inquirer from "inquirer";
import { gitPath } from './constants.js'

export const projectNamePrompt = async () => {
    const { projectName } = await inquirer.prompt([{
        name: 'projectName',
        type: 'input',
        message: '请输入项目名称',
    }])

    return projectName
}

export const projectTemplatePrompt = async () => {
    const list = Object.values(gitPath).map(d => {
        return {
            name: d.desc,
            value: d.val
        }

    })
    const { ProjectTemplate } = await inquirer.prompt([{
        name: 'ProjectTemplate',
        type: 'list',
        message: '请选择项目框架',
        choices: list
    }])

    return ProjectTemplate
}