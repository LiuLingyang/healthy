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
                </div>
            </div>
            <div class="m-blk">
                <div class="ttl">血管阻塞程度（ABI）左踝和右踝</div>
                <div class="box">
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