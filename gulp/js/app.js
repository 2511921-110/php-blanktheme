/*******************
  Nav
*******************/

if(document.getElementsByClassName('globalNav')[0]){
  const nav_el = document.querySelector('.spmenu_btn')
  const nav_state_class = 'globalNav_state'
  const nav_target_class = '.globalNav'
  const nav_close_class = 'spmenu_btnClose'
  const nav_wrap = document.querySelector('.menu')

  nav_el.addEventListener('click',()=>{
    if(document.querySelector('.'+ nav_state_class) === null){
      document.querySelector(nav_target_class).classList.add(nav_state_class)
      nav_el.classList.add(nav_close_class)
    }else{
      document.querySelector(nav_target_class).classList.remove(nav_state_class)
      nav_el.classList.remove(nav_close_class)
    }
  },false)

  nav_wrap.addEventListener('click',()=>{
    document.querySelector(nav_target_class).classList.remove(nav_state_class)
    nav_el.classList.remove(nav_close_class)
  },false)
}


/*******************
  map
*******************/
if (document.getElementById('Map')) {
  const mapInstance = new Vue({
    el: "#Map",
    data() {
      return {
        lat: 34.6704542,
        lng: 135.5013464,
        zoom: 16,
        icon: THEME_URL + "/assets/mappin.png",
        geometry:{
          hue:'#111',       // 色
          gamma:0.1,        // ガンマ 0.01 ~ 10
          lightness:-70,    // 明度  -100 ~ 100
          saturation:-100,   // 彩度 -100 ~ 100
        },
        labels:{
          hue:'#ae9e74',       // 色
          gamma:1,        // ガンマ
          lightness:0,    // 明度
          saturation: -50, // 彩度
        }
      }
    },
    mounted(){
      let map
      let marker
      let center = {
        lat: Number(this.lat), // 緯度
        lng: Number(this.lng) // 経度
      }
      map = new google.maps.Map(document.getElementById('Map'), { // #sampleに地図を埋め込む
        center: center, // 地図の中心を指定
        zoom: this.zoom, // 地図のズームを指定
        disableDefaultUI: true,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [
              { hue: this.geometry.hue },
              { gamma: this.geometry.gamma },
              { lightness: this.geometry.lightness },
              { saturation: this.geometry.saturation },
            ],
          },
          {
            featureType: 'all',
            elementType: 'labels',
            stylers: [
              { hue: this.labels.hue },
              { gamma: this.labels.gamma },
              { lightness: this.labels.lightness },
              { saturation: this.labels.saturation },
            ],
          },
        ]
      })
      marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
        map: map, // マーカーを立てる地図を指定
        icon: this.icon // マーカーのアイコン指定
      })
    },
  })
}

