<template>

    <div class="line-bc"><!--①LINE会話全体を囲う-->


        <!--③右コメント始-->
        <div class="mycomment">
            <p>{{ msg }}</p>
        </div>
        <!--/③右コメント終-->


        <!--②左コメント始-->
        <div v-if="response" class="balloon6">
            <div class="faceicon">
                <img :src="img" alt="" height="10px" width="10px">
            </div>
        <div class="chatting">
            <div class="says">
            <p>{{ res }}</p>
            </div>
        </div>
        </div>
        <!--②/左コメント終-->

        </div><!--/①LINE会話終了-->
    
</template>

<script>
    export default{
        props: ['msg', 'img'],
        data() {
            return {
                response: false
            }
        },
        computed : {
            res() {
                return this.msg;
            }
        },
        mounted() {
            setTimeout(() => {
                this.response = true;
            }, 100);
        }
    }
</script>

<style>
    .line-bc {
        width: 100%;
        height: 100%;
        text-align: right;
        font-size: 14px;
        position: relative;
    }
        /*以下、②左側のコメント*/
    .balloon6 {
        width: 100%;
        margin: 10px 0;
        overflow: hidden;
    }
    .balloon6 .faceicon {
        float: left;
        margin-right: -50px;
        width: 40px;
    }

    .balloon6 .faceicon img{
        width: 100%;
        height: auto;
        border-radius: 50%;
    }
    .balloon6 .chatting {
        width: 100%;
        text-align: left;
    }
    .says {
        display: inline-block;
        position: relative; 
        margin: 0 0 0 50px;
        padding: 10px;
        max-width: 250px;
        border-radius: 12px;
        background: #edf1ee;
    }

    .says:after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 3px; 
        left: -19px;
        border: 8px solid transparent;
        border-right: 18px solid #edf1ee;
        -webkit-transform: rotate(35deg);
        transform: rotate(35deg);
    }
    .says p {
        margin: 0;
        padding: 0;
    }

        /*以下、③右側の緑コメント*/
    .mycomment{
        margin: 10px;
    }
    .mycomment p {
        display: inline-block;
        position: relative; 
        margin: 0 10px 0 0;
        padding: 8px;
        max-width: 250px;
        border-radius: 12px;
        background: #30e852;
        font-size: 15px;
    }

    .mycomment p:after {
        content: "";
        position: absolute;
        top: 3px; 
        right: -19px;
        border: 8px solid transparent;
        border-left: 18px solid #30e852;
        -webkit-transform: rotate(-35deg);
        transform: rotate(-35deg);
    }
</style>