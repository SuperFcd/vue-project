// var warpDom = document.getElementById("warp")
//     warpDom.innerText="我是小白"

var vm =new Vue({

    el:"#warp",
    data : function () {
        return {
            warpDom:"我是warp",
            showDom:"我是六娃",
            nameDom:"我叫冯小白",
            flag:true,
            list:[
                {valueDom:"学好vue"},
                {valueDom:"学好js"},
                {valueDom:"学好html"},
                {valueDom:"学好Jquery"}
            ],
            activeClass:"my-class",
            comeClass:"project-class",
            master:"事件监听",
            inputMes:""

        }
    },
    methods : {
        handleAddClick:function () {
            console.log(this.master)
            this.handleMyClick()
        },
        handleMyClick(){
            this.nameDom = "德玛西亚"
        }
    },


})