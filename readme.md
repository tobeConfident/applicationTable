## 两个属性
 - column: 表格头，数据格式为``Array``,例如：``[{},{}]``
 - data: 表格数据,数据格式为``Array``,例如：``[{},{}]``

## 使用方法
 - 在需要使用的页面中的``.json``文件中引用：
 ```
 {
  "usingComponents": {
    "Table": "../../component/Table/Table"
  }
}
```
 - 在``wxml``文件中直接使用：
 ```
 <Table 
  column="{{column}}" 
  data="{{data}}"
 />
```
  - ``js``文件中写数据：
  ```
  data: {
    column: [{
      title: 'a',
      dataIndex: 'a',
      key: 'a'
    }, {
      title: 'b',
      dataIndex: 'b',
      key: 'b'
    }, {
      title: 'x',
      dataIndex: 'x',
      key: 'x',
    }, {
      title: 'aaa',
      dataIndex: 'aaa',
      key: 'aaa',
    }],
    data: [{
      "a": 111, "b": 222, "x": 333, "aaa": 444
    }, {
      "a": 222, "b": 333, "x": 444, "aaa": 555
      }, {
        "a": 222, "b": 333, "x": 444, "aaa": 555
      }, {
        "a": 222, "b": 333, "x": 444, "aaa": 555
      }, {
        "a": 222, "b": 333, "x": 444, "aaa": 555
      }]
  },
  ```
## 升级
- 支持左右滑动
- 简化.wxss代码