<template lang="pug">
  #home
    b-row
      b-col(cols="12" md="6" lg="3" v-for="(item, index) in items" :key="index")
        b-card(:title="item.name" :img-src="item.img" img-top :sub-title="'$'+item.price")
          b-button(variant="primary" @click="addCart(item)")
            font-awesome-icon(:icon="['fas', 'shopping-cart']")
            | &nbsp; 加入購物車
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          img: 'https://c.ecimg.tw/items/DCAN3XA9009CGDK/000002_1535018120.jpg',
          name: 'E-books MP2 無印風極簡滑鼠墊',
          price: 129
        },
        {
          img: 'https://b.ecimg.tw/items/DHAFIRA900AEYQR/000002_1596715202.jpg',
          name: 'ASUS VivoBook 玫瑰金',
          price: 23900
        },
        {
          img: 'https://f.ecimg.tw/items/DCAN8JA900A5XTF/000002_1586943602.jpg',
          name: '羅技 鵝卵石無線滑鼠-玫瑰粉',
          price: 699
        },
        {
          img: 'https://d.ecimg.tw/items/DCAHBCA9009Y2B1/000002_1586943602.jpg',
          name: '羅技 跨平台藍牙鍵盤-玫瑰粉',
          price: 990
        }
      ]
    }
  },
  methods: {
    addCart (item) {
      // 呼叫 mutations
      this.$store.commit('addCart', item)
    }
  }
}
</script>
