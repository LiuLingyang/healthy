<template>
    <div class="g-mn">
        <div class="g-login">
        	<div class="m-banner">
        		<div class="img"><img src="../assets/img/login.png"></div>
                <p class="wrd1">浙江省公民体质监测中心</p>
        		<p class="wrd">公民体质评定报告</p>
        	</div>
        	<div class="m-form">
        		<div class="ipt"><input type="text" placeholder="请输入姓名" v-model="name"></div>
                <div class="ipt"><input type="date" placeholder="请输入出身日期" v-model="birth"></div>
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
                name:undefined,
                birth:undefined
            }
        },
        created(){

        },
        mounted(){

        },
        methods: {
            submit(){
            	if(!this.name || !this.birth) return;
            	service.getQuery({
                    name:this.name,
                    brith:this.birth
                }).then(result => {
                    if(result.IsOK == 'true'){
                        this.routerGo();
                    }else{
                        alert(result.Msg);
                    }
                }).catch(err => {
                    alert('没有查询到您的报告');
                });
            },
            routerGo(){
                this.$router.push({ name: 'healthy', params: { name:this.name,birth:this.birth }});
            }
        }
    }
</script>
