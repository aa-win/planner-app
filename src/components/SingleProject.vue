<template>
    <!-- Project component -->
    <div class="project" @click="showDetail = !showDetail" :class="{complete: project.complete}">
        <div class="flexing">
            <div><h3>{{ project.title }}</h3></div>
            <div>
                <span class="material-icons" @click="deleteProject">delete</span>
                <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
                    <span class="material-icons">edit</span>
                </router-link>
                <span class="material-icons" @click.stop="completeProject">done</span>
            </div>
        </div>
        <p v-if="showDetail">{{ project.detail }}</p>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showDetail: false,
            api: 'http://localhost:3000/projects/'
        };
    },
    methods: {
        deleteProject() {
            fetch(this.api + this.project.id, { method: "DELETE" })
                .then(() => this.$emit("delete", this.project.id))
                .catch(console.log);
        },
        completeProject() {
            fetch(this.api + this.project.id, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ complete: !this.project.complete })
            })
            .then(() => this.$emit("complete", this.project.id))
            .catch(console.log);
        }
    }
};
</script>

<style>
.project {
    padding: 20px;
    background-color: #f2f2f2;
    margin: 10px;
    border-left: 6px solid crimson;
    border-radius: 8px;
    user-select: none;
}
h3 {
    cursor: pointer;
}
.flexing {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
span {
    margin-left: 10px;
}
span:hover {
    cursor: pointer;
    color: grey;
}
.complete {
    border-left-color: green;
}
</style>
