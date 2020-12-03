import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
import storeConfig from '../../src/store';

describe('Testing the pet store', () => {

    test('Adding the id of a pet into the store basket', () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        let petId = 2;
        const store = new Vuex.Store(storeConfig);
        expect(store.state.basket.length).toBe(0);
        store.commit('addPetToBasket', petId);
        expect(store.state.basket[0]).toBe(petId)
    });

})
;
