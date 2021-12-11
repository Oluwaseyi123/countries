<template>
  <header>
      <h1>Where in the world?</h1>
      <div class="theme-switcher">
          <img src="../assets/themeswitch.svg" alt="" @click="switchTheme" v-if="currentTheme === 'dark'" >
          <img src="../assets/theme-switch.svg" alt="" @click="switchTheme" v-else>
          <p v-if="currentTheme === 'dark'">Dark Mode</p>
          <p v-else>Light Mode</p>
      </div>
  </header>
</template>

<script>
export default {
    data(){
        return{
            currentTheme: localStorage.getItem('theme') || 'dark'
        }
    },
    created(){
        let bodyElement = document.body
        localStorage.setItem('theme', this.currentTheme)
        bodyElement.classList.add(this.currentTheme)
    },
    methods: {
        switchTheme(){
             let bodyElement = document.body
            if(localStorage.getItem('theme') === 'dark'){
                bodyElement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                this.currentTheme = localStorage.getItem('theme')
                bodyElement.classList.add(this.currentTheme)
            } else if(localStorage.getItem('theme') === 'light'){
               bodyElement.classList.remove('light')
                localStorage.setItem('theme', 'dark')
                this.currentTheme = localStorage.getItem('theme')
                bodyElement.classList.add(this.currentTheme)
            }

        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--secondary-color);
        padding: 20px 30px;
        color: var(--font-color);
        transition: all .4s ease-in-out;
        h1{
            font-size: 15px;
        }
    }
    .theme-switcher{
        display: flex;
        img{
            width: 15px;
            cursor: pointer;
            margin-right: 5px;
        }
        p{
            font-size: 14px;
        }
    }
</style>