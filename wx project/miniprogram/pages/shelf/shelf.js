const db=wx.cloud.database({env:'node-7g7ku201eb98d337'})
Page({
  data: {
    list:[]
  },
  gomall(){
    wx.switchTab({
      url: '../mall/mall',
    })
  },
  getdata(){
    var that=this;
    db.collection('shelf').get().then(res=>{
      console.log(res.data);
      that.setData({
        list:res.data
      })
    })
  },
  onLoad: function (options) {
    this.getdata()
  },
  onReady: function () {
    
  },
  onShow: function () {
    this.getdata()
  },
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})