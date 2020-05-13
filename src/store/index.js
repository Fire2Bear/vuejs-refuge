import Vue from 'vue'
import Vuex from 'vuex'
// import { v4 as uuidv4 } from 'uuid';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pets: [
      {
        id: 1,
        name: "Billy",
        age: 4,
        sex: 1,
        species: "Labrador",
        picture: ""
      },
      {
        id: 2,
        name: "TicTac",
        age: 1,
        sex: 1,
        species: "Bull-dog",
        picture: "",
      },
      {
        id: 3,
        name: "John",
        age: 10,
        sex: 1,
        species: "Bull-dog français",
        picture: ""
      },
      {
        id: 4,
        name: "Boule",
        age: 4,
        sex: 2,
        species: "Chihuahua",
        picture: ""
      },
    ],
    basket: [],
  },
  mutations: {
    addPet(state, pet) {
      state.pets.push(pet);
    },
    addPetToBasket(state, petId) {
      state.basket.push(petId);
      console.log(state.basket);

    },
    deletePet(state, id) {
      state.pets = state.pets.filter((pet) => !pet.id === id);
    },
    addPetPicture(state, {id, url}) {
      state.pets.forEach((pet) => {
        if(pet.id === parseInt(id)){
          pet.picture = url;
        }
      });

    },
  },
  getters: {
    getPet: (state) => (id) => {
      return state.pets.filter((pet) => {
        return pet.id === id
      })[0];
    }
  },
  actions: {
     addPicturesToAllPets(context){
      context.state.pets.forEach(async (pet) => {
        let src = await (await fetch('https://random.dog/woof.json')).json();
        console.log(src.url)
        context.commit('addPetPicture', {id: pet.id,  url: src.url});
      });
    },
    addPetToBasket(context, petId){
      context.commit('addPetToBasket', petId);

      return new Promise((resolve, reject) => {
        if (context.state.basket.lastItem === petId) {
          resolve();
        }
        reject();
      })
    },
  },
  strict: true,
  modules: {}
})
