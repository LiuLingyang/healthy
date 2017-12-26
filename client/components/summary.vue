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
                        <div class="item" v-if="!!result.GripAssess">
                            <span>握力</span>
                            <div class="eval">{{result.GripAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.SittingFlexionAssess">
                            <span>坐位体前屈</span>
                            <div class="eval">{{result.SittingFlexionAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.SelReactionTimeAssess">
                            <span>选择反应时</span>
                            <div class="eval">{{result.SelReactionTimeAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.EyeCloseStandTimeAssess">
                            <span>闭眼单脚站立</span>
                            <div class="eval">{{result.EyeCloseStandTimeAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.VitalCapacityAssess">
                            <span>肺活量</span>
                            <div class="eval">{{result.VitalCapacityAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.StepIndexAssess">
                            <span>台阶指数</span>
                            <div class="eval">{{result.StepIndexAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.LongJumpAssess">
                            <span>立定跳远</span>
                            <div class="eval">{{result.LongJumpAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.TennisAssess">
                            <span>网球掷远</span>
                            <div class="eval">{{result.TennisAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.TripRunAssess">
                            <span>10米折返跑</span>
                            <div class="eval">{{result.TripRunAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.BalanceAssess">
                            <span>走平衡木</span>
                            <div class="eval">{{result.BalanceAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.ContinueJumpAssess">
                            <span>双脚连续跳</span>
                            <div class="eval">{{result.ContinueJumpAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.StandJumpAssess">
                            <span>纵跳</span>
                            <div class="eval">{{result.StandJumpAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.PushUpAssess">
                            <span>俯卧撑</span>
                            <div class="eval">{{result.PushUpAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.SitUpAssess">
                            <span>一分钟仰卧起坐</span>
                            <div class="eval">{{result.SitUpAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.HWAssess">
                            <span>标准身高体重</span>
                            <div class="eval">{{result.HWAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.BodyHeightAssess">
                            <span>儿童身高</span>
                            <div class="eval">{{result.BodyHeightAssess}}</div>
                        </div>
                        <div class="item" v-if="!!result.TotalScore">
                            <span>总得分</span>
                            <div class="eval">{{result.TotalScore}}</div>
                        </div>
                        <div class="item" v-if="!!result.TotalAssess">
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