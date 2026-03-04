// guest.js
const app = getApp()
const defaultAvatar = '/images/avatar.png'
Page({
  data: {
    avatarUrl: defaultAvatar,
  },
  onChooseAvatar: function (e) {
    console.log(e)
    const { avatarUrl } = e.detail
    this.setData({ avatarUrl })
  },
  goToHome() {
    // 检查页面路径是否存在
    console.log('准备跳转，目标路径:', 'pages/video/video')
    
    wx.navigateTo({
      url: '/pages/video/video',
      success: (res) => {
        console.log('跳转成功:', res)
      },
      fail: (err) => {
        console.error('跳转失败:', err)
        // 显示错误提示
        wx.showToast({
          title: '跳转失败，请稍后再试',
          icon: 'none'
        })
      }
    })
  }  
})