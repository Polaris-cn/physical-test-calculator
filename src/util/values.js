/**
 * Created by 方剑成 on 2017/2/16.
 */

export default obj => {
  let values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
};