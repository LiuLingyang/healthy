<template>
    <div>
        <div class="m-hd">
            <div class="back" @click="changeMode"><div class="arrow"></div><span class="wrd">返回</span></div>
            综合评价
        </div>
        <div class="m-ship"><img src="../assets/img/ship.png"></div>
        <div class="m-mdl m-mdl-2">
            <div class="m-blk">
                <div class="ttl">综合评价</div>
                <div class="box">
                    <div class="evaluate">
                        {{TotalEvaluate.TotalAppraise}}
                    </div>  
                </div>
            </div>
            <div class="m-blk">
                <div class="ttl">重点关注</div>
                <div class="box">
                    <div class="evaluate">
                        {{TotalEvaluate.ImportFocus}}
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import _ from '../utils';
    import consts from '../utils/consts';

    export default {
        data(){
            return {
                
            }
        },
        props: {
            TotalEvaluate: {
                type: Object
            }
        },
        created(){
            
        },
        mounted(){
            
        },
        methods: {
            changeMode(){
                this.$emit('changeMode','national');
            }
        }
    }
</script>