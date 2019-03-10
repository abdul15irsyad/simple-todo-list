new Vue({
	el: ".app",
	data: {
		items: [],
		item:''
	},
	methods: {
		addItemEnter(e){
			if(e.keyCode === 13){
				addItem();
			}
		},
		addItem(){
			this.items.push(this.item);
			this.item='';
		},
		removeItem(item){
			let id = this.items.indexOf(item);
			this.items.splice(id,1);
		}
	}
});