import { createStore } from "vuex";
import axios from 'axios'
export default createStore({
  state: {
    countries: []
  },
  getters: {
    countries(state){
      return state.countries
    },
    hasCountries(state){
      return state.countries.length < 1
    }
  },
   actions: {
    async getCountries({commit}){
    await axios.get("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.data;
    })
    .then((data) => {
     
      // return data.map((response) => {
       commit('setCountries', data)
    //   });
     });
   
     }
  },
  mutations: {
    setCountries(state, countries){
      state.countries = countries
    }
  },

  modules: {},
});
