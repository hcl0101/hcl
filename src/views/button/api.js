export default [
  {
    title: 'Attributes',
    data: [
      {
        '参数': 'type',
        '说明': '按钮类型',
        '类型': 'String',
        '可选值': 'default | primary | success| danger | text', 
        '默认值': 'default'
      }, {
        '参数': 'size',
        '说明': '按钮大小',
        '类型': 'String',
        '可选值': 'large | medium | small', 
        '默认值': 'medium'
      }, {
        '参数': 'disabled',
        '说明': '是否禁用',
        '类型': 'Boolean',
        '可选值': 'true | false', 
        '默认值': 'false'
      }, {
        '参数': 'loading',
        '说明': '是否处于加载状态',
        '类型': 'Boolean',
        '可选值': 'true | false', 
        '默认值': 'false'
      }, {
        '参数': 'loading',
        '说明': '是否处于加载状态',
        '类型': 'Boolean',
        '可选值': 'true | false', 
        '默认值': 'false'
      }, {
        '参数': 'icon',
        '说明': '带图标按钮',
        '类型': 'String',
        '可选值': `个人去阿里图标库下载， class="iconfont xxx"`, 
        '默认值': '-'
      }
    ]
  },
  {
    title: 'slots',
    data: [
      {
        '名称': '-',
        '说明': '按钮中的内容'
      }
    ]
  }
]