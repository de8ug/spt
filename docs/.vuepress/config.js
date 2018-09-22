module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', 
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
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
      { text: 'side1', link: '/side1/' }, // 内部链接 以docs为根目录
      { text: '51', link: 'http://edu.51cto.com' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com' },
        ]
      }        
    ],
    sidebar:{
        '/side1/': [
            '/side1/', // 文件夹的README.md 不是下拉框形式,这里连接readme
            {
              title: '侧边栏下拉框的标题1',
              children: [
                '/side1/test', // 以docs为根目录来查找文件 
                // 上面地址查找的是：docs>side1>test.md 文件
                // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
              ]
            }
          ],
          '/side2/': [
            '/side2/', 
            {
              title: '第二组下拉框的标题1',
              children: [
                '/side2/test' 
              ]
            }
          ]
      }
  }
}
