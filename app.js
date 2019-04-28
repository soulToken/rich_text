//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.globalData.systemInfo = res;
      },
    })
  },
  globalData: {
    userInfo: null,
    systemInfo:null
  }
})