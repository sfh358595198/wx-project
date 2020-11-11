const db=wx.cloud.database({env:"node-7g7ku201eb98d337"})
Page({
  data: {
    item:'',
    text:'加入书架',
  },
  add(){
    var that=this;
    db.collection('shelf').add({
      data:that.data.item,
    })
    var book=wx.getStorageSync('book')?JSON.parse(wx.getStorageSync('book')):[]
    var record=JSON.stringify(book.concat(that.data.item.id))
    console.log(record);
    wx.setStorage({
      data: record,
      key: 'book',
      success:function(res){
        that.setData({
          text:'已加书架'
        })
      }
    })
  },
  onLoad: function (options) {
    console.log(options.id);
    var that=this;
    db.collection('list').where({
      id:options.id
    }).get({
      success:function(res){
        var book=wx.getStorageSync('book')?JSON.parse(wx.getStorageSync('book')):[]
        console.log(book);
        if(book.indexOf(res.data[0].id)!=-1){
          that.data.text="已加书架"
        }
        that.setData({
          item:res.data[0],
          text:that.data.text
        })
      }
    })
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