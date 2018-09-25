let vm = new Vue({
    el:'#app',
    data:{
        todo:{isSelected:false,title:''},
        todos:[
            {title:'回家洗碗',isSelected:false},
            {title:'给媳妇买包',isSelected:false}
        ],
        current:'',
        val:'', //点击那一刻 不管你咋改这个值永远都是改变前的状态
        hashValue:''
    },
    methods:{
        addTodo(){
            //将当前输入的内容 放入到数组中
            this.todos.push(this.todo);
            //将输入框中的内容删除
            this.todo = {isSelected:false,title:''};
        },
        remove(todo){
            this.todos = this.todos.filter(item=>item!==todo);
        },
        save(){
            this.current = ''; //将当前点击的 和任何一项都不相等则会变回默认状态
        },
        change(todo){ //当双击时将当前的元素保存到current变量上
            this.current = todo; //克隆一个新对象
            // JSON.stringify不支持转化函数
            // es7语法 对象转开运算 要求babel编译 || chrome版本60+
            //JSON.parse(JSON.stringify(todo))
            this.val = {...todo}; //深拷贝 和以前内存地址无关，而且长得一模一样
        },
        cancel(){ //当用户点击esc时 要做的是将当前项的值改回原有状态
            this.current.title =this.val.title;
            //this.current和当前循环的某一个是一样的 所以更改current即可（同一个空间）
            this.current = '';
        }
    },
    computed:{
        count(){ //计算未完成属性的个数
            return this.todos.filter(item=>!item.isSelected).length;
        },
        newTodos(){ //计算出来的结果 根据hash 和 源数组，循环计算出来的数组
            if(this.hashValue === 'all'){
                return this.todos;
            }else if(this.hashValue === 'finish'){
                return this.todos.filter(item=>item.isSelected)
            }else{
                return this.todos.filter(item=>!item.isSelected)
            }
        }
    },
    directives:{ //自定义的指令可以写在这里
        //ele 当前元素 (可以再指令中操作DOM)  bindings一些其他参数
        autoFocus(ele,bindings){
            if(bindings.value){
                ele.focus();
            }
        }
    },
    created(){ //当实例创建后执行的方法，取的过程是同步的，如果放到mounted会导致渲染两次
        this.todos = JSON.parse(localStorage.getItem('todos')) || this.todos;
        //默认取出结果 放入到todos中
    },
    watch:{ // 只监控 todos数组的个数 数组变化了可以监控到，数组中的对象默认不会监控
        todos:{
            handler(){ //默认调用的就是handler方法
                //数据变化后将内容存储到localeStorage中
                localStorage.setItem('todos',JSON.stringify(this.todos));
            },
            deep:true //深度监控
        }
    }
});
//hash值变化时会执行此函数
function fn() {
    let hashValue = window.location.hash.slice(1) || 'all'; //取出来的hash值
    console.log(hashValue);
    vm.hashValue = hashValue; //将hash值 挂载再vue的实例上，目的是为了可以再vue中通过属性过滤最终的结果
}
fn();
window.addEventListener('hashchange',fn,false);