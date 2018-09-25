class EventEmitter {
    constructor(){
        this._events = {} //维护一个对象
    }
    on(eventName,callback){//{失恋:[findGirl,saveMoney]}
        if(this._events[eventName]){ //如果有放一个新的
            this._events[eventName].push(callback)
        }else{ //没有声明一个数组
            this._events[eventName] = [callback]
        }
    }
    emit(eventName,...rest){
        //this指代的是当前调用的实例
        if(this._events[eventName]){ //循环依次执行
            this._events[eventName].forEach((item) =>{//普通函数中的this是undefined
                item.apply(this,rest)
            });
        }
    }
    removeListener(eventName,callback){
        if(this._events[eventName]){ //如果当前数组 和传递过来的callback相等则移除掉
            this._events[eventName] = this._events[eventName].filter(item=>item!==callback);
        }
    }
    once(eventName,callback){
        function one() {
            //此时emit触发会执行此函数，会给这个函数传递参数
                callback.apply(this,arguments); //在one函数中运行原来的函数，之后将one函数清空
                this.removeListener(eventName,one);
        }
        this.on(eventName,one); //先绑定 执行后在删除
    }
}
class Man extends EventEmitter{}
let man = new Man();
function findGirl(a) {console.log('找新女朋友',a)}
function saveMoney(a) {console.log('省钱',a)}
man.once('失恋',findGirl);
man.on('失恋',saveMoney);
man.removeListener('失恋',saveMoney)
man.emit('失恋');
man.emit('失恋');
man.emit('失恋');
man.emit('失恋');
//绑定一次 触发多次 只执行一次，触发后一次将数组中那一项删除掉下次触发就不会在执行了