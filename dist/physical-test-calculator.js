(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('physicalTestCalculator', factory) :
	(global.physicalTestCalculator = factory());
}(this, (function () { 'use strict';

var male = { "freshman_sophomore": { "bmi": [[60, 80, 100], [[28, "max"], [["min", 17.8], [24, 27.9]], [17.9, 23.9]]], "vital_capacity": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [2300, 2460, 2620, 2780, 2940, 3100, 3220, 3340, 3460, 3580, 3700, 3820, 3940, 4060, 4180, 4300, 4550, 4800, 4920, 5040]], "race_50m": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [10.1, 9.9, 9.7, 9.5, 9.3, 9.1, 8.9, 8.7, 8.5, 8.3, 8.1, 7.9, 7.7, 7.5, 7.3, 7.1, 7, 6.9, 6.8, 6.7]], "sit_and_reach": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [-1.3, -0.3, 0.7, 1.7, 2.7, 3.7, 5.1, 6.5, 7.9, 9.3, 10.7, 12.1, 13.5, 14.9, 16.3, 17.7, 19.5, 21.3, 23.1, 24.9]], "standing_long_jump": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [183, 188, 193, 198, 203, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 256, 263, 268, 273]], "pull_up": [[10, 20, 30, 40, 50, 60, 64, 68, 72, 76, 80, 85, 90, 95, 100], [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]], "race_1000m": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [372, 352, 332, 312, 292, 272, 267, 262, 257, 252, 247, 242, 237, 232, 227, 222, 214, 207, 202, 197]] }, "junior_senior": { "bmi": [[60, 80, 100], [[28, "max"], [["min", 17.8], [24, 27.9]], [17.9, 23.9]]], "vital_capacity": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [2350, 2520, 2690, 2860, 3030, 3200, 3320, 3440, 3560, 3680, 3800, 3920, 4040, 4160, 4280, 4400, 4650, 4900, 5020, 5140]], "race_50m": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [10, 9.8, 9.6, 9.4, 9.2, 9, 8.8, 8.6, 8.4, 8.2, 8, 7.8, 7.6, 7.4, 7.2, 7, 6.9, 6.8, 6.7, 6.6]], "sit_and_reach": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [-0.8, 0.2, 1.2, 2.2, 3.2, 4.2, 5.6, 7, 8.4, 9.8, 11.2, 12.6, 14, 15.4, 16.8, 18.2, 19.9, 21.5, 23.3, 25.1]], "standing_long_jump": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [185, 190, 195, 200, 205, 210, 214, 218, 222, 226, 230, 234, 238, 242, 246, 250, 258, 265, 270, 275]], "pull_up": [[10, 20, 30, 40, 50, 60, 64, 68, 72, 76, 80, 85, 90, 95, 100], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]], "race_1000m": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [370, 350, 330, 310, 290, 270, 265, 260, 255, 250, 245, 240, 235, 230, 225, 220, 212, 205, 200, 195]] } };
var female = { "freshman_sophomore": { "bmi": [[60, 80, 100], [[28, "max"], [["min", 17.1], [24, 27.9]], [17.2, 23.9]]], "vital_capacity": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [1800, 1840, 1880, 1920, 1960, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3150, 3300, 3350, 3400]], "race_50m": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [11.3, 11.1, 10.9, 10.7, 10.5, 10.3, 10.1, 9.9, 9.7, 9.5, 9.3, 9.1, 8.9, 8.7, 8.5, 8.3, 8, 7.7, 7.6, 7.5]], "sit_and_reach": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [2, 2.8, 3.6, 4.4, 5.2, 6, 7.3, 8.6, 9.9, 11.2, 12.5, 13.8, 15.1, 16.4, 17.7, 19, 20.6, 22.2, 24, 25.8]], "standing_long_jump": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [126, 131, 136, 141, 146, 151, 154, 157, 160, 163, 166, 169, 172, 175, 178, 181, 188, 195, 201, 207]], "sit_up": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 49, 52, 54, 56]], "race_800m": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [324, 314, 304, 294, 284, 274, 269, 264, 259, 254, 249, 244, 239, 234, 229, 224, 217, 210, 204, 198]] }, "junior_senior": { "bmi": [[60, 80, 100], [[28, "max"], [["min", 17.1], [24, 27.9]], [17.2, 23.9]]], "vital_capacity": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [1850, 1890, 1930, 1970, 2010, 2050, 2150, 2250, 2350, 2450, 2550, 2650, 2750, 2850, 2950, 3050, 3200, 3350, 3400, 3450]], "race_50m": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [11.2, 11, 10.8, 10.6, 10.4, 10.2, 10, 9.8, 9.6, 9.4, 9.2, 9, 8.8, 8.6, 8.4, 8.2, 7.9, 7.6, 7.5, 7.4]], "sit_and_reach": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [2.5, 3.3, 4.1, 4.9, 5.7, 6.5, 7.8, 9.1, 10.4, 11.7, 13, 14.3, 15.6, 16.9, 18.2, 19.5, 21, 22.4, 24.4, 26.3]], "standing_long_jump": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [127, 132, 137, 142, 147, 152, 155, 158, 161, 164, 167, 170, 173, 176, 179, 182, 189, 196, 202, 208]], "sit_up": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 50, 53, 55, 57]], "race_800m": [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [322, 312, 302, 292, 282, 272, 267, 262, 257, 252, 247, 242, 237, 232, 227, 222, 215, 208, 202, 196]] } };
var score = {
	male: male,
	female: female
};

var male$1 = { "race_1000m": [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [4, 8, 12, 16, 20, 23, 26, 29, 32, 35]], "pull_up": [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]] };
var female$1 = { "race_800m": [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]], "sit_up": [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 7, 8, 9, 10, 11, 12, 13]] };
var bonus = {
	male: male$1,
	female: female$1
};

var male$2 = { "aggregate": [["优秀", "良好", "及格", "不及格"], [[90, "max"], [80, 89.9], [60, 79.9], ["min", 59.9]]], "bmi": [["低体重", "正常", "超重", "肥胖"], [["min", 17.8], [17.9, 23.9], [24, 27.9], [28, "max"]]] };
var female$2 = { "aggregate": [["优秀", "良好", "及格", "不及格"], [[90, "max"], [80, 89.9], [60, 79.9], ["min", 59.9]]], "bmi": [["低体重", "正常", "超重", "肥胖"], [["min", 17.1], [17.2, 23.9], [24, 27.9], [28, "max"]]] };
var grade = {
	male: male$2,
	female: female$2
};

var small_better = ["race_50m", "race_800m", "race_1000m"];

var bmi = 0.15;
var vital_capacity = 0.15;
var race_1000m = 0.2;
var race_800m = 0.2;
var race_50m = 0.2;
var sit_up = 0.1;
var sit_and_reach = 0.1;
var pull_up = 0.1;
var standing_long_jump = 0.1;
var weighting_coefficient = {
	bmi: bmi,
	vital_capacity: vital_capacity,
	race_1000m: race_1000m,
	race_800m: race_800m,
	race_50m: race_50m,
	sit_up: sit_up,
	sit_and_reach: sit_and_reach,
	pull_up: pull_up,
	standing_long_jump: standing_long_jump
};

/**
 * Created by 方剑成 on 2017/2/16.
 */

var standard = {
  score: score,
  bonus: bonus,
  grade: grade,
  small_better: small_better,
  weighting_coefficient: weighting_coefficient
};

/**
 * Created by 方剑成 on 2017/2/16.
 */

var compare = function compare(score, rule, isSmallBetter) {
  return isSmallBetter ? score > rule : score < rule;
};

var calculate = function calculate(score, standard) {
  var isSmallBetter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


  score = Number(score);

  var values = standard[0],
      rules = standard[1];

  var len = rules.length;

  for (var i = 0; i < len; i++) {
    var rule = rules[i],
        value = values[i];
    if (util.isNumber(rule)) {
      if (score === 0) return 0;
      if (score === rule) return value;
      if (compare(score, rule, isSmallBetter)) {
        return i === 0 ? 0 : values[i - 1];
      } else {
        if (i === len - 1) return value;
      }
    } else {
      rule = util.isArray(rule[0]) ? rule : [rule];
      for (var i2 = 0; i2 < rule.length; i2++) {
        var min = rule[i2][0] === 'min' ? -Infinity : rule[i2][0],
            max = rule[i2][1] === 'max' ? Infinity : rule[i2][1];
        if (score >= min && score <= max) return value;
      }
    }
  }
};

/**
 * Created by 方剑成 on 2017/2/16.
 */

var forOwn = (function (obj, func) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      func(obj[key], key);
    }
  }
});

/**
 * Created by 方剑成 on 2017/2/16.
 */

var isArray = (function (obj) {
  return Array.isArray ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';
});

/**
 * Created by 方剑成 on 2017/2/16.
 */

var isNumber = (function (obj) {
  return typeof obj === 'number';
});

/**
 * Created by 方剑成 on 2017/2/16.
 */

var last = (function (arr) {
  return arr[arr.length - 1];
});

/**
 * Created by 方剑成 on 2017/2/16.
 */

var mapValues = (function (obj, func) {
  var result = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  return result;
});

/**
 * Created by 方剑成 on 2017/2/16.
 */

var sum = (function (arr) {
  return arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
});

/**
 * Created by 方剑成 on 2017/2/16.
 */

var values = (function (obj) {
  var values = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
});

/**
 * Created by 方剑成 on 2017/2/16.
 */

var util = {
  calculate: calculate,
  forOwn: forOwn,
  isArray: isArray,
  isNumber: isNumber,
  last: last,
  mapValues: mapValues,
  sum: sum,
  values: values
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * Created by 方剑成 on 2017/2/16.
 */

var calculator = function calculator(gender, // 性别, male/female
grade, // 年级, freshman/sophomore/junior/senior
performances // 体测项目原始成绩
) {

  // performances:
  // {
  //     weight, // 体重, 千克
  //     height, // 身高, 厘米
  //     vital_capacity, // 肺活量, 毫升
  //     race_50m, // 50米跑, 秒
  //     sit_and_reach, // 坐立前屈, 厘米
  //     standing_long_jump, // 立定跳远, 米/厘米
  //     race_1000m, // 1000米跑(男), 秒
  //     pull_up, // 引体向上(男), 个
  //     race_800m, // 800米跑(女), 秒
  //     sit_up, // 仰卧起坐(女), 个
  // }

  performances = util.mapValues(performances, function (performance) {
    return +performance;
  });

  if (performances.standing_long_jump) {
    // 跳远: 米转厘米
    performances.standing_long_jump *= performances.standing_long_jump < 5 ? 100 : 1;
  }

  if (performances.weight !== undefined && performances.height !== undefined) {
    // BMI指数
    performances.bmi = Number((parseFloat(performances.weight) / Math.pow(parseFloat(performances.height) / 100, 2)).toFixed(1));
  }

  gender = gender === 'male' ? 'male' : 'female';

  grade = ['freshman', 'sophomore'].indexOf(grade) !== -1 ? 'freshman_sophomore' : 'junior_senior';

  var result = {
    rawScore: {},
    score: {},
    bonus: {},
    grade: {},
    aggregate: {}
  };

  util.forOwn(performances, function (performance, event) {
    var score = standard.score[gender][grade][event],
        isSmallBetter = standard.small_better.indexOf(event) !== -1,
        grade$ = standard.grade[gender][event],
        bonus = standard.bonus[gender][event];
    if (!!score) {
      result.rawScore[event] = util.calculate(performance, score, isSmallBetter);
      result.score[event] = result.rawScore[event] * (standard.weighting_coefficient[event] || 1);
    }
    if (!!grade$) {
      result.grade[event] = util.calculate(result.score[event], grade$);
    }
    if (!!bonus) {
      result.bonus[event] = util.calculate(isSmallBetter ? util.last(score[1]) - performance : performance - util.last(score[1]), bonus);
    }
  });

  // 总分
  result.aggregate.score = util.sum([].concat(toConsumableArray(util.values(result.score)), toConsumableArray(util.values(result.bonus))));
  result.aggregate.grade = result.grade.aggregate = util.calculate(result.aggregate.score, standard.grade[gender].aggregate);

  return result;
};

return calculator;

})));
