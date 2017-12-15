<template>
    <div class="g-mn">
        <div class="g-login">
        	<div class="m-banner">
        		<div class="img"><img src="../assets/img/login.png"></div>
        		<p class="wrd">国民体质评定报告</p>
        	</div>
        	<div class="m-form">
        		<div class="ipt"><input type="text" placeholder="请输入身份证号" v-model="phoneorcard"></div>
        		<div class="ipt"><div class="u-btn u-btn-4" @click="submit">登录</div></div>
        	</div>
        </div>
    </div>
</template>

<script>
    import _ from '../utils';
    import consts from '../utils/consts';
    import service from '../utils/service';

    export default {
        data(){
            return {
                phoneorcard:undefined
            }
        },
        created(){
            if(!!localStorage.phoneorcard){
            	this.$router.push({ name: 'healthy'});
            }
        },
        mounted(){
            
        },
        methods: {
            submit(){
            	if(!this.phoneorcard) return;
            	service.getQuery({
                    phoneorcard:this.phoneorcard
                }).then(result => {
                    if(result.IsOk == 'true'){
                    	localStorage.phoneorcard = this.phoneorcard;
                    	this.$router.push({ name: 'healthy'});
                    }else{
                    	localStorage.removeItem('phoneorcard');
                    }
                })
            }
        }
    }
</script>
