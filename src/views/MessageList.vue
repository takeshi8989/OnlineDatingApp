<template>
    <div class="btn-div">
        <router-link :to="{ name: 'UserList'}"><button class="home-btn">home</button></router-link>
    </div>
    chat list
    <div v-for="message in messages" :key="message.id">
        <ChattingMember :user="message.user" />
    </div>
</template>

<script>
    import ChattingMember from '../components/ChattingMember.vue'

    export default {
        components: { ChattingMember },
        computed: {
            messages() {
                return this.$store.state.messages;
            }
        }
    }
</script>

<style scoped>
    .btn-div{
        display: flex;
        justify-content: start;
    }
    .home-btn{
        margin: 10px;
    }
</style>