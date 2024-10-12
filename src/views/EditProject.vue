<template>
  <h1>Edit Project</h1>
  <!-- Edit form -->
  <form @submit.prevent="updateProject">
    <label>Project Title</label>
    <input type="text" v-model="title">
    <label>Project Detail</label>
    <input type="text" v-model="detail">
    <button type="submit">Update Project</button>
  </form>
</template>

<script>
export default {
  props: ["id"], // Project ID prop
  data() {
    return { title: "", detail: "" }; // Title and detail
  },
  mounted() {
    // Fetch project data on mount
    fetch('http://localhost:3000/projects/' + this.id)
      .then(res => res.json())
      .then(datas => { this.title = datas.title; this.detail = datas.detail; }) // Set data
      .catch(err => console.log(err)); // Error handling
  },
  methods: {
    updateProject() {
      // Update project via PATCH request
      fetch('http://localhost:3000/projects/' + this.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, detail: this.detail }) // Send updates
      })
      .then(() => { this.$router.push("/"); }) // Redirect on success
      .catch(err => console.log(err)); // Error handling
    }
  }
}
</script>

<style></style>
