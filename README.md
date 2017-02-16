## 安装
```shell
npm i physical-test-calculator --save
```

## 使用
```javascript
import Calculator from 'physical-test-calculator';
const result = Calculator('male', 'junior', { ... , height: 160 , ... });
const aggregateScore = result.aggregate.score; // 体测总成绩
````

## 用语说明
- event 测试项目
- performance 测试成绩
- score 测试得分
- bonus 测试加分
- grade 测试评级
- aggregate 总分 = 测试得分 + 测试加分
- freshman 大一
- sophomore 大二
- junior 大三
- senior 大四