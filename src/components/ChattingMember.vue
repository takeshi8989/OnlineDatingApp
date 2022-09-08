<template>
    <div class="user-card">
        <img :src="img" class="user-pic">
        <p>{{ user.results[0].name.first + " " + user.results[0].name.last }}</p>
        <div>
            <router-link :to="{name: 'Chat', params: { id: id }}"><button>message</button></router-link>
            <router-link :to="{ name: 'UserDetail', params: {id: id} }"><button>detail</button></router-link>
        </div>
    </div>
    
</template>

<script>
    export default{
        props: ['user'],
        computed: {
            img() {
                return this.user.results[0].picture.large;
            },
            id() {
                return this.user.results[0].login.uuid;
            }
        }
    }
</script>

<style scoped>
    .user-card{
        width: 50%;
        height: auto;
        margin: 20px auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        display: flex;
        text-align: center;
        align-items: center;
    }
    .user-pic{
        width: 20%;
        height: auto;
        border-radius: 50%;
        margin: 10px;
    }
    .user-card button{
        width: 60%;
        margin: 10px;
    }
    
</style>