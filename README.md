# 大学生体测成绩计算器

中国大学生体测成绩计算器，依据[2014年《国家学生体质健康标准》单项指标评分表](http://www.csh.edu.cn/wtzx/zl/20141226/2c909e854a8490a4014a8498e6730009.html)、[2014年《国家学生体质健康标准》加分指标评分表](http://www.csh.edu.cn/wtzx/zl/20141226/2c909e854a8490a4014a8496ab670007.html)编写。

### 安装

```shell
npm i physical-test-calculator --save
```

### 使用

```javascript
import calculator from 'physical-test-calculator';
let result = calculator(gender, grade, performances);
````

##### 选项

参数 | 类型 | 描述
--------- | ---- | -----------
gender | `string` | 性别: `male`(男), `female`(女)
grade | `string` | 年级: `freshman`(大一), `sophomore`(大二), `junior`(大三), `senior`(大四)
performances | `Object` | 体测原始数据: `{ 体测项目: 体测数据, ... }`
**体测项目** | **单位** | **描述**
weight | `千克` | 体重
height | `厘米` | 身高
vital_capacity | `毫升` | 肺活量
sit_and_reach | `厘米` | 坐立前屈
standing_long_jump | `米`, `厘米` | 立定跳远
race_50m | `秒` | 50米跑
pull_up | `个` | 引体向上, 仅`male`
race_1000m | `秒` | 1000米跑, 仅`male`
sit_up | `个` | 仰卧起坐, 仅`female`
race_800m | `秒` | 800米跑, 仅`female`

##### 返回值

计算器会返回一个`Object`结果。