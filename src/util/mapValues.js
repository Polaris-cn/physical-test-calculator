/**
 * Created by 方剑成 on 2017/2/16.
 */

export default (obj, func) => {
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  return result;
};