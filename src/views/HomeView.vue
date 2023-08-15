<template>
  <div>
    <img v-for="image in images" :key="image" :src="image.url" alt="Image">
  </div>
  <div id="app">
    <section id="hero">
   <a href="/html/product.html"><button style="background-color: #D78976 !important; align-items: center !important; text-align: center !important;" class="btn btn  p-2 px-4">Shop Our Collection</button></a> 
  </section>

  <div class="category" id="category">
    <div class="category-title">
      <h2 class="line-head" style="margin: 1rem;letter-spacing: 1px; font-weight: 700; margin-top: 3rem; color: black;">GRAB ALL YOU NEED FOR FABULOUS, CLEAR AND GLOWING SKIN!</h2>
       <h2 style="margin: 1rem;letter-spacing: 1px; font-weight: 700; margin-top: 4rem;"><span style="color:#484848;">Shop OUR </span> <span style="color: #ECC3B3;">BEST SELLERS</span></h2>
    </div>
   
  </div>

  
  <div class="container">
    <h2>Scrolling Card UI With Flexbox</h2>
    <ul class="cardz">
      <li class="kard">
        <div>
          <h3 class="card-title">Service 1</h3>
          <img src="https://i.postimg.cc/Zq8WjpzV/Prod-Info-1.png" alt="Info-1">
          <div class="card-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <a href="" class="card-link">Learn More</a>
        </div>
      </li>
      <li class="kard">
        <div>
          <h3 class="card-title">Service 2</h3>
          <img src="https://i.postimg.cc/L5b5hVj6/Prod-Info-2.png" alt="Info-2">
          <div class="card-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae magnam harum natus fuga et repellat in maiores.</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <a href="" class="card-link">Learn More</a>
        </div>
      </li>
      <li class="kard">
        <div>
          <h3 class="card-title">Service 3</h3>
          <img src="https://i.postimg.cc/DzPz1h1N/Prod-Info-3.png" alt="Info-3">
          <div class="card-content">
            <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <a href="" class="card-link">Learn More</a>
        </div>
      </li>
      <li class="kard">
        <div>
          <h3 class="card-title">Service 4</h3>
          <img src="https://i.postimg.cc/Kz9vs5qr/Prod-Info-4.png" alt="Prod-4">
          <div class="card-content">
            <p>Aenean posuere mauris quam, pellentesque auctor mi bibendum nec. Sed scelerisque lacus nisi, quis auctor lorem ornare vel.</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <a href="" class="card-link">Learn More</a>
        </div>
      </li>
      <li class="kard">
        <div>
          <h3 class="card-title">Service 5</h3>
          <img src="https://i.postimg.cc/Wzy9StBb/Prod-Info-5.jpg" alt="ProdInfo-5">
          <div class="card-content">
            <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et arcu sit amet est consequat feugiat. Nam ut sapien pulvinar.</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <a href="" class="card-link">Learn More</a>
        </div>
      </li>
      <li class="kard">
        <div>
          <h3 class="card-title">Service 6</h3>
          <img src="https://i.postimg.cc/5tJsshRv/Prod-Info-6.jpg" alt="ProdInfo-6">
          <div class="card-content">
            <p>Donec ut tincidunt nisl. Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <a href="" class="card-link">Learn More</a>
        </div>
      </li>
    </ul>
  </div>

  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Your Vue component styles go here */
</style>
