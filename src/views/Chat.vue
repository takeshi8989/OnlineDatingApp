<template>
    <div class="btn-div">
        <router-link :to="{ name: 'UserList'}"><button class="home-btn">home</button></router-link>
    </div>
    <div v-if="user">
        <div class="chat-page">
            <div class="user-name">
                {{ user.userObj.results[0].name.first + " " + user.userObj.results[0].name.last }}
            </div>
            <div v-if="messageList" v-for="msg in messageList.msg">
                <MessageView :msg="msg" :img="img" />
            </div>
        </div>
        <div class="d-flex">
            <input type="textarea" v-model="message" @keydown.enter="sendMessage" ref="text">
            <button @click="print"></button>
        </div>
    </div>
    <div v-else>
        Can not access chat page
    </div>
</template>

<script>
    import MessageView from '../components/MessageView.vue'

    export default{
        components: { MessageView },
        data() {
            return {
                id: this.$route.params.id,
                message: '',
                haveMessageLog: false
            }
        },
        computed : {
            user(){
                return this.$store.state.users.find( item => item.id == this.id);
            },
            messageList() {
                return this.$store.state.messages.find(userMsg => userMsg.id == this.id);
            },
            img() {
                return this.user.userObj.results[0].picture.large;
            }
        },
        methods: {
            sendMessage() {
                if(this.message != ''){
                    if(this.messageList == undefined){
                        this.$store.commit('addMessageList', this.user);
                    }
                    this.$store.commit('addMessage', {
                        userId: this.id,
                        msg: this.message
                    });
                    this.$store.commit('sortList', this.id);
                }
                this.message = '';
            }
        },
        mounted(){
            this.$refs.text.focus();
        }
    }
</script>

<style scoped>
    .chat-page{
        width: 60%;
        height: 90vh;
        margin-top: 10px;
        margin: auto;
        border: solid;
        background: #7da4cd;
    }
    input{
        width: 20%;
        margin-top: 10px;
    }
    .d-flex button{
        margin-top: 10px;
        height: 23px;
        width: 25px;
    }
    .d-flex{
        display: flex;
        align-items: center;
    }
    .btn-div{
        display: flex;
        justify-content: start;
    }
    .home-btn{
        margin: 10px;
    }
    .user-name{
        background-color: gray;
        color: white;
        padding: 10px;
    }
</style>