const db=wx.cloud.database({env:'node-7g7ku201eb98d337'}).collection('list')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kind:['最新','最热'],
    list:[],
    term1:0,
    active:0
  },
  turn(e){
    this.setData({
      active:e.currentTarget.dataset.index
    })
    this.getdata(this.data.term1,this.data.active+1)
  },
  getdata(num1,num2){
    var that=this;
    db.where({
      term1:num1,
      term2:num2.toString()
    }).get({
      success:function(res){
        console.log(res.data);
        that.setData({
          list:res.data
        })
      }
    })
  },
  onLoad: function (options) {
    this.setData({
      term1:options.term1
    })
    this.getdata(this.data.term1,this.data.active+1)
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})