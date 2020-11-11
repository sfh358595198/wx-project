const db=wx.cloud.database({env:"node-7g7ku201eb98d337"}).collection('sort')
Page({
  data: {
    sex:['男生','女生'],
    list:[],
    active:0
  },
  turn(e){
    console.log(e.currentTarget.dataset.index);
    this.setData({
      active:e.currentTarget.dataset.index
    })
    this.getdata(this.data.active+1)
  },
  skip(e){
    var term1=this.data.active==0?e.currentTarget.dataset.index+1:e.currentTarget.dataset.index+12
    // console.log(term1);
    wx.navigateTo({
      url: '../list/list?term1='+term1,
    })
  },
  getdata(num){
    var that=this;
    db.where({
      typeid:num.toString()
    }).get({
      success:function(res){
        that.setData({
          list:res.data
        })
      }
    })
  },
  onLoad: function (options) {
    this.getdata(this.data.active+1)
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