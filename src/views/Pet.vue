<template>

  <a-card>
    <img
            alt="example"
            :src="pet.picture"
            slot="title"
            style="height: 65vh"
    />
    <template class="ant-card-actions" slot="actions">
      <a-icon type="setting" key="setting" />
      <a-icon type="edit" key="edit" />
      <ButtonAddToBasketFromPet :pet-id="pet.id" />
    </template>
    <a-card-meta >
      <span slot="title">{{pet.name}}</span>
      <div slot="description">
        <p>
          Sexe : {{pet.sex === 1 ? "male" : "femelle"}}
        </p>
        <p>
          Âge : {{pet.age}}
        </p>
        <p>
          Race : {{pet.species}}
        </p>

      </div>
    </a-card-meta>
  </a-card>
</template>

<script>


  import ButtonAddToBasketFromPet from "../components/ButtonAddToBasketFromPet";

  export default {

    name: "Pet",
    data() {
      return {
        pet: {},
      };
    },
    created() {
      this.pet = this.$store.getters.getPet(parseInt(this.$route.params.petId));
      if (!this.pet || !this.pet.picture) {
        this.$router.history.replace("/pet_list")
      }
    },
    mounted() {
      console.log("this.pet.id =>");
      console.log(this.pet.id);


    },
    computed: {
      basket(){
        return this.$store.basket;
      },

    },
    components: {
      ButtonAddToBasketFromPet,
    },
    methods: {

    },
  };
</script>
<style>

</style>