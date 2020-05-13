<template>
    <a-list class="demo-loadmore-list" itemLayout="horizontal" :dataSource="pets">

        <a-list-item slot="renderItem" slot-scope="pet">
            <a slot="actions"><ButtonAddToBasketFromList :petId="pet.id"/></a>

            <a slot="actions">edit</a>
            <a slot="actions">more</a>



            <a-list-item-meta
                    :description="'sex : ' + (pet.sex === 1 ? 'male' : 'femelle')"
            >
                <router-link :to="{ name: 'Pet', params: {petId: pet.id } }" slot="title">
                    {{ pet.name }}
                </router-link>
                <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />

            </a-list-item-meta>


        </a-list-item>
    </a-list>
</template>
<script>

    import ButtonAddToBasketFromList from "../components/ButtonAddToBasketFromList";

    export default {
        name: "PetList",
        data() {
            return {
                data: [],
            };
        },
        created() {
            this.$store.dispatch('addPicturesToAllPets');
        },
        mounted() {

            console.log(this.pets);
        },
        methods: {},
        components: {
          ButtonAddToBasketFromList,
        },
        computed: {
            pets() {
                return this.$store.state.pets;
            }
        }
    };
</script>
<style>
    .demo-loadmore-list {
        min-height: 350px;
    }
</style>