export default [
  {
    title: 'Attributes',
    data: [
      {
        '参数': 'context',
        '说明': '右键菜单配置',
        '类型': 'Array',
        '可选值': '', 
        '默认值': '[]'
      }
    ]
  },
  {
    title: 'events',
    data: [
      {
        '名称': 'show',
        '说明': '展示右键菜单',
        '参数': '-'
      },
      {
        '名称': 'hide',
        '说明': '隐藏右键菜单',
        '参数': '-'
      },
      {
        '名称': 'click-contextmenu',
        '说明': '点击右键菜单',
        '参数': 'menuItem, index'
      }
    ]
  }
]