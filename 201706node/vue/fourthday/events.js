// 发布 订阅 取消订阅 异步模式 回调函数 （一对多的关系）
// {女生失恋:['cry','eat','shopping']}
function Girl() {
    this._events = {};
}
Girl.prototype.on = function (eventName,callback) {
    //先判断_events中是否包含eventName属性
    if(this._events[eventName]){
        this._events[eventName].push(callback);//{女生失恋:[cry,eat]}
    }else{
        this._events[eventName] = [callback]; //{女生失恋:[cry]}
    }
};
Girl.prototype.emit = function (eventName,...rest) {
    if(this._events[eventName]){ //让订阅的事件依次执行
        this._events[eventName].forEach(item=>item(...rest));
    }
};
//移除事件监听
Girl.prototype.removeListener = function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName] =  this._events[eventName].filter(item=>item!==callback);
    }
};
let girl = new Girl();
function cry(w) {console.log('大哭',w)}
function eat(w) {console.log('大吃',w)}
girl.on('女生失恋',cry); //{女生失恋:[cry]}
girl.on('女生失恋',eat);//{女生失恋:[cry,eat]}
girl.removeListener('女生失恋',eat); //在没触发之前将数组里的某一项移除掉
girl.emit('女生失恋','xxx');
//EventBus事件车