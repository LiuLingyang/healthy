<template>
    <div>
        <div class="m-hd">
            <div class="back" @click="changeMode"><div class="arrow"></div><span class="wrd">返回</span></div>
            血管机能
        </div>
        <div class="m-ship"><img src="../assets/img/ship.png"></div>
        <div class="m-mdl">
            <div class="imgs">
                <div class="line line-3"></div>
                <img class="img1" src="../assets/img/vascular1.png"/>
                <img class="img5" src="../assets/img/vascular2.png"/>
                <img class="img8" src="../assets/img/vascular1.png"/>
            </div>
            <div class="m-blk">
                <div class="ttl">血管弹性程度（PWV）左踝和右踝</div>
                <div class="box">
                    <div class="pwv">
                        <div class="item f-cb">
                            <div class="left">左踝</div>
                            <div class="right">属于：{{VascularFunction.PWVLeftAssess}}水平</div>
                        </div>
                        <div class="item f-cb">
                            <div class="left">右踝</div>
                            <div class="right">属于：{{VascularFunction.PWVRightAssess}}水平</div>
                        </div>
                    </div>
                    <div class="refImgs">
                        <img v-if="result.Sex==0" src="../assets/img/PWV1.jpg">
                        <img v-if="result.Sex==1" src="../assets/img/PWV2.jpg">
                    </div>
                </div>
            </div>
            <div class="m-blk">
                <div class="ttl">血管阻塞程度（ABI）左踝和右踝</div>
                <div class="box box-1">
                    <div class="obst">
                        <div class="counts">
                            <div class="count count-1">0.4</div>
                            <div class="count count-2">0.5</div>
                            <div class="count count-3">0.6</div>
                            <div class="count count-4">0.7</div>
                            <div class="count count-5">0.8</div>
                            <div class="count count-6">
                                <div class="num">0.9</div>
                                <div class="trig"></div>
                            </div>
                            <div class="count count-7">1.0</div>
                            <div class="count count-8">1.1</div>
                            <div class="count count-9">1.2</div>
                            <div class="count count-10">
                                <div class="num">1.3</div>
                                <div class="trig"></div>
                            </div>
                            <div class="count count-11">1.4</div>
                        </div>
                        <div class="btns">
                            <div class="u-btn u-btn-5 u-btn-5-1"></div>
                            <div class="u-btn u-btn-5 u-btn-5-1"></div>
                            <div class="u-btn u-btn-5 u-btn-5-1"></div>
                            <div class="u-btn u-btn-5 u-btn-5-1"></div>
                            <div class="u-btn u-btn-5 u-btn-5-1"></div>
                            <div class="u-btn u-btn-5 u-btn-5-2"></div>
                            <div class="u-btn u-btn-5 u-btn-5-3"></div>
                            <div class="u-btn u-btn-5 u-btn-5-3"></div>
                            <div class="u-btn u-btn-5 u-btn-5-3"></div>
                            <div class="u-btn u-btn-5 u-btn-5-1"></div>
                        </div>
                        <div class="explains">
                            <div class="explain explain-1">闭塞</div>
                            <div class="explain explain-2">正常</div>
                            <div class="explain explain-3">钙化</div>
                        </div>
                        <div class="calcs">
                            <img class="calc calc-1" src="../assets/img/calc1.png">
                            <img class="calc calc-2" src="../assets/img/calc2.png">
                            <img class="calc calc-3" src="../assets/img/calc3.png">
                            <img class="calc calc-4" src="../assets/img/calc4.png">
                            <img class="calc calc-5" src="../assets/img/calc5.png">
                        </div>
                        <div class="feets">
                            <img class="feet" src="../assets/img/feet1.png" :style="{left:(VascularFunction.ABILeftScore*100-40)+'%'}">
                            <img class="feet" src="../assets/img/feet2.png" :style="{left:(VascularFunction.ABIRightScore*100-40)+'%'}">
                        </div>
                    </div>
                    <div class="abi">
                        <div class="item f-cb">
                            <div class="left">左踝</div>
                            <div class="right">属于：{{VascularFunction.ABILeftAssess}}</div>
                        </div>
                        <div class="item f-cb">
                            <div class="left">右踝</div>
                            <div class="right">属于：{{VascularFunction.ABIRightAssess}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-blk">
                <div class="ttl">血管舒张程度</div>
                <div class="box">
                    <div class="pwv">
                        <div class="item f-cb">
                            <div class="left">左臂收缩压</div>
                            <div class="right">{{VascularFunction.FLb_SBP}}</div>
                        </div>
                        <div class="item f-cb">
                            <div class="left">左臂舒张压</div>
                            <div class="right">{{VascularFunction.FLb_DBP}}</div>
                        </div>
                        <div class="item f-cb">
                            <div class="left">右臂收缩压</div>
                            <div class="right">{{VascularFunction.FRb_SBP}}</div>
                        </div>
                        <div class="item f-cb">
                            <div class="left">右臂舒张压</div>
                            <div class="right">{{VascularFunction.FRb_DBP}}</div>
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
            VascularFunction: {
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