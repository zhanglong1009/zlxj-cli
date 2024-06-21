
//初始化
const init = () => {
    // 是否是生产环境
    const isProdENV = window.location.origin == 'https://weixin.srcb.com'
    //引入神策全埋点 
    // @ts-ignore
    var sensors = window['sensorsDataAnalytic201505'];
    try {
        sensors.init({
            server_url: isProdENV ? 'https://cbaas.shrcb.com:443/sa?project=default' : 'https://test11.shrcb.com:455/sa?project=default',
            is_track_single_page: true, // 单页面配置，默认开启，若页面中有锚点设计，需要将该配置删除，否则触发锚点会多触发 $pageview 事件
            use_client_time: true,
            send_type: 'beacon', //可选使用 'image' 图片 get 请求方式发数据。( 神策系统 1.10 版本以后 ) 支持使用 'ajax' 和 'beacon' 方式发送数据，这两种默认都是 post 方式， beacon 方式兼容性较差。
            heatmap: {
                //是否开启点击图，default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
                clickmap: 'default',
                //是否开启触达图，not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启。
                scroll_notice_map: 'not_collect',

                // 支持 div 类型元素的自动采集
                collect_tags: {
                    div: true,
                    span: true
                }
            },
            // show_log: window.location.origin == 'https://test21.shrcb.com',
            show_log: false,
        });
        sensors.quick('autoTrack');
        // 绑定到window全局
        // @ts-ignore
        window.$sensors = sensors
    } catch (e) {
        console.log('神策初始化失败')
    }

}

//设置登录id
const setId = (id: string) => {
    // 绑定神策登录id，使用openId绑定
    let isSetLoginId = sessionStorage.getItem('isSetLoginId')  //判断当前是否已经绑定过
    if (isSetLoginId !== 'Y') {
        console.log('绑定登录id')
        // @ts-ignore
        window.$sensors?.login(id)
        sessionStorage.setItem('isSetLoginId', 'Y')
    }
}
//初始化
init()
// @ts-ignore
window.$useSensorsFunc = {
    setId
}