<template>
  <div id="app" class="bg-light-grey overflow-x-hidden">
    <div class="absolute backdrop bg-brand-purple"></div>
    <div class="content grid grid-cols-10 md:grid-cols-12 md:gap-16 grid-flow-row mt-10">
      <List></List>
      <TimeTravel></TimeTravel>
    </div>
  </div>
</template>

<script>
import List from './components/List'
import TimeTravel from './components/TimeTravel'
export default {
  name: 'App',
  components: {
    List,
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
* {
  transition: 0.2s;
}
.backdrop {
  height: 40vh;
  width: 100vw;
  transform: skew(0, -9deg) translateY(-30vh);
}
.content {
  /* width: 100%;
  margin: auto; */
  transform: skew(0, 0deg);
}
</style>
