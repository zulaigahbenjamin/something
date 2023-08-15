<template>
    <div>
      <div v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.description">
        <h3>{{ product.description }}</h3>
        <p>Price: {{ product.price }}</p>
        <button>{{ product.button }}</button>
      </div>
    </div>
  </template>
  
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      images: []
    };
  },
  mounted() {
    //  endpointerdd
    axios.get('http://localhost:3000')
      .then(response => {
        this.images = response.data;
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }
};
</script>

<style>
/* Your styles here */
</style>
