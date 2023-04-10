import {createStore} from "vuex";
import productsModule from "@/store/module/products.js";
import cartModule from "@/store/module/cart.js";

const store = createStore({
    modules: {
        prods: productsModule,
        carts: cartModule
    }
});

export default store;