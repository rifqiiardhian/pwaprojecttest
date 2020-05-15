<template>
<b-row class="row-category">
    <div class="col-md-12 mt-5 mb-4">
        <titlee :strtitle="this.$route.params.name"/>
    </div>
    <div class="col-md-3" v-for="data in results" :key="data.idMeal">
        <router-link
        :to="{ name: 'Detail', params: { id: data.idMeal } }"
        style="text-decoration: none">
        <card
            :images="data.strMealThumb"
            :title="data.strMeal"/>
        </router-link>
    </div>
</b-row>
</template>
<script>
import axios from 'axios';
import titlee from './Title.vue';
import card from './Card.vue';

export default {
  name: 'Category',
  data() {
    return {
      ttl: 'Categories',
      tgs: 'Meals',
      results: [],
    };
  },
  components: {
    titlee,
    card,
  },
  mounted() {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?', {
      params: {
        i: this.$route.params.name,
      },
    })
      .then((response) => {
        this.results = response.data.meals;
      });
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
