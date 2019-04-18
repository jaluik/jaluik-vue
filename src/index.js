
let child1 = Vue.extend({
    template:'#my_img',
    props:['imgsrc']
})
let child2 = Vue.extend({
    template:'#my_title',
    props:['title']
})

Vue.component('parent',{
    template:'#my_div',
    components:{
        'child1':child1,
        'child2':child2
    },
    props:['imgtitle','imgsrc']
})


var app = new Vue({
    el: '#app',
    data: {
        title: "我是不是很漂亮",
        img: "F:/web/learn_team_web/jaluik/myData/img/op1.jpg"   
    }
})