'use strict';
/**
 * config
 */
export default {
    //服务监听的端口
    port: '8360',
    //服务监听的 host
    host: '127.0.0.1',
    //项目编码
    encoding: "utf-8",
    //pathname 去除的后缀，路由解析中使用
    pathname_suffix: ".html",
    //请求超时时间
    timeout: 120,
    //是否开启自定义路由
    route_on: true,
    // 是否处理静态资源请求， porxy_on 开启下可以关闭该配置
    resource_on: true,
};