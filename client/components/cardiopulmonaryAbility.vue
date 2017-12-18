<template>
    <div>
        <div class="m-hd">
            <div class="back" @click="changeMode"><div class="arrow"></div><span class="wrd">返回</span></div>
            心肺功能
        </div>
        <div class="m-ship"><img src="../assets/img/ship.png"></div>
        <div class="m-mdl">
            <div class="imgs">
                <div class="line line-2"></div>
                <img class="img1" src="../assets/img/cardiopulmonary1.png"/>
                <img class="img4" src="../assets/img/cardiopulmonary2.png"/>
            </div>
            <div class="m-blk">
                <div class="ttl">
                    <span>F.C心肺功能能力（MET）</span>
                    <div class="value">{{CardiopulmonaryAbility.FCValue}}</div>
                </div>
            </div>
            <div class="m-blk">
                <div class="ttl">心肺功能评价</div>
                <div class="box">
                    <div class="evaluate">
                        {{CardiopulmonaryAbility.FCApprise}}
                    </div>  
                </div>
            </div>
            <div class="refImgs">
                <img v-if="result.Sex==0" src="../assets/img/FC1.jpg">
                <img v-if="result.Sex==1" src="../assets/img/FC2.jpg">
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
            CardiopulmonaryAbility: {
                type: Object
            },
            result: {
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