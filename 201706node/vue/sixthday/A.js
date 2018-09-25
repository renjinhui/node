//通过export导出一个变量 会在内部声明一个对象 把str放到对象中 {str:'hello'}
export let str = 'hello';
export function a() {
    console.log('a')
}
export let b = () =>{
    console.log('b')
};
export let q = {a:1}
// exports.str = str;
// module.exports = str