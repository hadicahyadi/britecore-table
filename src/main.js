import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app"
import "firebase/database"

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDm_FlEUU-DqOcb4ap_lO65d5wZ1aRGwtQ",
    authDomain: "britecore-test-42ec9.firebaseapp.com",
    databaseURL: "https://britecore-test-42ec9.firebaseio.com",
    projectId: "britecore-test-42ec9",
    storageBucket: "britecore-test-42ec9.appspot.com",
    messagingSenderId: "841192324993"
})
const firestore = firebase.database()
export const db = firestore

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
