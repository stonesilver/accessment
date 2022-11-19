<template>
  <h1>{{title}}</h1>
  <div class="content">
    <div class="left-side">Left Side</div>
    <div class="right-side">Right Side</div>
  </div>
  <Modal />
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My Cover AI'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  display: flex;
  min-height: 50vh;
}

.left-side {
  flex: 0.55;
  border: 1px solid #dbd0d0;
}

.right-side {
  flex: 0.45;
  border: 1px solid #d4c9c9;
}
</style>
