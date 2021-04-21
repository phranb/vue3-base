<template>
  <nav class="navbar has-shadow " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <p class="subtitle has-text-weight-bold has-text-primary">inProfile</p>
      </router-link>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="Home" class="navbar-item">
          home
        </router-link>
  
        <router-link class="navbar-item" to="Documentation">
          documentation
        </router-link>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            more
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item">
              about
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              report an issue
            </a>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="Sigin" class="button is-primary is-outlined">
              sign in
            </router-link>
            <router-link to="Login" class="button is-dark is-outlined">
              log in
            </router-link>
        
          </div>
        </div>
      </div>
    </div>
  </nav>    
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    
  }
}
</script>


<style scoped>
</style>
