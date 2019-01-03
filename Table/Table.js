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
        dataIndex: 'age',
        key: 'age'
      },{
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name'
        }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        }, {
          title: 'aaa',
          dataIndex: 'aaa',
          key: 'aaa',
        }]
    },
    data:{
      type:Array,
      value:[{
        "Age": 111, "Name":222,"Address":333,"aaa":444
      }, {
        "Age": 222, "Name": 333, "Address": 444, "aaa": 555
      }]
    }
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