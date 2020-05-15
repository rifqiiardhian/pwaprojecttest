<template>
  <div class="container-fluid">
    <Favourites />
  </div>
</template>

<script>
// @ is an alias to /src
import Favourites from '@/components/Favourite.vue';

export default {
  components: {
    Favourites,
  },
};
</script>
