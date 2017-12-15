<template>
    <div>
        <div class="m-hd">
            <div class="back" @click="changeMode"><div class="arrow"></div><span class="wrd">返回</span></div>
            体成分
        </div>
        <div class="m-ship"><img src="../assets/img/ship.png"></div>
        <div class="m-mdl">
            <div class="imgs">
                <div class="line line-1"></div>
                <img class="img1" src="../assets/img/body1.png"/>
                <img class="img2" src="../assets/img/body2.png"/>
                <img class="img3" src="../assets/img/body3.png"/>
            </div>
            <div class="m-blk">
                <div class="ttl">体脂肪率的值和评价</div>
                <div class="box">
                    <div class="line f-cb">
                        <div class="u-btn u-btn-2 u-btn-2-1">过低</div>
                        <div class="u-btn u-btn-2 u-btn-2-2">标准</div>
                        <div class="u-btn u-btn-2 u-btn-2-3">过高</div>
                        <div class="u-btn u-btn-2 u-btn-2-4">肥胖</div>
                        <div class="score" :style="{left:BodyComposition.BodyFatRateScore+'%'}">
                            <div class="trig"></div>
                            {{BodyComposition.BodyFatRateScore}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-blk">
                <div class="ttl">体型分析</div>
                <div class="box">
                    <div class="shape f-cb">
                        <div class="item" v-for="(item, index) of shapeArr" :class="{'z-active':item.text==BodyComposition.BodyFatRateAssess}">
                            <div class="img back" v-if="item.index===1"><img src="../assets/img/shape-10.png"/></div>
                            <div class="img front" v-if="item.index===1"><img src="../assets/img/shape-11.png"/></div>
                            <div class="img back" v-if="item.index===2"><img src="../assets/img/shape-20.png"/></div>
                            <div class="img front" v-if="item.index===2"><img src="../assets/img/shape-21.png"/></div>
                            <div class="img back" v-if="item.index===3"><img src="../assets/img/shape-30.png"/></div>
                            <div class="img front" v-if="item.index===3"><img src="../assets/img/shape-31.png"/></div>
                            <div class="img back" v-if="item.index===4"><img src="../assets/img/shape-40.png"/></div>
                            <div class="img front" v-if="item.index===4"><img src="../assets/img/shape-41.png"/></div>
                            <div class="img back" v-if="item.index===5"><img src="../assets/img/shape-50.png"/></div>
                            <div class="img front" v-if="item.index===5"><img src="../assets/img/shape-51.png"/></div>
                            <div class="img back" v-if="item.index===6"><img src="../assets/img/shape-60.png"/></div>
                            <div class="img front" v-if="item.index===6"><img src="../assets/img/shape-61.png"/></div>
                            <div class="img back" v-if="item.index===7"><img src="../assets/img/shape-70.png"/></div>
                            <div class="img front" v-if="item.index===7"><img src="../assets/img/shape-71.png"/></div>
                            <div class="img back" v-if="item.index===8"><img src="../assets/img/shape-80.png"/></div>
                            <div class="img front" v-if="item.index===8"><img src="../assets/img/shape-81.png"/></div>
                            <div class="img back" v-if="item.index===9"><img src="../assets/img/shape-90.png"/></div>
                            <div class="img front" v-if="item.index===9"><img src="../assets/img/shape-91.png"/></div>
                            <div class="wrd">{{item.text}}</div>
                            <div class="trig"><div class="hook"></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-blk">
                <div class="ttl">体重控制</div>
                <div class="box">
                    <div class="control">
                        <div class="item f-cb">
                            <div class="wrd">目标体重</div>
                            <div class="u-btn u-btn-3 u-btn-3-1">{{BodyComposition.TargetWeight}} kg</div>
                        </div>
                        <div class="item f-cb">
                            <div class="wrd">体重控制</div>
                            <div class="u-btn u-btn-3 u-btn-3-2">{{BodyComposition.WeightControl}} kg</div>
                        </div>
                        <div class="item f-cb">
                            <div class="wrd">脂肪控制</div>
                            <div class="u-btn u-btn-3 u-btn-3-3">{{BodyComposition.FatControl}} kg</div>
                        </div>
                        <div class="item f-cb">
                            <div class="wrd">肌肉控制</div>
                            <div class="u-btn u-btn-3 u-btn-3-4">{{BodyComposition.MuscleControl}} kg</div>
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
                shapeArr:consts.BODY_SHAPE
            }
        },
        props: {
            BodyComposition: {
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