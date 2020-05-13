<template>
    <a-tooltip v-on:click="addPetToBasket(petId)">
        <template slot="title">
            Ajouter au panier
        </template>
        <a-icon type="shopping-cart" key="shopping-cart"/>
    </a-tooltip>
</template>

<script>
    import AddToBasket from "../mixin/AddToBasket";

    export default {
        name: "ButtonAddToBasketFromPet",
        props: [
          "petId",
        ],
        mixins: [AddToBasket],
    }

</script>

<style scoped>

</style>