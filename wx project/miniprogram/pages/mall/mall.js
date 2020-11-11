const db=wx.cloud.database({env:"node-7g7ku201eb98d337"}).collection('mall')

Page({
  data: {
    list:[],
    arr:[]
  },
  random() {
    var arr=[];
    var arr1=[];
    for(var i=0;i<3;i++){
      var num=Math.floor(Math.random()*this.data.list.length)
      if(arr.indexOf(num)==-1){
        arr.push(num)
        arr1.push(this.data.list[num])
      }else{
        i--;
      }
    }
    return arr1;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getdata(num){
    var that=this
    db.where({
      typeid:num.toString()
    }).get({
      success:function(res){
        that.setData({
          list:res.data
        })
        // console.log(that.data.list);
        that.data.arr[num-1]=that.random()
        // console.log(that.data.arr);
        that.setData({
          arr:that.data.arr
        })   
      }
    })
  },
  click(e){
    this.getdata(e.currentTarget.dataset.i)
  },
  onLoad: function (options) {
    for(var i=1;i<9;i++){
      this.getdata(i)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
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