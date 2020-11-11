// components/module1/module1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String
    },
    isbold:{
      type:Boolean,
      // default:false
    },
    turn:{
      type:Boolean,
      // default:false
    },
    list:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onturn(){
      this.triggerEvent('turn')
    }
  }
})
