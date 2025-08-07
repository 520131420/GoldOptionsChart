代码尚未完善

# 使用教程

可按需下载文件

> 单纯查看下载

```
data.js
index.css
index.html  #双击运行此文件即可
```

> 想要数据更新可下载全文件

*必备文件*

```
data.js
index.css
index.html
package.json
updata.js
```

1.安装环境

```
nodejs官网：https://nodejs.org/zh-cn/download
下载安装
```

[![pVUxqGF.png](https://s21.ax1x.com/2025/08/07/pVUxqGF.png)](https://imgse.com/i/pVUxqGF)

2.安装依赖

```
npm i #确保你已经下载了package.json文件
```

[![pVUxTaV.png](https://s21.ax1x.com/2025/08/07/pVUxTaV.png)](https://imgse.com/i/pVUxTaV)

3.运行更新数据脚本

```
node updata.js 2509
```

[![pVUxbPU.png](https://s21.ax1x.com/2025/08/07/pVUxbPU.png)](https://imgse.com/i/pVUxbPU)

> 说明

网页端更新数据代码（开发中）

```
node server.js
```

[![pVUz9IK.png](https://s21.ax1x.com/2025/08/07/pVUz9IK.png)](https://imgse.com/i/pVUz9IK)

# 进阶api

> 查询最新合约信息api：

```js
`https://www.cmegroup.com/CmeWS/mvc/Volume/TradeDates?exchange=CBOT&isProtected&_t=${new Date().valueOf()}`
```

> 返回数据样例

```json
[
    {
        "tradeDate": "20250801",
        "formattedTradeDate": "Friday, August 01, 2025",
        "reportType": "PRELIMINARY"
    },
    {
        "tradeDate": "20250731",
        "formattedTradeDate": "Thursday, July 31, 2025",
        "reportType": "FINAL"
    }
]
```

> 合约数据api：

```js
`https://www.cmegroup.com/CmeWS/mvc/Volume/Options/Details?productid=192&tradedate=${tradeDate}&expirationcode=${月份编号+年份}&reporttype=P&isProtected&_t=${new Date().valueOf()}`
/* 示例
https://www.cmegroup.com/CmeWS/mvc/Volume/Options/Details?productid=192&tradedate=20250801&expirationcode=U25&reporttype=P&isProtected&_t=1754286167191
*/
```

> 返回数据格式

```json
{
	"monthData": [
		{
			"month": "SEP 2025",
            "monthID": "SEP-2025-Calls",
            "totalData": {
                "globex": "22,025",
                "openOutcry": "0",
                "totalVolume": "22,810",
                "blockVolume": "0",
                "efpVol": "0",
                "efrVol": "0",
                "eooVol": "0",
                "efsVol": "0",
                "subVol": "0",
                "pntVol": "785",
                "tasVol": "0",
                "deliveries": "0",
                "atClose": "107,863",
                "change": "4,087",
                "exercises": "481"
            },
            "strikeData":[
            	{
            		"month": "SEP 2025",
                    "monthID": "SEP-2025-Calls",
                    "globex": "0",
                    "openOutcry": "0",
                    "totalVolume": "0",
                    "blockVolume": "0",
                    "efpVol": "0",
                    "efrVol": "0",
                    "eooVol": "0",
                    "efsVol": "0",
                    "subVol": "0",
                    "pntVol": "0",
                    "tasVol": "0",
                    "deliveries": "0",
                    "opnt": "-",
                    "aon": "-",
                    "atClose": "1",
                    "change": "0",
                    "strike": "2500",
                    "exercises": "0"
            	},
            	{...}
            ]
		},
		{
			"month": "SEP 2025",
            "monthID": "SEP-2025-Puts",
            ...
		}
	]
}
```



> 月份编号对照表

[![黄金期权月份对照表](https://s21.ax1x.com/2025/08/04/pVUFLyF.png)](https://imgse.com/i/pVUFLyF)
