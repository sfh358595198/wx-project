// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array
    },
    cont:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onturn(e){
      this.setData({
        active:e.currentTarget.dataset.index
      })
      this.triggerEvent('turn',this.data.active)
    },
    skip(e){
      this.triggerEvent('click',{active:this.data.active,term1:e.currentTarget.dataset.index+1})
    }
  }
})
