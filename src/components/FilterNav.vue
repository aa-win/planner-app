<template>
  <!-- Filter navigation buttons -->
  <nav class="filter-nav">
    <button @click="filterBy('all')" :class="{ active: current === 'all' }">all</button>
    <button @click="filterBy('complete')" :class="{ active: current === 'complete' }">complete</button>
    <button @click="filterBy('ongoing')" :class="{ active: current === 'ongoing' }">ongoing</button>
  </nav>
</template>

<script>
export default {
  props: ['current'], // Active filter from parent
  methods: {
    filterBy(value) {
      this.$emit('filterValue', value); // Emit filter value
    }
  }
}
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  font-size: 12px;
  text-transform: uppercase;
  margin: 0 10px 20px 0;
  font-weight: bold;
  cursor: pointer;
}
button.active {
  color: #333; 
}
</style>
