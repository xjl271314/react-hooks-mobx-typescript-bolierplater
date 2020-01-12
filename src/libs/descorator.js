export function log(target){
    const desc  = Object.getOwnPropertyDescriptors(target.prototype)

    for (const key of Object.keys(desc)){
        // filter constructor
        if(key === 'constructor'){
            continue
        }

        const func = desc[key].value
        // apply fn loog
        if(typeof func === 'function'){
            Object.defineProperty(target.prototype, key, {
                value(...args){
                    console.log(`------${new Date().getTime()}------`, `before use ${key}`)
                    const ret = func.apply(this, args)
                    console.log(`------${new Date().getTime()}------`, `after use ${key}`)

                    return ret
                }
            })
        }
    }
}


export function readOnly(target, key, descpritor){
    descpritor.writable = false
}
