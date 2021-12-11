<template>
  <div class="container">
    <h4 v-if="this.selectedCountry == ''">
      Getting info about 
    </h4>
    <router-link to="/" class="back">
      <img src="../assets/back.svg" alt="" v-if="currentTheme === 'light'" />
      <img src="../assets/back1.svg" alt="" v-else />

      <p>Back</p>
    </router-link>
    
    <div class="country-container">
      <img :src="this.selectedCountry.flags.png" alt="" />
      <div class="country-details">
        <h1>{{ this.selectedCountry.name.common }}</h1>
        <p >
          Native Name: <span v-for="nativeName in this.selectedCountry.name.nativeName" :key="nativeName">{{ nativeName.official }}, </span>
        </p>
        <p>
          Population: <span>{{ this.selectedCountry.population }}</span>
        </p>
        <p>
          Region: <span>{{ this.selectedCountry.region }}</span>
        </p>
        <p>
          Sub Region: <span>{{ this.selectedCountry.subregion }}</span>
        </p>
        <p v-for="capital in this.selectedCountry.capital" :key="capital">
          Capital: <span>{{ capital }}</span>
        </p>

        <br />
        <p v-for="tld in this.selectedCountry.tld" :key="tld">
          Top Level Domain: <span>{{ tld }}</span>
        </p>
        <p>
          Currencies: <span v-for="currency in this.selectedCountry.currencies" :key="currency">{{ currency.name }},</span>
        </p>
        <p>
          Languages: <span v-for="language in this.selectedCountry.languages" :key="language">{{ language }},</span>
        </p>

        <br />

        <h4>Border Countries:</h4>
        <div class="borders">
          <p
            class="border"
            v-for="border in this.selectedCountry.borders"
            :key="border"
          >
            {{ border }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      selectedCountry: "",
      count: [2, 4, 5, 7],
      currentTheme: localStorage.getItem("theme"),
    };
  },
  async created() {
    this.selectedCountry = await axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.data.filter((data) => data.name.common == this.id)[0];
      });
  },
};
</script>

<style lang="scss" scoped>
.country-container {
  display: block;
  margin: 0 auto;

  width: 70%;
  max-width: 340px;
  margin-bottom: 20px;

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
  }
}
.country-details {
  padding: 20px 20px 30px 20px;
  border-radius: 0px 0px 10px 10px;
  background: var(--secondary-color);
  color: var(--font-color);
  h1 {
    font-size: 18px;
    margin-bottom: 8px;
  }
  p {
    font-size: 15px;
    padding-bottom: 5px;
  }
}
.borders {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.border {
  margin: 10px auto;
  padding: 7px 18px;
  box-shadow: 1px 1px 5px 1px var(--primary-color, 0.2);
}
.back {
  color: var(--font-color);
  text-decoration: none;
  margin: 20px 20px 30px;
  display: flex;
  align-items: center;
  width: 90px;
  box-shadow: 0px 1px 3px 1px var(--secondary-color);
  padding: 5px 12px;
  p {
    font-size: 14px;
  }
  img {
    width: 20px;

    color: red;
    margin-right: 5px;
  }
}
</style>