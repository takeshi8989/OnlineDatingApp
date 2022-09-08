<template>
    <div>
        <router-link :to="{name: 'MessageList'}"><h1>Message List</h1></router-link>
    </div>
    <div class="d-flex">
        <div v-if="users.length >= 4" class="card" v-for="user in users" :key="user.id">
            <UserCard :user="user" />
        </div>
        <div v-else>Loading... just a moment</div>
    </div>
</template>

<script>
    import UserCard from '../components/UserCard.vue'

    export default {
        components: {UserCard},
        computed: {
            users() {
                return this.$store.state.users;
            }
        }
    }
</script>

<style>
    .d-flex{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card{
        width: 20%;
        margin: 10px;
    }
</style>
