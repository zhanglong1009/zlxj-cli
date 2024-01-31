import { gitPath } from './constants.js'
import ora from 'ora';
import chalk from 'chalk';
import download from 'download-git-repo';
import path from 'path'
/**
 * @description: 创建项目
 * @param {*} name 项目名称
 * @param {*} type 项目类型
 * @return {*}
 */
const log = console.log
export const createProject = async (name, type) => {
    const { path: oriPath, desc } = gitPath[type]
    const spinner = ora({
        spinner: {
            interval: 140, // Optional
            frames: ['🚶 ', '🏃 ']
        }
    })
    spinner.start(`${chalk.greenBright(desc+'模板开始下载')}`)
    //git clone 分支
    const tmp = path.join(process.cwd(), name) //项目存放路径
    download(oriPath, tmp, { clone:true}, (err) => {
        if (err) {
            spinner.fail(chalk.red('模板下载失败\n'))
            log(err)
        } else {
            spinner.succeed(chalk.green('模板下载成功'))

            log(` 🎉 已成功创建项目 ${chalk.cyan(name)}`)
            log(` ⬇  运行下面命令将它跑起来\n`)
            log(` cd ${chalk.cyan(name)}`)
            log(' npm i')
            log(' npm run dev')


        }
    })

}