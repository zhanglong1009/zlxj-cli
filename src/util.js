import path from 'path'
import fs from 'fs-extra'
import pc from 'picocolors'
import { projectNamePrompt } from './prompt.js'
/**
 * @description: 文件是否已存在
 * @param {*} filename
 * @return {*}
 */
export const isExistsFile = async (filename) => {
    // 获取当前工作区目录
    const cwd = process.cwd()
    // 拼接项目名
    const holePath = path.join(cwd, filename)
    // 判断项目是否已经存在
    if (fs.existsSync(holePath)) {
        console.log(pc.red('当前文件名已存在，请重新输入'))
        const projectName = await projectNamePrompt()
        return isExistsFile(projectName)

    }
}