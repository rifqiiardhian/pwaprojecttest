<template>
<b-row class="row-category">
    <b-col class="col-md-12 mt-5 mb-4">
        <Title :strtitle="ttl"/>
    </b-col>
    <b-col class="col-md-3" v-for="(data, index) in datacategory" :key="index">
        <Card
            :images="data.strCategoryThumb"
            :tagss="tgs"
            :title="data.strCategory"
            :text="data.strCategoryDescription | truncate(50, '...')"/>
    </b-col>
</b-row>
</template>
<script>
import axios from 'axios';
import Title from './Title.vue';
import Card from './Card.vue';

export default {
  data() {
    return {
      ttl: 'Categories',
      tgs: 'Category',
      datacategory: [],
    };
  },
  components: {
    Title,
    Card,
  },
  async created() {
    const BASEURI = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    axios.get(BASEURI).then((result) => {
      this.datacategory = result.data.categories;
    });
  },
  filters: {
    truncate(value, length, suffix) {
      if (value.length > length) {
        return value.substring(0, length) + suffix;
      }
      return value;
    },
  },
};
</script>
<style>
.row-category {
    background-color: none;
    padding: 50px;
}
.category-text {
    text-align: center;
}
</style>
