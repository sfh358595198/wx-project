// components/search/search.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    focus:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // onfocus(){
    //   this.setData({
    //     focus:true
    //   })
    //   console.log(this.data.focus);
    // },
    onin(e){
      // console.log(e.detail.value);
      this.setData({
        value:e.detail.value
      })
      // this.triggerEvent('input',this.data.value)
    },
    rescind(){
      this.setData({
        value:''
      })
    },
    cancel(){
      this.setData({
        focus:false
      })
      wx.navigateBack({
        delta: 0,
      })
    },
    search(){
      wx.cloud.database().collection('mall').doc('74a35ee25f9fbc44024aa1ab04458160').get({
        success: function(res) {
          console.log(11111);
          console.log(res.data)
        }
      })
    },
    getdata(){
      wx.cloud.database().collection('mall').get({
        success: function(res) {
          console.log(11111);
          console.log(res.data)
        }
      })
    }
  }
})
