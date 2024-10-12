import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddProject from '../views/AddProject.vue';
import EditProject from '../views/EditProject.vue';

// App routes
const routes = [
  { path: '/', name: 'home', component: Home }, // Home
  { path: '/addProject', name: 'AddProject', component: AddProject }, // Add project
  { path: '/editProject/:id', name: 'EditProject', component: EditProject, props: true } // Edit project by ID
];

// Create router with history mode
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Use history mode
  routes // Register routes
});

export default router;
