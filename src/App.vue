<template>
  <div>
    <navbar/>
    <b-container fluid>
      <app-logo/>
      <category/>
      <meals/>
      <Area/>
      <refs/>
      <Footer/>
    </b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import AppLogo from './components/AppLogo.vue';
import Category from './components/Category.vue';
import Meals from './components/Meals.vue';
import Area from './components/Area.vue';
import Refs from './components/Reference.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    AppLogo,
    Category,
    Meals,
    Area,
    Refs,
    Footer,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.container-fluid {
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: none;
}
</style>
