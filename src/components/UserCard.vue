<template>
    <div class="user-card">
        <img :src="user.userObj.results[0].picture.large" alt="Avatar" style="width:100%">
        <h4><b>{{ user.userObj.results[0].name.first }} {{ user.userObj.results[0].name.last }}</b></h4>
        <div class="action">
            <router-link :to="{ name: 'Chat', params: { id: user.id }}"><span><i class="fa-regular fa-message"></i></span></router-link>
            <router-link :to="{ name: 'UserDetail', params: {id: user.id} }"><span><i class="fa-solid fa-user"></i></span></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['user']
        
    }
</script>

<style>
    .user-card{
        width: 100%;
        height: auto;
        margin: 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    .user-card h4{
        margin-top: 0;
    }
    .action{
        display: flex;
        justify-content: space-around;
        background-color: orange;
        padding: 10px;
    }
</style>