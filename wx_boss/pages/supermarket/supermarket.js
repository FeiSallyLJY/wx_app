// pages/supermarket/supermarket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    json: {
      "result": [
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3905064,
          "positionName": "流程管理员",
          "city": "广州",
          "createTime": "今天 21:25",
          "salary": "3K-6K",
          "companyId": 284974,
          "companyLogo": "i/image2/M00/39/B0/CgoB5lpNzUiAbLv6AADr_r3Uvbk135.jpg",
          "companyName": "圣泰知识产权",
          "companyFullName": "广州圣泰知识产权代理有限公司",
          "ageLimit": "不限",
          "educationBackground": "不限"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3924650,
          "positionName": "招聘培训专员",
          "city": "广州",
          "createTime": "今天 21:00",
          "salary": "3k-6k",
          "companyId": 149034,
          "companyLogo": "i/image/M00/5B/EE/CgqKkVfiaO2AeouUAABrk5W83EQ723.jpg",
          "companyName": "骏嘉财通",
          "companyFullName": "北京骏嘉财通科技有限公司"
          ,
          "ageLimit": "1-3年",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3925150,
          "positionName": "技术型销售工程师",
          "city": "广州",
          "createTime": "今天 21:00",
          "salary": "5k-10k",
          "companyId": 149034,
          "companyLogo": "i/image/M00/5B/EE/CgqKkVfiaO2AeouUAABrk5W83EQ723.jpg",
          "companyName": "骏嘉财通",
          "companyFullName": "北京骏嘉财通科技有限公司",
          "ageLimit": "3-5年",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3925151,
          "positionName": "市场推广经理",
          "city": "广州",
          "createTime": "今天 19:10",
          "salary": "6k-12k",
          "companyId": 51472,
          "companyLogo": "i/image/M00/8D/63/Cgp3O1iG0JiAIdntAAAtivqUeaA44.jpeg",
          "companyName": "车主无忧",
          "companyFullName": "广州小迈网络科技有限公司",
          "ageLimit": "不限",
          "educationBackground": "不限"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3895322,
          "positionName": "销售顾问",
          "city": "上海",
          "createTime": "今天 19:07",
          "salary": "10k-15k",
          "companyId": 41846,
          "companyLogo": "i/image/M00/87/99/CgpFT1rVhX6AAzBZAAAYTxtEChQ976.png",
          "companyName": "CareerFrog职业蛙",
          "companyFullName": "上海凯洛格信息科技有限公司",
          "ageLimit": "3-5年",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3890244,
          "positionName": "Python开发",
          "city": "北京",
          "createTime": "今天 19:04",
          "salary": "8k-15k",
          "companyId": 22914,
          "companyLogo": "i/image/M00/50/5E/CgpEMllwdsiAS1DqAAD8YBTI4As740.png",
          "companyName": "致趣广告",
          "companyFullName": "上海致趣广告有限公司",
          "ageLimit": "应届生",
          "educationBackground": "硕士"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3921800,
          "positionName": "人力资源专员",
          "city": "深圳",
          "createTime": "今天 19:03",
          "salary": "6K-10K",
          "companyId": 62152,
          "companyLogo": "i/image2/M01/66/AE/CgotOVtDEUmAdiG5AAAi2q1Ryo8338.png",
          "companyName": "速腾聚创",
          "companyFullName": "深圳市速腾聚创科技有限公司",
          "ageLimit": "1年以内",
          "educationBackground": "不限"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3929561,
          "positionName": "硬件工程师(模拟/小信号)",
          "city": "深圳",
          "createTime": "今天 19:03",
          "salary": "12k-24k",
          "companyId": 62152,
          "companyLogo": "i/image2/M01/66/AE/CgotOVtDEUmAdiG5AAAi2q1Ryo8338.png",
          "companyName": "速腾聚创",
          "companyFullName": "深圳市速腾聚创科技有限公司"

          ,
          "ageLimit": "10年以上",
          "educationBackground": "不限"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3927045,
          "positionName": "全职申论模拟卷教研员",
          "city": "北京",
          "createTime": "今天 19:01",
          "salary": "15k-25k",
          "companyId": 63714,
          "companyLogo": "i/image/M00/59/0B/CgqKkVfWgPaAdaAxAAAq6WYoG_0975.png",
          "companyName": "粉笔网",
          "companyFullName": "北京粉笔蓝天科技有限公司"
          ,
          "ageLimit": "5-10年",
          "educationBackground": "高中"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3927121,
          "positionName": "全职申论智能批改教研员",
          "city": "北京",
          "createTime": "今天 19:01",
          "salary": "15k-25k",
          "companyId": 63714,
          "companyLogo": "i/image/M00/59/0B/CgqKkVfWgPaAdaAxAAAq6WYoG_0975.png",
          "companyName": "粉笔网",
          "companyFullName": "北京粉笔蓝天科技有限公司"
          ,
          "ageLimit": "1-3年",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3893005,
          "positionName": "PHP开发工程师",
          "city": "北京",
          "createTime": "今天 18:54",
          "salary": "10k-18k",
          "companyId": 119977,
          "companyLogo": "i/image3/M00/05/07/CgpOIFpexmmAVTx9AAAf8UeqBoM501.png",
          "companyName": "洛客科技",
          "companyFullName": "洛客科技有限公司"
          ,
          "ageLimit": "应届生",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3893924,
          "positionName": "高级PHP工程师",
          "city": "北京",
          "createTime": "今天 18:54",
          "salary": "18k-30k",
          "companyId": 119977,
          "companyLogo": "i/image3/M00/05/07/CgpOIFpexmmAVTx9AAAf8UeqBoM501.png",
          "companyName": "洛客科技",
          "companyFullName": "洛客科技有限公司"
          ,
          "ageLimit": "不限",
          "educationBackground": "不限"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3955809,
          "positionName": "行政前台",
          "city": "上海",
          "createTime": "今天 18:54",
          "salary": "4k-6k",
          "companyId": 226577,
          "companyLogo": "i/image/M00/44/E9/CgpFT1li-hSAQayRAAEEG-2ec7Y759.png",
          "companyName": "幻萌网络",
          "companyFullName": "上海幻萌网络科技有限公司"
          ,
          "ageLimit": "不限",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3960460,
          "positionName": "游戏特效师",
          "city": "上海",
          "createTime": "今天 18:54",
          "salary": "10k-15k",
          "companyId": 226577,
          "companyLogo": "i/image/M00/44/E9/CgpFT1li-hSAQayRAAEEG-2ec7Y759.png",
          "companyName": "幻萌网络",
          "companyFullName": "上海幻萌网络科技有限公司"
          ,
          "ageLimit": "1年以内",
          "educationBackground": "中专/中技"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3956727,
          "positionName": "高级策划经理",
          "city": "北京",
          "createTime": "今天 18:54",
          "salary": "18k-36k",
          "companyId": 238170,
          "companyLogo": "i/image/M00/57/5E/CgpEMll_9OCAcYdBAABMVXmNBUA820.png",
          "companyName": "牛轰轰",
          "companyFullName": "北京牛轰轰科技有限公司"
          ,
          "ageLimit": "1-3年",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3910866,
          "positionName": "资深0-3岁英语课程内容设计师",
          "city": "北京",
          "createTime": "今天 18:59",
          "salary": "18k-36k",
          "companyId": 63714,
          "companyLogo": "i/image/M00/59/0B/CgqKkVfWgPaAdaAxAAAq6WYoG_0975.png",
          "companyName": "粉笔网",
          "companyFullName": "北京粉笔蓝天科技有限公司"

          ,
          "ageLimit": "3-5年",
          "educationBackground": "高中"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3918791,
          "positionName": "web前端开发",
          "city": "北京",
          "createTime": "今天 18:54",
          "salary": "18k-30k",
          "companyId": 119977,
          "companyLogo": "i/image3/M00/05/07/CgpOIFpexmmAVTx9AAAf8UeqBoM501.png",
          "companyName": "洛客科技",
          "companyFullName": "洛客科技有限公司"
          ,
          "ageLimit": "10年以上",
          "educationBackground": "不限"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3920411,
          "positionName": "内容编辑",
          "city": "上海",
          "createTime": "今天 18:53",
          "salary": "4k-7k",
          "companyId": 202104,
          "companyLogo": "i/image3/M00/25/C2/Cgq2xlqXtZ-ATE9tAAAsHI8z3Ns325.png",
          "companyName": "趣头条",
          "companyFullName": "上海基分文化传播有限公司"
          ,
          "ageLimit": "1-3年",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3969989,
          "positionName": "销售经理",
          "city": "广州",
          "createTime": "今天 18:52",
          "salary": "9k-15k",
          "companyId": 6558,
          "companyLogo": "i/image/M00/2C/6B/Cgp3O1c5ZQ-AQgEyAABlrSMm-9A274.jpg",
          "companyName": "明动软件",
          "companyFullName": "广州明动软件股份有限公司"
          ,
          "ageLimit": "5-10年",
          "educationBackground": "不限"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3900899,
          "positionName": "实施工程师",
          "city": "广州",
          "createTime": "今天 18:52",
          "salary": "6k-8k",
          "companyId": 6558,
          "companyLogo": "i/image/M00/2C/6B/Cgp3O1c5ZQ-AQgEyAABlrSMm-9A274.jpg",
          "companyName": "明动软件",
          "companyFullName": "广州明动软件股份有限公司"
          ,
          "ageLimit": "应届生",
          "educationBackground": "博士"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3902821,
          "positionName": "web前端研发",
          "city": "合肥",
          "createTime": "今天 18:52",
          "salary": "8k-15k",
          "companyId": 21980,
          "companyLogo": "image1/M00/00/29/Cgo8PFTUWJKANlTtAABsJ_5fVYI318.JPG",
          "companyName": "科大讯飞",
          "companyFullName": "科大讯飞股份有限公司"

          ,
          "ageLimit": "不限",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3890717,
          "positionName": "资深开发专家（效率平台）",
          "city": "上海",
          "createTime": "今天 18:48",
          "salary": "20k-40k",
          "companyId": 50702,
          "companyLogo": "i/image/M00/6A/05/Cgp3O1gW8zSAUwUsAABMptH-XY087.jpeg",
          "companyName": "美团点评",
          "companyFullName": "北京三快在线科技有限公司"
          ,
          "ageLimit": "1-3年",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3918815,
          "positionName": "​数据安全高级研发工程师",
          "city": "上海",
          "createTime": "今天 18:48",
          "salary": "20k-40k",
          "companyId": 50702,
          "companyLogo": "i/image/M00/6A/05/Cgp3O1gW8zSAUwUsAABMptH-XY087.jpeg",
          "companyName": "美团点评",
          "companyFullName": "北京三快在线科技有限公司"

          ,
          "ageLimit": "不限",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3901711,
          "positionName": "多点项目经理",
          "city": "深圳",
          "createTime": "今天 18:48",
          "salary": "7k-12k",
          "companyId": 741,
          "companyLogo": "i/image/M00/8D/1C/CgqKkViEWbOAN2b-AAAOf4c1CaQ783.png",
          "companyName": "美餐",
          "companyFullName": "北京美餐巧达科技有限公司"
          ,
          "ageLimit": "2年以上",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3910018,
          "positionName": "项目经理",
          "city": "杭州",
          "createTime": "今天 18:42",
          "salary": "20k-30k",
          "companyId": 139350,
          "companyLogo": "i/image2/M00/0E/0F/CgotOVnkgleAET7eAAAmaxPJqF8896.png",
          "companyName": "魔蝎科技",
          "companyFullName": "杭州魔蝎数据科技有限公司"
          ,
          "ageLimit": "3-5年",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3946929,
          "positionName": "运营",
          "city": "上海",
          "createTime": "今天 18:38",
          "salary": "7k-14k",
          "companyId": 1738,
          "companyLogo": "i/image/M00/61/D3/CgqKkVf8uQeAOqJ2AAArfl5skXY149.png",
          "companyName": "有鱼金融科技",
          "companyFullName": "上海彩亿信息技术有限公司"
          ,
          "ageLimit": "1年以内",
          "educationBackground": "不限"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3946978,
          "positionName": "产品经理",
          "city": "上海",
          "createTime": "今天 18:38",
          "salary": "10k-20k",
          "companyId": 1738,
          "companyLogo": "i/image/M00/61/D3/CgqKkVf8uQeAOqJ2AAArfl5skXY149.png",
          "companyName": "有鱼金融科技",
          "companyFullName": "上海彩亿信息技术有限公司"

          ,
          "ageLimit": "3-5年",
          "educationBackground": "不限"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3911731,
          "positionName": "公司直聘——管理培训生",
          "city": "重庆",
          "createTime": "今天 18:38",
          "salary": "5K-10K",
          "companyId": 297316,
          "companyLogo": "i/image2/M00/29/CC/CgoB5lonnQaARdDmAAC_s-KJqVI819.jpg",
          "companyName": "重庆同创简悦",
          "companyFullName": "重庆同创简悦科技有限公司"
          ,
          "ageLimit": "应届生",
          "educationBackground": "硕士"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3895234,
          "positionName": "今日头条电话销售",
          "city": "北京",
          "createTime": "今天 18:36",
          "salary": "4k-8k",
          "companyId": 62,
          "companyLogo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
          "companyName": "字节跳动",
          "companyFullName": "北京字节跳动科技有限公司",
          "ageLimit": "10年以上",
          "educationBackground": "不限"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3900592,
          "positionName": "商业化广告客户关系专员",
          "city": "北京",
          "createTime": "今天 18:36",
          "salary": "5k-10k",
          "companyId": 62,
          "companyLogo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
          "companyName": "字节跳动",
          "companyFullName": "北京字节跳动科技有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "高中"
        }
      ]
    },
    selectPerson: true,
    firstPerson: ['经验', '学历', '薪资', '规模', '融资'],
    selectArea: false,
    selectstudy: true,
    selectAnother: false,
    selectS: false,

  },
  //点击选择类型
  clickE: function () {
    var selectPerson = this.data.selectPerson;
    if (selectPerson == true) {
      this.setData({
        selectAnother: true,
        selectArea: true,
        selectPerson: false,

      })
    } else {
      this.setData({
        selectAnother: false,
        selectArea: false,
        selectPerson: true,
      })
    }
  },
  clickStudy: function () {
    var selectstudy = this.data.selectstudy;
    if (selectstudy == true) {
      this.setData({
        selectAnother: true,
        selectS: true,
        selectstudy: false,

      })
    } else {
      this.setData({
        selectAnother: false,
        selectS: false,
        selectstudy: true,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})