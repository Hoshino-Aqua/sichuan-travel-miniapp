Page({
  data: {
    logoAnimation: {},
    buttonAnimation: {}
  },

  onLoad() {
    this.animateLogo();
    setTimeout(() => {
      this.animateButton(); 
    }, 800);
  },

  animateLogo() {
    const animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease-out'
    });
    animation.opacity(1).scale(1).step();
    this.setData({
      logoAnimation: animation.export()
    });
  },

  animateButton() {
    const animation = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease-out'
    });
    animation.opacity(1).translateY(0).step();
    this.setData({
      buttonAnimation: animation.export()
    });
  },

  goToHome() {
    wx.switchTab({
      url: "/pages/index/index"
    })
  }  
});
