/**
 * Created by 方剑成 on 2017/2/16.
 */

import standard from './standard';
import util from './util';

const calculator = (
  gender, // 性别, male/female
  grade, // 年级, freshman/sophomore/junior/senior
  performances // 体测项目原始成绩
) => {

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

  performances = util.mapValues(performances, performance => +performance);

  if (performances.standing_long_jump !== undefined) { // 跳远: 米转厘米
    performances.standing_long_jump *= performances.standing_long_jump < 5 ? 100 : 1;
  }


  if (!!performances.weight && !!performances.height) {
    // BMI指数
    performances.bmi = Number((
      parseFloat(performances.weight) /
      Math.pow(
        parseFloat(performances.height) / 100,
        2
      )
    ).toFixed(1));
  }

  gender = gender === 'male' ? 'male' : 'female';

  grade = ['freshman', 'sophomore'].indexOf(grade) !== -1 ? 'freshman_sophomore' : 'junior_senior';

  let result = {
    performance: performances,
    rawScore: {},
    score: {},
    bonus: {},
    grade: {},
    aggregate: {}
  };

  util.forOwn(performances, (performance, event) => {
    let score = standard.score[gender][grade][event],
        isSmallBetter = standard.small_better.indexOf(event) !== -1,
        grade$ = standard.grade[gender][event],
        bonus = standard.bonus[gender][event];
    if (!!score) {
      result.rawScore[event] = util.calculate(performance, score, isSmallBetter);
      result.score[event] = result.rawScore[event] * (standard.weighting_coefficient[event] || 1);
    }
    if (!!grade$) {
      result.grade[event] = util.calculate(
        event === 'bmi' ? performances.bmi : result.score[event],
        grade$
      );
    }
    if (!!bonus) {
      result.bonus[event] = util.calculate(
        isSmallBetter ? util.last(score[1]) - performance : performance - util.last(score[1]),
        bonus
      );
    }
  });

  // 总分
  result.aggregate.score = util.sum(
    [...util.values(result.score), ...util.values(result.bonus)]
  );
  result.aggregate.grade = result.grade.aggregate = util.calculate(
    result.aggregate.score,
    standard.grade[gender].aggregate
  );

  return result;

};



export default calculator;