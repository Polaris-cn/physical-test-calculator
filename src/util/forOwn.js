/**
 * Created by 方剑成 on 2017/2/16.
 */

export default (obj, func) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      func(obj[key], key);
    }
  }
};