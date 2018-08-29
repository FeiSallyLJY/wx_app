// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    json:{
       "data": [
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4894663,
          "positionName": "人力资源实习生",
          "city": "北京",
          "createTime": "2018-08-09",
          "salary": "2k-3k",
          "companyId": 62,
          "companyLogo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
          "companyName": "字节跳动",
          "companyFullName": "北京字节跳动科技有限公司",
          "ageLimit": "应届生",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4631519,
          "positionName": "HR Generalist-TPU",
          "city": "北京",
          "createTime": "昨天 17:35",
          "salary": "10k-20k",
          "companyId": 62,
          "companyLogo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
          "companyName": "字节跳动",
          "companyFullName": "北京字节跳动科技有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4498987,
          "positionName": "人力资源部-HRBP",
          "city": "北京",
          "createTime": "昨天 08:49",
          "salary": "15k-30k",
          "companyId": 1537,
          "companyLogo": "i/image/M00/4C/50/CgpEMllofwqAEKNQAAAs_j5TrEo719.jpg",
          "companyName": "搜狗",
          "companyFullName": "北京搜狗科技发展有限公司",
          "ageLimit": "3-5年",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4680158,
          "positionName": "人力资源部-组织发展经理",
          "city": "北京",
          "createTime": "昨天 08:49",
          "salary": "20k-35k",
          "companyId": 1537,
          "companyLogo": "i/image/M00/4C/50/CgpEMllofwqAEKNQAAAs_j5TrEo719.jpg",
          "companyName": "搜狗",
          "companyFullName": "北京搜狗科技发展有限公司",
          "ageLimit": "应届生",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4101544,
          "positionName": "人力资源专员",
          "city": "北京",
          "createTime": "昨天 17:07",
          "salary": "4k-6k",
          "companyId": 73043,
          "companyLogo": "image1/M00/29/DC/CgYXBlVnz72AUFuYAAA0wXyG12w879.png",
          "companyName": "百融金服",
          "companyFullName": "百融金融信息服务股份有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4828572,
          "positionName": "HR",
          "city": "北京",
          "createTime": "昨天 16:05",
          "salary": "6k-8k",
          "companyId": 409879,
          "companyLogo": "i/image2/M01/67/AA/CgotOVtEiD6AInF3AAAJZQmDCus95.jpeg",
          "companyName": "北京猫猫狗狗科技有限公司",
          "companyFullName": "北京猫猫狗狗科技有限公司",
          "ageLimit": "3-5年",
          "educationBackground": "高中"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4312102,
          "positionName": "人力资源专员",
          "city": "北京",
          "createTime": "昨天 16:16",
          "salary": "7k-14k",
          "companyId": 291614,
          "companyLogo": "i/image/M00/75/19/CgpEMlo7AJCAQy2yAAFeXYeAEEE919.jpg",
          "companyName": "名仕汇教育",
          "companyFullName": "北京名仕汇教育科技有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "高中"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4230112,
          "positionName": "人力/就业",
          "city": "北京",
          "createTime": "昨天 08:59",
          "salary": "7k-10k",
          "companyId": 30060,
          "companyLogo": "i/image/M00/06/AB/CgpFT1jeOQ6AGNwuAAAVVZljpWQ838.jpg",
          "companyName": "中公教育",
          "companyFullName": "北京中公教育科技股份有限公司",
          "ageLimit": "1年以内",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4107393,
          "positionName": "人资专员/HR",
          "city": "北京",
          "createTime": "2018-08-20",
          "salary": "4k-6k",
          "companyId": 149034,
          "companyLogo": "i/image/M00/5B/EE/CgqKkVfiaO2AeouUAABrk5W83EQ723.jpg",
          "companyName": "骏嘉财通",
          "companyFullName": "北京骏嘉财通科技有限公司",
          "ageLimit": "应届生",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4688159,
          "positionName": "人力资源部-HRBP(J10437)",
          "city": "北京",
          "createTime": "2018-08-19",
          "salary": "12k-16k",
          "companyId": 8143,
          "companyLogo": "i/image3/M00/27/29/CgpOIFqZMLOAe38dAAAPn3z6W-8697.jpg",
          "companyName": "途家网",
          "companyFullName": "途家网网络技术（北京）有限公司",
          "ageLimit": "应届生",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4336949,
          "positionName": "人力资源主管",
          "city": "北京",
          "createTime": "2018-07-28",
          "salary": "10k-20k",
          "companyId": 6868,
          "companyLogo": "i/image/M00/28/E6/CgqKkVcsZ-qAPt8TAAAvQ-ZzrYw610.png",
          "companyName": "tap4fun",
          "companyFullName": "成都尼毕鲁科技股份有限公司",
          "ageLimit": "3-5年",
          "educationBackground": "硕士"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4777358,
          "positionName": "人事经理—FF0119011",
          "city": "北京",
          "createTime": "昨天 10:51",
          "salary": "15k-30k",
          "companyId": 6868,
          "companyLogo": "i/image/M00/28/E6/CgqKkVcsZ-qAPt8TAAAvQ-ZzrYw610.png",
          "companyName": "tap4fun",
          "companyFullName": "成都尼毕鲁科技股份有限公司",
          "ageLimit": "10年以上",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 2905291,
          "positionName": "人事/HR精英管培生",
          "city": "北京",
          "createTime": "2018-08-19",
          "salary": "3k-5k",
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
          "positionId": 4851960,
          "positionName": "HR实习生（招聘方向）",
          "city": "北京",
          "createTime": "昨天 10:13",
          "salary": "3k-6k",
          "companyId": 410453,
          "companyLogo": "i/image2/M01/7C/DA/CgoB5lt09RiAAQddAABJxcaEm2I500.jpg",
          "companyName": "度小满金融",
          "companyFullName": "安一恒通（北京）科技有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4778441,
          "positionName": "人力资源实习生",
          "city": "北京",
          "createTime": "昨天 23:41",
          "salary": "2k-3k",
          "companyId": 8143,
          "companyLogo": "i/image3/M00/27/29/CgpOIFqZMLOAe38dAAAPn3z6W-8697.jpg",
          "companyName": "途家网",
          "companyFullName": "途家网网络技术（北京）有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "高中"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4664637,
          "positionName": "人事专员（外包）",
          "city": "北京",
          "createTime": "2018-08-09",
          "salary": "6k-10k",
          "companyId": 62,
          "companyLogo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
          "companyName": "字节跳动",
          "companyFullName": "北京字节跳动科技有限公司",
          "ageLimit": "3-5年",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3640879,
          "positionName": "人力资源实习生",
          "city": "北京",
          "createTime": "昨天 18:36",
          "salary": "2k-3k",
          "companyId": 62,
          "companyLogo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
          "companyName": "字节跳动",
          "companyFullName": "北京字节跳动科技有限公司",
          "ageLimit": "3-5年",
          "educationBackground": "中专/中技"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4255284,
          "positionName": "人力资源部-人力资源助理（外包）-北京-03855",
          "city": "北京",
          "createTime": "昨天 08:49",
          "salary": "6k-10k",
          "companyId": 1537,
          "companyLogo": "i/image/M00/4C/50/CgpEMllofwqAEKNQAAAs_j5TrEo719.jpg",
          "companyName": "搜狗",
          "companyFullName": "北京搜狗科技发展有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4492183,
          "positionName": "人力资源部-人力资源助理（外包）-北京-03992",
          "city": "北京",
          "createTime": "昨天 08:49",
          "salary": "6k-8k",
          "companyId": 1537,
          "companyLogo": "i/image/M00/4C/50/CgpEMllofwqAEKNQAAAs_j5TrEo719.jpg",
          "companyName": "搜狗",
          "companyFullName": "北京搜狗科技发展有限公司",
          "ageLimit": "应届生",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3775420,
          "positionName": "实习生（人力资源-招聘方向）",
          "city": "北京",
          "createTime": "昨天 09:25",
          "salary": "3k-4k",
          "companyId": 18139,
          "companyLogo": "i/image2/M00/13/95/CgotOVnwNqeAFbmnAABaH5Q_vVE401.png",
          "companyName": "京东集团",
          "companyFullName": "北京京东世纪贸易有限公司",
          "ageLimit": "应届生",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4395005,
          "positionName": "hr",
          "city": "北京",
          "createTime": "昨天 18:25",
          "salary": "6k-8k",
          "companyId": 16737,
          "companyLogo": "i/image2/M00/50/1E/CgoB5lsPnv6ACmneAAAhozTKjRA893.jpg",
          "companyName": "DaDa",
          "companyFullName": "上海卓赞信息技术有限公司",
          "ageLimit": "1年以内",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 2870189,
          "positionName": "人事 / HR",
          "city": "北京",
          "createTime": "昨天 13:04",
          "salary": "8k-12k",
          "companyId": 31395,
          "companyLogo": "image1/M00/00/47/CgYXBlTUXOSAF2BxAABArVeLFCY330.png",
          "companyName": "灵雀云",
          "companyFullName": "北京凌云雀科技有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 1113424,
          "positionName": "人事/HR",
          "city": "北京",
          "createTime": "昨天 13:04",
          "salary": "13k-25k",
          "companyId": 31395,
          "companyLogo": "image1/M00/00/47/CgYXBlTUXOSAF2BxAABArVeLFCY330.png",
          "companyName": "灵雀云",
          "companyFullName": "北京凌云雀科技有限公司",
          "ageLimit": "10年以上",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3804155,
          "positionName": "人力资源实习生",
          "city": "北京",
          "createTime": "昨天 16:24",
          "salary": "2k-4k",
          "companyId": 1970,
          "companyLogo": "image1/M00/00/06/CgYXBlTUWAeANQBuAABHTL1SBa8889.jpg",
          "companyName": "去哪儿网",
          "companyFullName": "北京趣拿软件科技有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "中专/中技"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3303569,
          "positionName": "人力资源",
          "city": "北京",
          "createTime": "2018-08-20",
          "salary": "7k-12k",
          "companyId": 21009,
          "companyLogo": "i/image3/M00/24/94/CgpOIFqWivaAN-OSAAB0S9L6uSg994.png",
          "companyName": "一刻talks",
          "companyFullName": "北京掌娱互动文化传播有限公司",
          "ageLimit": "5-10年",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4110940,
          "positionName": "人力资源实习生",
          "city": "北京",
          "createTime": "昨天 10:56",
          "salary": "2k-3k",
          "companyId": 1211,
          "companyLogo": "i/image2/M00/1E/F9/CgoB5loMApqAI9rdAAA9zEeRP1M613.png",
          "companyName": "易观",
          "companyFullName": "北京易观网络信息咨询有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "硕士"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4549410,
          "positionName": "人力资源专员",
          "city": "北京",
          "createTime": "昨天 13:40",
          "salary": "6k-8k",
          "companyId": 144576,
          "companyLogo": "i/image/M00/5A/ED/Cgp3O1ffoHyAUyBeAAAR8ki8dmw574.jpg",
          "companyName": "杉数科技",
          "companyFullName": "杉数科技（北京）有限公司",
          "ageLimit": "3-5年",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 3937674,
          "positionName": "人力资源实习生",
          "city": "北京",
          "createTime": "昨天 13:22",
          "salary": "2k-4k",
          "companyId": 227912,
          "companyLogo": "i/image3/M00/3D/E8/Cgq2xlqwsMiAOa3lAABMROMRaeI870.png",
          "companyName": "热狗科技",
          "companyFullName": "热狗科技（北京）有限公司",
          "ageLimit": "1年以内",
          "educationBackground": "本科"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4825879,
          "positionName": "最美HR",
          "city": "北京",
          "createTime": "昨天 10:09",
          "salary": "4k-6k",
          "companyId": 149034,
          "companyLogo": "i/image/M00/5B/EE/CgqKkVfiaO2AeouUAABrk5W83EQ723.jpg",
          "companyName": "骏嘉财通",
          "companyFullName": "北京骏嘉财通科技有限公司",
          "ageLimit": "应届生",
          "educationBackground": "大专"
        },
        {
          "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
          },
          "positionId": 4440852,
          "positionName": "HR",
          "city": "北京",
          "createTime": "昨天 10:09",
          "salary": "10k-20k",
          "companyId": 39934,
          "companyLogo": "image1/M00/33/F0/CgYXBlWVHo2AJ2kfAADcOU-43sg621.jpg",
          "companyName": "每日优鲜",
          "companyFullName": "北京每日优鲜电子商务有限公司",
          "ageLimit": "1-3年",
          "educationBackground": "大专"
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