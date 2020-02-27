<template>
  <section>
    <div
      class="bg-white grid grid-cols-12 items-center mb-2 p-2 rounded shadow-md"
      :key="post.id"
      v-for="(post, index) in posts">
      <h2 class="capitalize col-span-10 text-left text-dark-grey">
        {{post.id + '. ' + post.title}}
      </h2>
      <div class="col-start-12 col-span-1 flex flex-col h-full items-center order-button-container" :class="index == 0 || index == (posts.length - 1) ? 'justify-center' : 'justify-between'">
        <button @click="reOrderPosts({index, direction: true})">
          <img
          class="cursor-pointer m-3 w-3"
          src="../assets/arrow-up.svg"
          alt="Move Up"
          v-if="index !== 0">
        </button>
        <button @click="reOrderPosts({index, direction: false})">
          <img
          class="cursor-pointer m-3 w-3"
          src="../assets/arrow-down.svg"
          alt="Move Down"
          v-if="index !== (posts.length - 1)">
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'ListItem',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'posts'
    ])
  },
  methods: {
    ...mapActions([
      'getPosts',
      'reOrderPosts'
    ])
  },
  created () {
    this.getPosts()
  }
})
</script>

<style scoped>
</style>
