/**
 * Created by 方剑成 on 2017/2/16.
 */

import util from './';

const compare = (score, rule, isSmallBetter) => {
  return isSmallBetter ? score > rule : score < rule;
};

const calculate = (score, standard, isSmallBetter = false) => {

  score = Number(score);

  let values = standard[0], rules = standard[1];

  let len = rules.length;

  for (let i = 0; i < len; i++) {
    let rule = rules[i], value = values[i];
    if (util.isNumber(rule)) {
      if (score === 0) return 0;
      if (score === rule) return value;
      if (compare(score, rule, isSmallBetter)) {
        return i === 0 ? 0 : values[i - 1];
      } else {
        if (i === len - 1) return value;
      }
    } else {
      rule = util.isArray(rule[0]) ? rule : [ rule ];
      for (let i2 = 0; i2 < rule.length; i2++) {
        let min = rule[i2][0] === 'min' ? -Infinity : rule[i2][0],
            max = rule[i2][1] === 'max' ? Infinity : rule[i2][1];
        if (score >= min && score <= max) return value;
      }
    }
  }
};

export default calculate;
