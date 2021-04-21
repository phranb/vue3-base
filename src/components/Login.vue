<template>
<div id="login" class="section is-medium">
  <div id="" class="columns is-mobile is-centered">
        <div class="box column is-half p-5">
            <h1 class="title has-text-centered">log in</h1>
        <div class="field">
            <label class="label">username</label>
            <div class="control">
                <input class="input" type="username" placeholder="username">
        </div>
    </div>

    <div class="field">
        <label class="label">password</label>
        <div class="control">
            <input class="input" type="password" placeholder="********">
        </div>
    <div class="pt-4">
    <button class="button is-dark is-outlined" :class="{ 'is-loading': isLoading }" @click="isLoading = !isLoading">submit</button>
    <div class="has-text-centered">
    <a class="has-text-primary" src="">reset password 
    </a></div>
    </div>
    </div>
    </div> 
    </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    
  },
  data() {
        return {
        isLoading: false
        }
    }
}
</script>


<style scoped>
/* #login {
    padding-top: 3em !important;
} */
</style>
