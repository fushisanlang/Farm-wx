var globalThis=this,self=this;module.exports=require("../_commons/0.js")([{ids:[12],modules:{12:function(t,e,a){t.exports=a(125)},125:function(t,e){Component({options:{multipleSlots:!0,addGlobalClass:!0},properties:{closabled:{type:Boolean,value:!0},title:{type:String,value:""},subTitle:{type:String,value:""},extClass:{type:String,value:""},desc:{type:String,value:""},tips:{type:String,value:""},maskClosable:{type:Boolean,value:!0},mask:{type:Boolean,value:!0},show:{type:Boolean,value:!1,observer:"_showChange"},buttons:{type:Array,value:[]}},data:{wrapperShow:!1,innerShow:!1},lifetimes:{ready:function(){this._showChange(this.data.show)}},methods:{_showChange:function(t){var e=this;t?this.setData({wrapperShow:!0,innerShow:!0}):(this.setData({innerShow:!1}),setTimeout((function(){e.setData({wrapperShow:!1})}),300))},close:function(t){var e=t.currentTarget.dataset.type;(this.data.maskClosable||"close"===e)&&(this.setData({show:!1}),this.triggerEvent("close"))},buttonTap:function(t){var e=t.currentTarget.dataset.index;this.triggerEvent("buttontap",{index:e,item:this.data.buttons[e]},{})},onMaskMouseMove:function(){}}})}},entries:[[12,0]]}]);