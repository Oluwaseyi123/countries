<template>
  <div class="country-container">
    <router-link :to="`/country/${id}`"> <img :src="country.flags.png" alt="" /></router-link>
    <div class="country-details">
      <router-link :to="`/country/${id}`"> <h1>{{country.name.common}} </h1> </router-link> 
      <p>Population: <span>{{ country.population }}</span> </p>
      <p>Region: <span>{{ country.region }}</span> </p>
      <p >Capital: <span v-for="capital in country.capital" :key="capital">{{ capital }}</span> </p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['country', 'id'],
  
};
</script>

<style lang="scss" scoped>
.country-container {
  display: block;
  margin: 0 auto;
  
  width: 70%;
  max-width: 340px;
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: var(--font-color);
    img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
  }
  }
}
.country-details {
  padding: 20px 20px 30px 20px;
  border-radius: 0px 0px 10px 10px;
  background: var(--secondary-color);
  color: var(--font-color);
  h1{
    font-size: 18px;
    margin-bottom: 8px;
  }
  p{
    font-size: 15px;
    padding-bottom: 5px;
  }
}
</style>