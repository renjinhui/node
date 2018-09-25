## state(状态)
- 类比于组件中的data，以前组件中的data就是当前组件的状态

## getters(获取)
- 类比于组件中的computed,根据状态计算出一些属性来

## mutations(突变,此方法不能使用异步)
- 如果想改变状态只能通过mutations改，所以是改变状态的唯一途径

## actions(动作,可以做异步操作)
- 在action中发起异步动作，发起后提交到mutation，要通过mutation更改状态

## modules(模块，可以实现给state分层)
- 更好管理我们的状态

