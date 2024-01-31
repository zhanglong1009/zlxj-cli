/**
 * @description: 常量存放文件
 * @return {*}
 */

import packageJson from '../package.json' assert { type: 'json' }
/**
 * @description: 版本号
 */
 export const { version, name } = packageJson

 /**
  * @description: git仓库地址
  */ 
 export const gitPath = {
    h5:{
        path:'direct:https://gitee.com/674074365/vue3-vant3-h5.git#master',
        branch:'master',
        desc:'H5移动端',
        val:'h5'
    },
    pc:{
        path:'direct:https://gitee.com/yiming_chang/vue-pure-admin.git#main',
        branch:'main',
        desc:'PC端',
        val:'pc'
    },
    uniapp:{
        path:'direct:https://gitee.com/open-source-byte/house.git#master',
        branch:'uniapp',
        desc:'uniapp小程序',
        val:'uniapp'
    }
 }