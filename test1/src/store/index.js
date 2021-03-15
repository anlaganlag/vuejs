import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({
    state:{
        count:888
    },
    mutations:{
        add (state){
            state.count++
        },
        addN (state,count){
            state.count+=count
        }
    }
})

export default store