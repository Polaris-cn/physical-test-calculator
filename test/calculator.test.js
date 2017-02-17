/**
 * Created by 方剑成 on 2017/2/16.
 */
import calculator from '../src';

import standard from '../src/standard';

const expect = require('chai').expect;

const gender = 'male';
const grade = 'junior';

const rawScoreTests = [
  ["bmi", { weight: 50, height: 180 }, 80],
  ["vital_capacity", { vital_capacity: 4159 }, 74],
  ["race_1000m", { race_1000m: 3 * 60 + 58 }, 72],
  ["race_50m", { race_50m: '7.5' }, 74],
  ["sit_and_reach", { sit_and_reach: 26 }, 100],
  ["pull_up", { pull_up: 13 }, 68],
  ["standing_long_jump", { standing_long_jump: 2.2 }, 64]
];

describe(
  '体测成绩单项测试-原始得分',
  () => rawScoreTests.forEach(test =>
    it(
      test[0],
      () => expect(
        calculator(gender, grade, test[1])
      ).to.have.deep.property('rawScore.' + test[0], test[2])
    )
  )
);

describe(
  '体测成绩单项测试-加权得分',
  () => rawScoreTests.forEach(test =>
    it(
      test[0],
      () => expect(
        calculator(gender, grade, test[1])
      ).to.have.deep.property(
        'score.' + test[0],
        test[2] * (standard.weighting_coefficient[test[0]] || 1)
      )
    )
  )
);


const bonusTests = [
  ['race_1000m', {race_1000m: 180 + 15}, 0],
  ['race_1000m', {race_1000m: 180}, 3],
  ['race_1000m', {race_1000m: 180 - 100}, 10],
  ['pull_up', {pull_up: 18}, 0],
  ['pull_up', {pull_up: 20 + 1}, 1],
  ['pull_up', {pull_up: 20 + 20}, 10]
];

describe(
  '体测成绩单项测试-加分',
  () => bonusTests.forEach(test =>
    it(
      test[0],
      () => expect(
        calculator(gender, grade, test[1])
      ).to.have.deep.property(
        'bonus.' + test[0],
        test[2]
      )
    )
  )
);


const aggregateTest = (() => {
  let aggregateTest = {
    performances: {},
    aggregate_score: 0
  };
  rawScoreTests.forEach(test => {
    Object.assign(aggregateTest.performances, test[1]);
    aggregateTest.aggregate_score += test[2] * (standard.weighting_coefficient[test[0]] || 1);
  });
  return aggregateTest;
})();

describe(
  '体测成绩测试-总分',
  () => {
    it(
      'aggregate.score',
      () => expect(
        calculator(gender, grade, aggregateTest.performances)
      ).to.have.deep.property(
        'aggregate.score',
        aggregateTest.aggregate_score
      )
    );
    it(
      'aggregate.score=0',
      () => expect(
        calculator(gender, grade, {
          race_1000m: 0,
          pull_up: 0
        })
      ).to.have.deep.property(
        'aggregate.score',
        0
      )
    );
  }
);