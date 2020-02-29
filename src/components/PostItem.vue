<template>
  <transition-group name="list-item" tag="section">
    <div
      class="bg-white grid grid-cols-12 items-center mb-2 px-3 py-2 post-item rounded shadow-md"
      :key="post.id"
      v-for="(post, index) in posts">
      <h2 class="capitalize col-span-10 text-left text-dark-grey">
        {{post.id + '. ' + post.title}}
      </h2>
      <div class="col-start-12 col-span-1 flex flex-col h-full items-center order-button-container" :class="index == 0 || index == (posts.length - 1) ? 'justify-center' : 'justify-between'">
        <button
          @click="reOrderPosts({index, direction: true})"
          aria-label="move-up"
        >
          <img
          class="cursor-pointer m-2 w-3"
          src="../assets/icons/arrow-up.svg"
          alt="Move Up"
          v-if="index !== 0">
        </button>
        <button
          @click="reOrderPosts({index, direction: false})"
          aria-label="move-down"
        >
          <img
          class="cursor-pointer m-2 w-3"
          src="../assets/icons/arrow-down.svg"
          alt="Move Down"
          v-if="index !== (posts.length - 1)">
        </button>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'PostItem',
  computed: {
    ...mapGetters([
      'posts'
    ])
  },
  methods: {
    ...mapActions([
      'reOrderPosts'
    ])
  }
})
</script>

<style scoped>
.post-item {
  min-height: 5.5rem;
}
.list-item-move {
  transition: transform 0.3 cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>
