<template lang="pug">
  #cart
    b-table(:items="items" :fields="fields" stripped hover)
      template(v-slot:cell(action)="data")
        b-button(variant="danger" @click="del(data.index)")
          font-awesome-icon(:icon="['far','trash-alt']")
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: '商品名稱'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'action',
          label: '操作'
        }
      ]
    }
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  methods: {
    del (index) {
      this.$store.commit('delCart', index)
    }
  }
}
</script>
