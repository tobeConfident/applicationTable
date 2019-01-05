Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    column: {            // 属性名
      type: Array,    
      value: [{
        title: 'Age',
        dataIndex: 'Age',
        key: 'Age'
      },{
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name'
        }, {
          title: 'Address',
          dataIndex: 'Address',
          key: 'Address',
        }]
    },
    data:{
      type:Array,
      value:[{
        "Age": 11, "Name":'小红',"Address":'北京',
      }, {
        "Age": 22, "Name": '小明', "Address": '北京',
      }]
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // flag: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
  }
})