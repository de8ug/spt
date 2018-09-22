module.exports = {
  ga: 'UA-102618968-1',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'sublimePython',
      description: 'Python的多功能导航站'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', 
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    label: '简体中文',
    selectText: '选择语言',
    lastUpdated: '上次更新',
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
    repo: 'de8ug/spt',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'de8ug/spt',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    nav:[
      {
        text: '学什么',
        link: '/what/'
      },
      {
        text: '怎么学',
        link: '/how/'
      },
      {
        text: '工具',
        link: '/tools/',
      },
      {
        text: '我的学习',
        link: 'http://edu.51cto.com/center/course/user/index'
      }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址1', link: 'https://github.com' },
          { text: 'GitHub地址2', link: 'https://github.com' },
        ]
      }        
    ],
    sidebar:{
        '/what/': genSidebarConfig('what'),
        // [
        //     '/what/', // 文件夹的README.md 不是下拉框形式,这里连接readme
        //     {
        //       title: '具体内容',
        //       children: [
        //         '/what/common', // 以docs为根目录来查找文件 
        //         // 上面地址查找的是：docs>what>test.md 文件
        //         // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
        //       ]
        //     }
        //   ],
          '/how/': [
            '/how/', 
            {
              title: '怎么学',
              children: [
                '/how/test' 
              ]
            }
          ],
          '/tools/': genSidebarConfig('tools')   
      }
  }
}


function genSidebarConfig (title) {
  let menu_list = {
    'tools':[
      '',
      'vscode',
      'pycharm'
    ],
    'how':[
      '',
      'common'
    ],
    'what':[
      '',
      'common'
    ]
  }
  return [
    {
      title,
      collapsable: false,
      children: menu_list[title]
    }
  ]
}
