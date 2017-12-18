<template>
    <div class="g-mn">
        
        <div class="g-national" v-show="mode==='national'">
            <div class="m-hd">
                国民体质评定报告
            </div>
            <div class="m-national">
                <p class="rank"><span>{{rankPercent}}%</span></p>
                <p class="pro">全省排名</p>
                <div class="img" @click="changeMode('summary')">
                    <img v-if="age>2&&age<7&&sex==0" src="../assets/img/3-6-0.png"/>
                    <img v-if="age>2&&age<7&&sex==1" src="../assets/img/3-6-1.png"/>
                    <img v-if="age>19&&age<40&&sex==0" src="../assets/img/20-39-0.png"/>
                    <img v-if="age>19&&age<40&&sex==1" src="../assets/img/20-39-1.png"/>
                    <img v-if="age>39&&age<60&&sex==0" src="../assets/img/40-59-0.png"/>
                    <img v-if="age>39&&age<60&&sex==1" src="../assets/img/40-59-1.png"/>
                    <img v-if="age>59&&age<70&&sex==0" src="../assets/img/60-69-0.png"/>
                    <img v-if="age>59&&age<70&&sex==1" src="../assets/img/60-69-1.png"/>

                    <div class="blk blk-1">
                        <p>身高：{{height}}cm</p>
                        <p>体重：{{weight}}kg</p>
                    </div>
                    <div class="blk blk-2">
                        <p>肺活量：{{vitalCapacity}}ml</p>
                    </div>
                    <div class="blk blk-3">
                        <p>握力：{{grip}}kg</p>
                        <p>坐位体前屈：{{sittingFlexion}}cm</p>
                        <p>选择反应时：{{selReactionTime}}s</p>
                        <p>闭眼单脚站立：{{EyeCloseStandTime}}s</p>
                    </div>

                    <div class="tip">点击图片查看评价</div>
                    <!--div class="line line-1"></div-->
                </div>
            </div>
            <div class="m-national-list">
                <div class="item f-cb" @click="changeMode('body')">
                    <div class="img"><img src="../assets/img/body.png"></div>
                    <div class="wrd">体成分（{{BodyComposition.BodyFatRateScore}}）</div>
                    <div class="u-btn u-btn-1">{{BodyComposition.BodyFatRateAssess}}</div>
                    <div class="arrow"></div>
                </div>
                <div class="item f-cb" @click="changeMode('bone')">
                    <div class="img"><img src="../assets/img/bone.png"></div>
                    <div class="wrd">骨密度（{{BoneDensity.TValue}}）</div>
                    <div class="u-btn u-btn-1">{{BoneDensity.FractureRisk}}</div>
                    <div class="arrow"></div>
                </div>
                <div class="item f-cb" @click="changeMode('cardiopulmonary')">
                    <div class="img"><img src="../assets/img/cardiopulmonary.png"></div>
                    <div class="wrd">心肺功能（{{CardiopulmonaryAbility.FCValue}}）</div>
                    <div class="u-btn u-btn-1">{{CardiopulmonaryAbility.Assess}}</div>
                    <div class="arrow"></div>
                </div>
                <div class="item f-cb" @click="changeMode('vascular')">
                    <div class="img"><img src="../assets/img/vascular.png"></div>
                    <div class="wrd">血管机能（{{VascularFunction.ABILeftScore}}~{{VascularFunction.ABIRightScore}}）</div>
                    <div class="u-btn u-btn-1">{{VascularFunction.ABILeftAssess}}</div>
                    <div class="arrow"></div>
                </div>
                <div class="item f-cb" @click="changeMode('total')">
                    <div class="img"><img src="../assets/img/total.png"></div>
                    <div class="wrd">综合评价</div>
                    <div class="arrow"></div>
                </div>
            </div>
        </div>

        <div class="g-citizen" v-show="mode==='citizen'">
            <div class="m-hd">
                公民体质评定报告
            </div>
            <div class="m-citizen f-cb">
                <div class="img">
                    <img v-if="age>2&&age<7&&sex==0" src="../assets/img/3-6-0.png"/>
                    <img v-if="age>2&&age<7&&sex==1" src="../assets/img/3-6-1.png"/>
                    <img v-if="age>19&&age<40&&sex==0" src="../assets/img/20-39-0.png"/>
                    <img v-if="age>19&&age<40&&sex==1" src="../assets/img/20-39-1.png"/>
                    <img v-if="age>39&&age<60&&sex==0" src="../assets/img/40-59-0.png"/>
                    <img v-if="age>39&&age<60&&sex==1" src="../assets/img/40-59-1.png"/>
                    <img v-if="age>59&&age<70&&sex==0" src="../assets/img/60-69-0.png"/>
                    <img v-if="age>59&&age<70&&sex==1" src="../assets/img/60-69-1.png"/>
                </div>
                <div class="rank">
                    您的排名已经超过全省<br><span>{{rankPercent}}%</span><br>的人啦！
                </div>
            </div>
            <div class="m-mdl m-mdl-1">
                <div class="imgs">
                    <div class="line line-4"></div>
                    <img class="img1" src="../assets/img/citizen1.png"/>
                    <img class="img6" src="../assets/img/citizen2.png"/>
                    <img class="img7" src="../assets/img/citizen3.png"/>
                </div>
                <div class="m-blk m-blk-1">
                    <div class="ttl">身体形态</div>
                    <div class="box">
                        <div class="tab">
                            <div class="item f-cb"><span class="k">身高</span><span class="v">{{height}}cm</span></div>
                            <div class="item f-cb"><span class="k">体重</span><span class="v">{{weight}}kg</span></div>
                        </div>
                    </div>
                </div>
                <div class="m-blk m-blk-1">
                    <div class="ttl">身体机能</div>
                    <div class="box">
                        <div class="tab">
                            <div class="item f-cb"><span class="k">肺活量</span><span class="v">{{vitalCapacity}}ml</span></div>
                        </div>
                    </div>
                </div>
                <div class="m-blk m-blk-1">
                    <div class="ttl">身体素质</div>
                    <div class="box">
                        <div class="tab">
                            <div class="item f-cb"><span class="k">握力</span><span class="v">{{grip}}kg</span></div>
                            <div class="item f-cb"><span class="k">坐位体前屈</span><span class="v">{{sittingFlexion}}cm</span></div>
                            <div class="item f-cb"><span class="k">选择反应时</span><span class="v">{{selReactionTime}}s</span></div>
                            <div class="item f-cb"><span class="k">闭眼单脚站立</span><span class="v">{{EyeCloseStandTime}}s</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="g-body" v-show="mode==='body'">
            <BodyComposition :BodyComposition="BodyComposition" v-on:changeMode="changeMode"></BodyComposition>
        </div>

        <div class="g-bone" v-show="mode==='bone'">
            <BoneDensity :BoneDensity="BoneDensity" v-on:changeMode="changeMode"></BoneDensity>
        </div>

        <div class="g-cardiopulmonary" v-show="mode==='cardiopulmonary'">
            <CardiopulmonaryAbility :CardiopulmonaryAbility="CardiopulmonaryAbility" :result="result" v-on:changeMode="changeMode"></CardiopulmonaryAbility>
        </div>

        <div class="g-vascular" v-show="mode==='vascular'">
            <VascularFunction :VascularFunction="VascularFunction" :result="result" v-on:changeMode="changeMode"></VascularFunction>
        </div>

        <div class="g-total" v-show="mode==='total'">
            <TotalEvaluate :TotalEvaluate="TotalEvaluate" v-on:changeMode="changeMode"></TotalEvaluate>
        </div>

        <div class="g-summary" v-show="mode==='summary'">
            <SummaryEvaluate :result="result" v-on:changeMode="changeMode"></SummaryEvaluate>
        </div>

    </div>
</template>


<script>
    import _ from '../utils';
    import consts from '../utils/consts';
    import service from '../utils/service';
    import BodyComposition from '../components/bodyComposition';
    import BoneDensity from '../components/boneDensity';
    import CardiopulmonaryAbility from '../components/cardiopulmonaryAbility';
    import VascularFunction from '../components/vascularFunction';
    import TotalEvaluate from '../components/totalEvaluate';
    import SummaryEvaluate from '../components/summary';

    const dataArr = ['personalRank','sex','brithday','height','weight','vitalCapacity','grip','sittingFlexion','selReactionTime','EyeCloseStandTime']

    export default {
        data(){
            let obj = {
                mode:'national',
                age:undefined,
                rankPercent:undefined,
                result:{},
                BodyComposition:{},
                BoneDensity:{},
                CardiopulmonaryAbility:{},
                VascularFunction:{},
                TotalEvaluate:{}
            };
            dataArr.forEach(item => {
                obj[item] = undefined;
            })
            return obj;
        },
        created(){
            this.fetchQuery();
        },
        mounted(){

        },
        methods: {
            fetchQuery(){
                service.getQuery({
                    phoneorcard:18768177580
                }).then(result => {
                    this.result = result;
                    dataArr.forEach(item => {
                        this[item] = result[_.upperFirstLetter(item)];
                    })
                    this.age = _.ages(result.Brithday);
                    this.rankPercent = Math.floor(result.PersonalRank/result.ProvinceTotalNum*100);
                    this.BodyComposition = result.BodyComposition[0];
                    this.BoneDensity = result.BoneDensity[0];
                    this.CardiopulmonaryAbility = result.CardiopulmonaryAbility[0];
                    this.VascularFunction = result.VascularFunction[0];
                    this.TotalEvaluate = result.TotalEvaluate[0];
                })
            },
            changeMode(mode){
                this.mode = mode;
            }
        },
        components:{BodyComposition,BoneDensity,CardiopulmonaryAbility,VascularFunction,TotalEvaluate,SummaryEvaluate}
    }
</script>