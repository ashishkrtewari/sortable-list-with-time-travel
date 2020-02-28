<template>
  <div id="app" class="bg-light-grey overflow-x-hidden">
    <div class="absolute backdrop bg-brand-purple"></div>
    <div class="content grid grid-cols-10 md:grid-cols-12 md:gap-16 grid-flow-row mt-10">
      <PostList></PostList>
      <TimeTravel></TimeTravel>
    </div>
  </div>
</template>

<script>
import PostList from './components/PostList'
import TimeTravel from './components/TimeTravel'
export default {
  name: 'App',
  components: {
    PostList,
    TimeTravel
  }
}
</script>

<style>
#app {
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;
}
::selection {
    @apply text-white;
    @apply bg-brand-purple;
}
.content * {
  transition: 0.2s ease-in-out;
}
.backdrop {
  height: 24.5vw;
  width: 100vw;
  transform: skew(0, -10deg) translateY(-15.5vw)
}
@media (max-width: 640px){
  .backdrop {
    height: 18rem;
  }
}
.content {
  transform: skew(0, 0deg);
}
</style>
