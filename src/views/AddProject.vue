<template>
  <!-- Add new project form -->
  <form @submit.prevent="addProject">
    <label>Project Title</label>
    <input type="text" v-model="title">
    <label>Project Detail</label>
    <input type="text" v-model="detail">
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return { title: "", detail: "" }; // Form inputs
  },
  methods: {
    addProject() {
      // POST request to add project
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, detail: this.detail, complete: false })
      })
      .then(() => this.$router.push("/")) // Redirect on success
      .catch(err => console.log(err)); // Error handling
    }
  }
}
</script>

<style>
  form { 
    background: white; 
    padding: 20px; 
    border-radius: 10px; 
  }
  label { 
    display: block; 
    color: #bbb; 
    font-size: 14px; 
    font-weight: bold; 
    margin: 20px 0 10px; 
  }
  input { 
    padding: 10px; 
    border: none; 
    border-bottom: 1px solid #ddd; 
    width: 100%; 
    font-size: 20px; 
  }
  form button { 
    display: block; 
    margin: 40px auto 0; 
    background: #00ce89; 
    color: white; 
    padding: 10px; 
    border-radius: 6px; 
    font-size: 16px; 
  }
</style>
