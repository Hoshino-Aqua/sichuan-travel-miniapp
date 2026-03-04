Page({
  data: {
    latitude: 0,
    longitude: 0,
    markers: []
  },

  onLoad(options) {
    const lat = parseFloat(options.lat)
    const lng = parseFloat(options.lng)
    const name = options.name || '景点'

    this.setData({
      latitude: lat,
      longitude: lng,
      markers: [{
        id: 1,
        latitude: lat,
        longitude: lng,
        name: name,
        iconPath: '/images/coord.png',
        width: 40,
        height: 40
      }]
    })
  },

  markersTap() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: '景点',
      address: '四川省热门旅游景点'
    })
  }
})
