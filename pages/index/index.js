Page({
  data: {
    images: [
      '/images/jiuzhaigou.jpg',
      '/images/emeishan.jpg',
      '/images/dujiangyan.jpg',
      '/images/chengdu.jpg',
      '/images/daocheng.jpg',
      '/images/qingchengshan.jpg',
      '/images/hailuogou.jpg'
    ],
    spots: [
      {
        name: '九寨沟',
        description: '被誉为“人间仙境”，以翠海、叠瀑、彩林著称。',
        image: '/images/jiuzhaigou.jpg',
        latitude: 33.2656,
        longitude: 103.9186
      },
      {
        name: '峨眉山',
        description: '佛教圣地，云雾缭绕，是自然与人文的完美结合。',
        image: '/images/emeishan.jpg',
        latitude: 29.5241,
        longitude: 103.4845
      },
      {
        name: '都江堰',
        description: '世界文化遗产，古代水利工程奇迹。',
        image: '/images/dujiangyan.jpg',
        latitude: 31.0014,
        longitude: 103.6113
      },
      {
        name: '成都',
        description: '美食之都，熊猫的故乡，生活节奏悠闲的魅力城市。',
        image: '/images/chengdu.jpg',
        latitude: 30.5728,
        longitude: 104.0668
      },
      {
        name: '稻城亚丁',
        description: '被誉为“最后的香格里拉”，拥有绝美雪山与草甸。',
        image: '/images/daocheng.jpg',
        latitude: 29.0436,
        longitude: 100.2797
      },
      {
        name: '青城山',
        description: '道教名山，林深幽静，以“青翠欲滴”闻名于世。',
        image: '/images/qingchengshan.jpg',
        latitude: 30.9111,
        longitude: 103.5120
      },
      {
        name: '海螺沟',
        description: '贡嘎山下的冰川奇观，雾凇、温泉、森林共聚一地。',
        image: '/images/hailuogou.jpg',
        latitude: 29.6033,
        longitude: 102.0266
      }
    ]
  },

  // 点击跳转地图页并传经纬度
  goToMap(e) {
    const spot = e.currentTarget.dataset.spot
    wx.navigateTo({
      url: `/pages/picture/picture?name=${spot.name}&lat=${spot.latitude}&lng=${spot.longitude}`
    })
  }
})
