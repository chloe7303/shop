(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{b789:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cart"}},[n("b-table",{attrs:{items:t.items,fields:t.fields,stripped:"",hover:""},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[n("b-button",{attrs:{variant:"danger"},on:{click:function(n){return t.del(e.index)}}},[n("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}})],1)]}}])})],1)},r=[],i={name:"Cart",data:function(){return{fields:[{key:"name",label:"商品名稱"},{key:"price",label:"價格"},{key:"action",label:"操作"}]}},computed:{items:function(){return this.$store.state.items}},methods:{del:function(t){this.$store.commit("delCart",t)}}},s=i,o=n("2877"),l=Object(o["a"])(s,a,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=cart.fc7e5d54.js.map