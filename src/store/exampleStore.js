import {
    observable,
    isArrayLike,
    computed,
    autorun,
    when,
    reaction,
    action
} from 'mobx'

class Store{
    @observable array = [1,2,3]
    @observable string = 'hello world'
    @observable number = 1
    @observable boolean = false
    @observable obj = {}
    @observable map = new Map()
    @observable set = new Set()

    @computed get mixed(){
        return store.string + store.number
    }

    @action changeName(){
        store.string = 'Hello World'
        store.number = 2
    }
}
// computed
const store = new Store()

// const tmp1 = computed(()=>store.string + store.number)
// tmp1.observe(function(change){
//     console.log(change)
// })

// store.string = 'Hello World'

// console.log(tmp1)

/**
 * autorun
 * 当autorun中的可观察数据发生修改就会自动运行
 *
 */
// autorun(()=>{
//     console.log(store.string + store.number)
// })

// store.string = 'Hello World'
// store.number = 2

/**
 * when
 * when(predicate: () => boolean, effect?: () => void, options?)
 * 当第一个参数为真的时候执行第二个方法
 *
 */

/**
 * reaction 可以实现写缓存逻辑
 * reaction(() => data, (data, reaction) => { sideEffect }, options?)
 * 
 * autorun 的变种，对于如何追踪 observable 赋予了更细粒度的控制。 
 * 它接收两个函数参数，第一个(数据 函数)是用来追踪并返回数据作为第二个函数(效果 函数)的输入。 
 * 不同于 autorun 的是当创建时效果 函数不会直接运行，只有在数据表达式首次返回一个新值后才会运行。
 * 在执行 效果 函数时访问的任何 observable 都不会被追踪。
 *
 */

// runInAction(f) 是 action(f)() 的语法糖

