Component({
  properties: {

  },
  data: {
    
  },
  methods: {
    onfocus(){
      wx.navigateTo({
        url: '../../pages/search/search',
      })
    }
  }
})
