<template>
    <div>
        <div class="m-hd">
            <div class="back" @click="changeMode"><div class="arrow"></div><span class="wrd">返回</span></div>
            总评价
        </div>
        <div class="m-ship"><img src="../assets/img/ship.png"></div>
        <div class="m-mdl m-mdl-2">
            <div class="m-blk m-blk-2">
                <div class="box">
                    <div class="summary">
                        <div class="item">
                            <span>握力</span>
                            <div class="eval">{{result.GripAssess}}</div>
                        </div>
                        <div class="item">
                            <span>坐位体前屈</span>
                            <div class="eval">{{result.SittingFlexionAssess}}</div>
                        </div>
                        <div class="item">
                            <span>选择反应时</span>
                            <div class="eval">{{result.SelReactionTimeAssess}}</div>
                        </div>
                        <div class="item">
                            <span>闭眼单脚站立</span>
                            <div class="eval">{{result.EyeCloseStandTimeAssess}}</div>
                        </div>
                        <div class="item">
                            <span>肺活量</span>
                            <div class="eval">{{result.VitalCapacityAssess}}</div>
                        </div>
                        <div class="item">
                            <span>总得分</span>
                            <div class="eval">{{result.TotalScore}}</div>
                        </div>
                        <div class="item">
                            <span>总评价</span>
                            <div class="eval">{{result.TotalAssess}}</div>
                        </div>
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