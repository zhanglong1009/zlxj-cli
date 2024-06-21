#! /usr/bin/env node --no-warnings

import { cac } from 'cac'
import { version } from './constants.js';
import { projectNamePrompt, projectTemplatePrompt } from './prompt.js'
import { isExistsFile } from './util.js';
import { createProject } from './createTemplate.js';
import chalk from 'chalk';
import figlet from 'figlet'
import gradient from 'gradient-string'



const log = console.log;
const cli = cac('zlxj')
// 版本号
cli.version(version)

cli
    .command('create', '开始创建项目')
    .action(async () => {

        log(`\n\n${gradient.morning(`😘 欢迎使用@zlxj/cli  \n\n`)}${chalk.greenBright('🤡 git地址:')}${chalk.underline.greenBright('https://github.com/zhanglong1009/zlxj-cli')}\n\n`);
        // log(figlet.textSync('zlxj', {
        //     font: '3D-ASCII',
        //     horizontalLayout: 'default',
        //     verticalLayout: 'default',
        //     width: 80,
        //     whitespaceBreak: true
        // }))

        const projectName = await projectNamePrompt()
        // 如果文件名存在,则重新输入文件名
        await isExistsFile(projectName)

        // 获取模板
        const projectTemplate = await projectTemplatePrompt()

        await createProject(projectName, projectTemplate)

    })


cli.help(() => {
    log(figlet.textSync('zlxj', {
        font: '3D-ASCII',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }))
})



cli.parse()