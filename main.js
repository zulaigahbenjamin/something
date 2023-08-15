import { createApp } from 'vue';
import App from './views/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store'; // Import your Vuex store

// Create Vue Router instance and define routes
const router = createRouter({
    history: createWebHistory(),
    routes: [

    ] 
});

const app = createApp(App);

app.use(router).use(store).mount('#app');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'bgkq7axlalh52arwgnvv-mysql.services.clever-cloud.com',
    database: 'testing',
    user: 'u9j898sc5oghrbny',
    password: 'kRlXj9ltbbDgL5JVT21O'
});


connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});


module.exports = router;