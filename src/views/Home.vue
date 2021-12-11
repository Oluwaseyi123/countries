<template>
  <div class="content">
    <input
      type="text"
      name=""
      id=""
      placeholder="Search for a country"
      v-model="search"
     
    />
    <select name="" id="">
      <option v-bind="region"   v-for="region in select" :key="region">{{region}}</option>
      <!-- <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
      <option>Americas</option>
      <option>Antarctic</option>
      <option>Antarctic</option>
      <option>Antarctic</option> -->

    </select>
  </div>
 
  <h4 v-if="hasCountries">Loading Countries...</h4>
  <div class="home">
    <TheCountry
      v-for="country in filterCountries"
      :key="country.area"
      :id="country.name.common"
      :population="country.population"
      :country="country.name.common"
      :flag="country.flags.png"
      :capital="country.capital"
      :region="country.region"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import TheCountry from "@/components/TheCountry.vue";
// import axios from "axios";

export default {
  name: "Home",
  props: ["id"],
  data() {
    return {
      countries: [],
      search: '',
      region: ''
    };
  },
  components: {
    TheCountry,
  },
  mounted(){
    this.$store.dispatch('getCountries')
  },
  computed: {
    filterCountries() {
      return this.$store.getters.countries.filter((country) => {
        if(country.name.common.toLowerCase().includes(this.search.toLowerCase()) ===''){
          console.log('true')
        }else{
          return country.name.common.toLowerCase().includes(this.search.toLowerCase())
        }
        
       
      })
    },
    hasCountries(){
      return this.$store.getters.hasCountries
    },
    select(){
      return this.filterRegion()
    }
  },
  methods: {
    filterRegion(){
      const regionArray = this.$store.getters.countries.filter((country) => {
        return country.region
      })
      for(var region of regionArray){
        if(regionArray.indexOf(region) === -1){
          regionArray.push(region)
        }

        console.log(regionArray)
      }
    //   const uniqueSet = new Set(regionArray)
    //  return console.log([...uniqueSet])
    }
  }
};
</script>
<style lang="scss" scoped>
h4 {
  color: var(--font-color);
}
.home {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  text-decoration: none;
}
.content {
  input {
    padding: 5px 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    outline: none;
    width: 100%;
    max-width: 250px;
    border: none;
    color: var(--font-color);
    background: var(--secondary-color);
    display: block;
    margin-bottom: 25px;
  }
  select {
    width: 100%;
    max-width: 150px;
    padding: 5px 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    outline: none;
  }
}
</style>