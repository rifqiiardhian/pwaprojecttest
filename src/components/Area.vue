<template>
<b-row class="row-area">
    <b-col class="col-md-12 mt-5 mb-4">
        <Title :strtitle="ttl"/>
    </b-col>
    <b-col class="col-md-1" v-for="(data, index) in dataarea" :key="index">
        <p class="area-text">{{ data.strArea }}</p>
    </b-col>
</b-row>
</template>
<script>
import axios from 'axios';
import Title from './Title.vue';

export default {
  data() {
    return {
      ttl: 'The Meals Countries',
      dataarea: [],
    };
  },
  components: {
    Title,
  },
  async created() {
    const BASEURI = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    axios.get(BASEURI).then((result) => {
      this.dataarea = result.data.meals;
    });
  },
};
</script>
<style>
.row-area {
    padding: 50px;
}
.col-title {
    margin-bottom: 30px;
}
.area-text {
    text-align: center;
}
</style>
