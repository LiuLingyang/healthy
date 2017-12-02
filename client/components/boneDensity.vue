<template>
    <div>
        <div class="m-hd">
            <div class="back" @click="changeMode"><div class="arrow"></div><span class="wrd">返回</span></div>
            骨密度
        </div>
        <div class="m-ship"><img src="../assets/img/ship.png"></div>
        <div class="m-mdl">
            <div class="imgs">
                <div class="line line-2"></div>
                <img class="img1" src="../assets/img/bone1.png"/>
                <img class="img4" src="../assets/img/bone2.png"/>
            </div>
            <div class="m-blk">
                <div class="ttl">
                    <span>T值</span>
                    <div class="value">{{BoneDensity.TValue}}</div>
                </div>
            </div>
            <div class="m-blk">
                <div class="ttl">骨折风险评估</div>
                <div class="box">
                    <div class="fract f-cb">
                        <div class="item" :class="{'z-active':BoneDensity.FractureRisk=='骨质正常'}">
                            <div class="img"><img src="../assets/img/fract1.png"></div>
                            <div class="wrd">骨质正常</div>
                            <div class="trig"><div class="hook"></div></div>
                        </div>
                        <div class="item" :class="{'z-active':BoneDensity.FractureRisk=='骨质少孔'}">
                            <div class="img"><img src="../assets/img/fract2.png"></div>
                            <div class="wrd">骨质少孔</div>
                            <div class="trig"><div class="hook"></div></div>
                        </div>
                        <div class="item" :class="{'z-active':BoneDensity.FractureRisk=='骨质疏松'}">
                            <div class="img"><img src="../assets/img/fract3.png"></div>
                            <div class="wrd">骨质疏松</div>
                            <div class="trig"><div class="hook"></div></div>
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
            BoneDensity: {
                type: Object
            }
        },
        created(){
            
        },
        mounted(){
            
        },
        methods: {
            changeMode(){
                this.$emit('changeMode','index');
            }
        }
    }
</script>