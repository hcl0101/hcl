export default [
  {
    title: 'Attributes',
    data: [
      {
        '参数': 'visible',
        '说明': '是否可见',
        '类型': 'Boolean',
        '可选值': '', 
        '默认值': 'false'
      },
      {
        '参数': 'title',
        '说明': '标题',
        '类型': 'String',
        '可选值': '',
        '默认值': '',
      },
      {
        '参数': 'width',
        '说明': '宽度',
        '类型': 'Number | String',
        '可选值': '',
        '默认值': '256'
      },
      {
        '参数': 'duration',
        '说明': '动画持续时间',
        '类型': 'Number | String',
        '可选值': '', 
        '默认值': 500
      },
      {
        '参数': 'placement',
        '说明': '方向',
        '类型': 'String',
        '可选值': 'right | left | top | bottom',
        '默认值': 'right'
      },
      {
        '参数': 'mask',
        '说明': '是否显示遮罩层',
        '类型': 'Boolean',
        '可选值': '',
        '默认值': 'true'
      },
      {
        '参数': 'mask-closable',
        '说明': '是否允许点击遮罩层关闭',
        '类型': 'Boolean',
        '可选值': '',
        '默认值': 'true'
      },
      {
        '参数': 'closable',
        '说明': '是否显示右上角关闭图标(show-header为true)',
        '类型': 'Boolean',
        '可选值': '',
        '默认值': 'true'
      },
      {
        '参数': 'destroyOnClose',
        '说明': '是否在关闭时销毁抽屉body中的元素',
        '类型': 'Boolean',
        '可选值': 'true | false',
        '默认值': 'false'
      },
      {
        '参数': 'show-header',
        '说明': '是否展示header',
        '类型': 'Boolean',
        '可选值': '',
        '默认值': 'true'
      },
      {
        '参数': 'show-footer',
        '说明': '是否展示footer',
        '类型': 'Boolean',
        '可选值': '',
        '默认值': 'false'
      },
      {
        '参数': 'show-trigger',
        '说明': '是否展示触发器',
        '类型': 'Boolean',
        '可选值': '',
        '默认值': 'false'
      },
      {
        '参数': 'show-bottom',
        '说明': '触发器距离底部的距离',
        '类型': 'Number | String',
        '可选值': '',
        '默认值': '100'
      },
      {
        '参数': 'loading',
        '说明': '加载中(show-footer为true)',
        '类型': 'Number | String',
        '可选值': '',
        '默认值': '100'
      },
      {
        '参数': 'drawer-class',
        '说明': '外部传入的class样式',
        '类型': 'String',
        '可选值': '',
        '默认值': ''
      }
    ]
  },
  {
    title: 'slots',
    data: [
      {
        '名称': 'header',
        '说明': '抽屉头部'
      },
      {
        '名称': 'body',
        '说明': '抽屉内容'
      },
      {
        '名称': 'header',
        '说明': '抽屉底部'
      }
    ]
  },
  {
    title: 'events',
    data: [
      {
        '名称': 'open',
        '说明': '打开抽屉',
        '回调函数': '-'
      },
      {
        '名称': 'close',
        '说明': '关闭抽屉',
        '回调函数': '-'
      },
      {
        '名称': 'closed',
        '说明': '抽屉关闭完毕后触发',
        '回调函数': '-'
      },
      {
        '名称': 'sumit',
        '说明': '点击确认时触发(show-footer为true)',
        '回调函数': '-'
      },
    ]
  }
]