<template>
  <div>
    <div class="container-fluid">
      <app-logo />
      <Category />
      <Meals />
      <Area />
      <refs />
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';
import Category from '@/components/Category.vue';
import Meals from '@/components/Meals.vue';
import Area from '@/components/Area.vue';
import Refs from '@/components/Reference.vue';

export default {
  name: 'Home',
  components: {
    AppLogo,
    Category,
    Meals,
    Area,
    Refs,
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
