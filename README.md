# 大学生体测成绩计算器

中国大学生体测成绩计算器，依据[2014年《国家学生体质健康标准》单项指标评分表](http://www.csh.edu.cn/wtzx/zl/20141226/2c909e854a8490a4014a8498e6730009.html)、[2014年《国家学生体质健康标准》加分指标评分表](http://www.csh.edu.cn/wtzx/zl/20141226/2c909e854a8490a4014a8496ab670007.html)、[国家学生体质健康标准单项指标与权重](http://www.csh.edu.cn/wtzx/bz/20141226/2c909e854a84301a014a8440b4d2000f.html)编写。

### 安装

```shell
npm i physical-test-calculator --save
```

### 使用

##### Node

```javascript
import calculator from 'physical-test-calculator';
let result = calculator(gender, grade, performances);
````

##### HTML
```html
<!-- // development -->
<script src="https://unpkg.com/physical-test-calculator/dist/physical-test-calculator.js"></script>

<!-- // or production -->
<script src="https://unpkg.com/physical-test-calculator/dist/physical-test-calculator.min.js"></script>

var result = physicalTestCalculator(gender, grade, performances);
```


##### 选项

参数 | 类型 | 描述
--------- | ---- | -----------
gender | `string` | 性别: `male` (男), `female` (女)
grade | `string` | 年级: `freshman` (大一), `sophomore` (大二), `junior` (大三), `senior` (大四)
performances | `Object` | 体测原始数据: `{ 体测项目: 体测数据, ... }`
**体测项目** | **单位** | **描述**
weight | `千克` | 体重
height | `厘米` | 身高
vital_capacity | `毫升` | 肺活量
sit_and_reach | `厘米` | 坐立前屈
standing_long_jump | `米`, `厘米` | 立定跳远
race_50m | `秒` | 50米跑
pull_up | `个` | 引体向上, 仅 `male`
race_1000m | `秒` | 1000米跑, 仅 `male`
sit_up | `个` | 仰卧起坐, 仅 `female`
race_800m | `秒` | 800米跑, 仅 `female`

##### 返回值

计算器会返回一个 `Object` 结果。

> 体测项目 `weight`、`height` 仅用于计算 `bmi`，故计算结果中会有 `bmi` 属性，不会有 `weight`、`height` 属性。

属性 | 类型 | 描述
--------- | ---- | -----------
performance | `Object` | 体测原始数据, 如: 取BMI指数用 `performance.bmi`
rawScore | `Object` | 体测项目原始得分, 满分100, 如: 取BMI原始得分用 `rawScore.bmi`
score | `Object` | 体测项目加权得分, 如: 取立定跳远加权得分用 `score.standing_long_jump`
bonus | `Object` | 体测项目加分, 仅以下项目有加分: `bonus.pull_up`, `bonus.race_1000m`, `bonus.sit_up`, `bonus.race_800m`
grade | `Object` | 体测项目评级, 目前仅有两个: `grade.bmi` (BMI评级), `grade.aggregate` (体测总分评级)
aggregate | `Object` | 体测项目总分: `aggregate.score` (总分), `aggregate.grade` (评级)