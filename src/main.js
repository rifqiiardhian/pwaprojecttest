import Vue from 'vue';
import * as firebase from 'firebase';
import store from './store';
import App from './App.vue';
import router from './router';
import '@/plugins';

Vue.config.productionTip = false;

const configOptions = {
  apiKey: 'AIzaSyDxeuqsgMMECDwu33ZtFz5gFp1g2QRRzX8',
  authDomain: 'vue-auth-c26b3.firebaseapp.com',
  databaseURL: 'https://vue-auth-c26b3.firebaseio.com',
  projectId: 'vue-auth-c26b3',
  storageBucket: 'vue-auth-c26b3.appspot.com',
  messagingSenderId: '33793441783',
  appId: '1:33793441783:web:e1377e7d3324313a0678f2',
  measurementId: 'G-EMPTTGEH58',
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user);
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
