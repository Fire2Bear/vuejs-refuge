import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {Button, Menu, Icon, List, Spin, Avatar, Card, Tooltip, message} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store'

Vue.use(Tooltip);
Vue.use(Card);
Vue.use(Spin);
Vue.use(Avatar);
Vue.use(Button);
Vue.use(List);
Vue.use(Icon);
Vue.use(Menu);
Vue.config.productionTip = false;
Vue.prototype.$message = message;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");