export default [
  {
    title: 'directory-group Attributes',
    data: [
      {
        '参数': 'loading',
        '说明': '加载中...',
        '类型': 'Boolean',
        '默认值': false
      },
      {
        '参数': 'renameable',
        '说明': '批量设置是否可重命名',
        '类型': 'Boolean',
        '默认值': false
      },
      {
        '参数': 'hoverColor',
        '说明': '批量设置hover时的背景色， 覆盖child的hoverColor',
        '类型': 'String',
        '默认值': '#bddaf9'
      },
      {
        '参数': 'emptyText',
        '说明': '无数据时，展示的文字提醒',
        '类型': 'String',
        '默认值': '该文件夹为空!'
      }
    ]
  },
  {
    title: 'directory-group 方法',
    data: [
      {
        '名称': 'rename',
        '说明': '重命名文件夹/文件',
        '参数': 'index: 文件夹/文件的索引'
      }
    ]
  },
  {
    title: 'directory Attributes',
    data: [
      {
        '参数': 'data',
        '说明': '文件夹/文件的数据对象',
        '类型': 'Boolean',
        '默认值': "{ img: '', name: '' }"
      },
      {
        '参数': 'renameable',
        '说明': '是否可重命名, 若被group包裹, 效果则被parent的renameable覆盖',
        '类型': 'Boolean',
        '默认值': true
      },
      {
        '参数': 'hoverColor',
        '说明': 'hover时的背景颜色, 若被group包裹, 效果则被parent的hoverColor覆盖',
        '类型': 'String',
        '默认值': '#bddaf9'
      }
    ]
  },
  {
    title: 'directory events',
    data: [
      {
        '名称': 'click',
        '说明': '点击文件夹/文件',
        '回调函数': '(data, e) data: 文件夹/文件的数据， e: event'
      }
    ]
  }
]