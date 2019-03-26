import Vue from 'vue'
import Vuex from 'vuex'
import { db } from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    itemUpdated (state, payload) {
      state.items[payload.idx] = payload.item
    },
    setItems (state, payload) {
      state.items = payload
    }
  },
  actions: {
    getItems ({commit}) {
      let paymentsRef = db.ref('payments')
      paymentsRef.once('value').then((snapshot) => {
        commit('setItems', Object.values(snapshot.val()))
      })
    },
    updateItem ({commit, state}, payload) {
      let item = state.items[payload.id]
      let updatedItem = {
        ID: item.ID,
        Name: item.Name,
        Date: item.Date,
        Description: payload.value,
        Amount: item.Amount
      }
      db.ref('payments/'+payload.id).set(updatedItem, (err) => {
        if (!err) {
          commit('itemUpdated', {idx: payload.id, item: updatedItem})
        }
      })

    }
  }
})
