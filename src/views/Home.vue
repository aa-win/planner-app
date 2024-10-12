<template>
  <div class="home">
    <!-- Filter navigation -->
    <FilterNav @filterValue="current = $event" :current="current"></FilterNav>
    <!-- Display projects -->
    <div v-for="project in filteredProjects" :key="project.id">
      <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"></SingleProject>
    </div>
  </div>
</template>

<script>
import FilterNav from '../components/FilterNav';
import SingleProject from '../components/SingleProject';

export default {
  name: 'Home',
  components: { FilterNav, SingleProject },
  data() {
    return {
      projects: [], // Project list
      current: "all" // Filter
    };
  },
  methods: {
    deleteProject(id) {
      this.projects = this.projects.filter(project => project.id != id); // Remove project
    },
    completeProject(id) {
      const findProject = this.projects.find(project => project.id === id); // Toggle completion
      findProject.complete = !findProject.complete;
    }
  },
  computed: {
    filteredProjects() {
      if (this.current === "complete") return this.projects.filter(p => p.complete); // Show completed
      if (this.current === "ongoing") return this.projects.filter(p => !p.complete); // Show ongoing
      return this.projects; // Show all
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(datas => { this.projects = datas; }) // Fetch projects
      .catch(() => {}); // Error handling
  }
}
</script>
