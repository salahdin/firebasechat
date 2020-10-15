import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

Vue.config.productionTip = false
// Required for side-effects
require("firebase/firestore");

var Firebaseconfig = {
  apiKey: "AIzaSyD8xRGSZ-__y9r6CwAcxI4EYrjmRsmMQxs",
  authDomain: "salahs-chat-app.firebaseapp.com",
  databaseURL: "https://salahs-chat-app.firebaseio.com",
  projectId: "salahs-chat-app",
  storageBucket: "salahs-chat-app.appspot.com",
  messagingSenderId: "52749611827",
  appId: "1:52749611827:web:490a981ec8145f5ca80446",
  measurementId: "G-17M5W5JB8N"
};

firebase.initializeApp(Firebaseconfig);


var db = firebase.firestore();
window.db = db;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
