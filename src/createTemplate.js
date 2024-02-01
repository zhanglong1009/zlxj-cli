import { gitPath } from './constants.js'
import chalk from 'chalk';
import download from 'download-git-repo';
import path from 'path'
import createLogger from 'progress-estimator';
/**
 * @description: 创建项目
 * @param {*} name 项目名称
 * @param {*} type 项目类型
 * @return {*}
 */
const log = console.log

// 创建动画
const logger = createLogger({
    spinner: {
        interval: 140,
        frames: ['🚶 ', '🏃 ']
    }
});
export const createProject = async (name, type) => {
    const { path: templatePath, desc } = gitPath[type]
    log(`${chalk.greenBright(desc+'模板开始下载')}`)
    const tmp = path.join(process.cwd(), name) //项目存放路径
    const res = await logger(down(templatePath, tmp), "下载耗时：");
    if (res == 'err') {
        log(chalk.red('模板下载失败\n'))
        log(err)
    } else {
        log('\n')
        log(` 🎉 已成功创建项目 ${chalk.cyan(name)}`)
        log(` ⬇  运行下面命令将它跑起来\n`)
        log(` cd ${chalk.cyan(name)}`)
        log(' npm i')
        log(' npm run dev')
    }

}

// 下载git模板
const down = (templatePath, name) => {
    return new Promise((rel) => {
        download(templatePath, name, { clone: true }, (err) => {
            if (err) {
                rel('err')

            } else {
                rel('success')
            }
        })
    })


}