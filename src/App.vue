<template>
  <div id="app" class="has-background-primary">
    <Navbar></Navbar>
    <div class="content-wrap">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="manifest" href="/site.webmanifest">
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00f5bd">
      <meta name="msapplication-TileColor" content="#00f5bd">
      <meta name="theme-color" content="#ffffff">

  <transition name="fade" mode="out-in">
    <transition name="fade" mode="in-out">
      <router-view></router-view>
    </transition>
  </transition>
 
  
  </div> 
  <Footer></Footer>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar,
    Footer
  },
  
}

</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#app{
  position: relative;
  min-height: 100vh;
}
#content-wrap {
  padding-bottom: 3rem;    /* Footer height */
}
Footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;            /* Footer height */
}
</style>
