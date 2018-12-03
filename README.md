一、修改内容：
 "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    修改成：
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
 三、安装插件
     安装 babel-plugin-import 和 react-app-rewired 两个插件
 二、根目录config-overrides.js
    内容如下：
        const { injectBabelPlugin } = require('react-app-rewired');
        module.exports = function override(config, env) {
        config = injectBabelPlugin(
        ['import', { libraryName: 'antd-mobile', style: 'css' }],
         config);
         return config;
        };

