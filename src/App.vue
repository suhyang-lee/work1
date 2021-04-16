<template>
  <div id="app">
    <div class="wrapper">
      <Header msg="Welcome to Your Vue.js App" />
      <Main />
      <Footer msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Main from '@/components/main';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_index.scss';
</style>
