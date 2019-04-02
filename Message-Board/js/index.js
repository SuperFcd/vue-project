;(function () {
	var vm = new Vue ({
		el : "#showDiv",
		data : function () {
			return {
				textDom:"今天是周一，但是我很瞌睡",
				inputvalue:"",
				flag : false,
                list: [
                    {
						imgSrc: "./img/2a.jpg",
						// text:this.textDom,
                    	text: "阿拉德大陆",
                    	date: this.handleDate(),
                    	deleteButton: "删除"
                    },
                    {
                    	imgSrc: "./img/5a.jpg",
                    	text: "阿拉德大陆",
                    	date: this.handleDate(),
                    	deleteButton: "删除"
                    },   
                ]
			}
		},
		methods: {
			showText: function () {
				this.flag = true
			},
			close: function () {
				this.flag = false
			},
			
			confirmBtn: function () {
				// var myTarea = document.querySelector(".tarea").value;

				this.flag = false,
				this.list.push({
					imgSrc:this.imgRandom(),
					text: this.inputvalue,
                    date:this.handleDate(),
                    deleteButton: "删除"
				})
				this.inputvalue=""
			},
			handleDelete: function (index) {
				this.list.splice(index,1);
			},
			imgRandom:function () {
				var ranOne = Math.floor(Math.random()*5)
					var imgran =  "./img/" + ranOne+  "a.jpg"
					return imgran
			},
			handleDate:function () {
				var dateDom = new Date()
				var ymh = dateDom.toLocaleDateString();
				return ymh
			}

		}
	})
	
})();