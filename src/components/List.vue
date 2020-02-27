<template>
  <div class="animate-slide-in col-start-2 col-span-8 md:col-span-6 md:ml-10">
    <h2 class="pb-5 text-2xl text-white">Sortable Post List</h2>
    <ListItem></ListItem>
  </div>
</template>

<script>
import Vue from 'vue'
import ListItem from './ListItem.vue'

export default Vue.extend({
  name: 'List',
  props: {
    msg: String
  },
  components: {
    ListItem
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
