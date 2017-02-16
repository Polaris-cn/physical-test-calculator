/**
 * Created by 方剑成 on 2017/2/16.
 */

export default obj => Array.isArray ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';