<template>
  <TheHeader />
  <div class="content">

    <router-view />
  </div>
  
</template>

  <script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },    
  data(){
    return{
      theme: localStorage.getItem('theme')
    }
  },
  created(){
        let bodyElement = document.body
        bodyElement.classList.add('light')
    },

};
</script>
  

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content{
  background: var(--primary-color);
  padding: 10px 15px;
  transition: all .4s ease-in-out;
}

</style>
