<template>
    <div class="position-left">
        <router-link to="/"><button class="home-btn">←home</button></router-link>
    </div>
    <div v-if="user" class="user-detail">
        <img :src="userPic" class="user-picture"><br>
        <router-link :to="{ name: 'Chat', params: { id: user.id }}"><button>Message</button></router-link>
        <div class="info">
            <p>Name: {{ name }}</p>
        </div>
        <div class="info">
            <p>Age: {{ age }}</p>
        </div>
        <div class="info">
            <p>Gender: {{ gender }}</p>
        </div>
        <div class="info">
            <p>Country: {{ country }}</p>
        </div>
        <div class="info">
            <p>State: {{ state }}</p>
        </div>
        <div class="info">
            <p>City: {{ city }}</p>
        </div>
    </div>
    <div v-else>
        No user Found
    </div>
</template>

<script>
import { objectExpression } from '@babel/types';

    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        computed: {
            user() {
                return this.$store.state.users.find( item => item.id == this.id);
            },
            name() {
                return this.user.userObj.results[0].name.first + " " + this.user.userObj.results[0].name.last;
            },
            gender() {
                return this.user.userObj.results[0].gender;
            },
            age() {
                return this.user.userObj.results[0].dob.age;
            },
            country() {
                return this.user.userObj.results[0].location.country;
            },
            state() {
                return this.user.userObj.results[0].location.state;
            },
            city() {
                return this.user.userObj.results[0].location.city;
            },
            userPic() {
                return this.user.userObj.results[0].picture.large;
            }
        },
        methods: {
            click() {
                console.log(this.id);
            }
        }
    }
</script>

<style>
    .position-left{
        display: flex;
        justify-content: start;
        margin-left: 20px;
    }
    .user-detail{
        width: 50%;
        height: auto;
        margin: 20px auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    .user-picture{
        width: 20%;
        height: auto;
    }
    .info{
        border: inset;
        height: 30px;
        text-align: center;
        padding-bottom: 5px;
    }
    .user-detail button {
        width: 20%;
    }
    .home-btn{
        width: 100%;
    }
</style>