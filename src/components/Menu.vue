<template>
    <div id="nav">
        <router-link :to="'/pet_list'">
            <a-button type="primary">Home</a-button>
        </router-link>
        |
        <router-link :to="'/about'"><a-button type="primary">Panier</a-button></router-link>
    </div>
</template>

<script>

    import 'ant-design-vue/dist/antd.css';


    export default {
        name: "Menu",
        data() {
            return {
                collapsed: false,
            };
        },
        components: {},
        methods: {
            toggleCollapsed() {
                this.collapsed = !this.collapsed;
            },
        },
    };
</script>


<style scoped>

</style>