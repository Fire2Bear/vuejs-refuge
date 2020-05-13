
<script>
    export default {
        methods: {
            addPetToBasket(petId){
                this.$store.commit('addPetToBasket', petId);
                console.log("L'animal a bien été ajouté au panier");
                this.$message.success("L'animal a bien été ajouté au panier")
            },
        }
    }
</script>

<style scoped>

</style>