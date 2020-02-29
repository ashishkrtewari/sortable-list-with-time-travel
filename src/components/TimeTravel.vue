<template>
  <div class="animate-slide-in col-start-2 col-span-8 md:col-span-6 mt-10 md:mt-0 md:mr-10">
    <h2 class="bg-white p-5 text-dark-grey text-2xl">List of actions commited</h2>
    <div class="bg-light-grey mb-2 p-4 shadow-md" v-if="changesList.length">
      <transition-group name="list" tag="div">
        <div
          class="bg-white border-light-grey flex items-center justify-between list-item p-3 shadow-md"
          :key="entry.timeStamp"
          v-for="(entry, index) of changesList"
        >
          <h4 class="text-left text-dark-grey col-span-8 pr-3">
            {{entry.message}}
          </h4>
          <button
            @click="timeTravel({index})"
            class="bg-spring-green col-span-4 flex-shrink-0 h-10 px-3 py-2 rounded text-dark-grey"
            aria-label="time travel"
          >
            Time Travel
          </button>
        </div>
      </transition-group>
    </div>
    <div v-else class="bg-light-grey mb-2 p-4 shadow-md">
      <p>
        Logs your actions on the&nbsp;
        <span class="text-brand-purple">Sortable Post List</span>
        &nbsp;...
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'TimeTravel',
  computed: {
    ...mapGetters([
      'changesList'
    ])
  },
  methods: {
    ...mapActions([
      'timeTravel'
    ])
  }
})
</script>

<style scoped>
.list-item:not(:last-of-type) {
  border-bottom-width: 2px;
}
.list-enter-active, .list-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

</style>
