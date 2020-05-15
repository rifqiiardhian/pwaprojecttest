<template>
<div>
    <div class="row row-about p-5" v-for="data in results" :key="data.idMeal">
        <div class="col-md-6 p-4">
            <img :src="data.strMealThumb" class="img-fluid"/>
        </div>
        <div class="col-md-6 p-4">
            <titlee :strtitle="data.strMeal"/>
            <cbadge :strvariant="variant1" :text="data.strCategory"/>
            <cbadge :strvariant="variant2" :text="data.strArea"/>
            <p class="text-justify mt-4">
                {{ data.strInstructions }}
            </p>
        </div>
        <div class="col-md-12">
            <div class="embed-responsive embed-responsive-16by9 mt-4">
                <iframe class="embed-responsive-item"
                    :src="data.strYoutube.replace('watch?v=','embed/')"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture"
                    allowfullscreen>
                    </iframe>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
import titlee from './Title.vue';
import cbadge from './Badge.vue';

export default {
  name: 'Meals Detail',
  data() {
    return {
      variant1: 'success',
      variant2: 'info',
      results: '',
    };
  },
  components: {
    titlee,
    cbadge,
  },
  mounted() {
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
      params: {
        i: this.$route.params.id,
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
