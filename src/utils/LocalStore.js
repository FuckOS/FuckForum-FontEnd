/**
 * 获取经过解码处理的 localStorage 存储的数据(兼容旧版写法 @Dishonek)
 * @param {String} key 要获取目标字段的主键
 * @param {String | Object | Array} template 获取失败后返回这个模板
 */
export function getLocalStorageItem(key, template = {}) {
    let item = localStorage.getItem(key)
    if (item)
        try {
            return JSON.parse(item)
        } catch (err) {
            return template
        } else {
            return template
        }
        //return item ? JSON.parse(item) : template
}

/**
 * 将经过JSON编码处理的数据存储到  localStorage
 * @param {String} key 要设置目标字段的主键
 * @param {String | Object | Array} value 就是你存储的数据
 */
export function setLocalStorageItem(key, value) {
    value = JSON.stringify(value)
    localStorage.setItem(key, value)
}

/**
 * 将目标localStorage 删除
 * @param {String} key 要删除目标字段的主键
 */
export function rmLocalStorageItem(key) {
    localStorage.removeItem(key)
}