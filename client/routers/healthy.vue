<template>
    <div class="g-mn">
        
        <div class="g-national" v-show="mode==='national'">
            <div class="m-hd">
                国民体质评定报告
            </div>
            <div class="m-national">
                <p class="rank" v-if="rankPercent">您超过本省{{rankPercent}}%的人</p>
                <div class="img" @click="changeMode('summary')">
                    <div class="tip">点击图片查看评价</div>
                    <img v-if="age>2&&age<7&&sex==0" src="../assets/img/3-6-0.png"/>
                    <img v-if="age>2&&age<7&&sex==1" src="../assets/img/3-6-1.png"/>
                    <img v-if="age>19&&age<40&&sex==0" src="../assets/img/20-39-0.png"/>
                    <img v-if="age>19&&age<40&&sex==1" src="../assets/img/20-39-1.png"/>
                    <img v-if="age>39&&age<60&&sex==0" src="../assets/img/40-59-0.png"/>
                    <img v-if="age>39&&age<60&&sex==1" src="../assets/img/40-59-1.png"/>
                    <img v-if="age>59&&age<70&&sex==0" src="../assets/img/60-69-0.png"/>
                    <img v-if="age>59&&age<70&&sex==1" src="../assets/img/60-69-1.png"/>

                    <div class="blk blk-1">
                        <p v-if="!!height">身高：{{height}}cm</p>
                        <p v-if="!!weight">体重：{{weight}}kg</p>
                    </div>
                    <div class="blk blk-2">
                        <p v-if="!!vitalCapacity">肺活量：{{vitalCapacity}}ml</p>
                        <p v-if="!!result.StepIndex">台阶指数：{{result.StepIndex}}</p>
                        <p v-if="!!result.LongJump">立定跳远：{{result.LongJump}}m</p>
                        <p v-if="!!result.Tennis">网球掷远：{{result.Tennis}}m</p>
                        <p v-if="!!result.TripRun">10米折返跑：{{result.TripRun}}s</p>
                        <p v-if="!!result.Balance">走平衡木：{{result.Balance}}</p>
                        <p v-if="!!result.ContinueJump">双脚连续跳：{{result.ContinueJump}}</p>
                        <p v-if="!!result.StandJump">纵跳：{{result.StandJump}}</p>
                        <p v-if="!!result.PushUp">俯卧撑：{{result.PushUp}}</p>
                        <p v-if="!!result.SitUp">一分钟仰卧起坐：{{result.SitUp}}</p>
                    </div>
                    <div class="blk blk-3">
                        <p v-if="!!grip">握力：{{grip}}kg</p>
                        <p v-if="!!sittingFlexion">坐位体前屈：{{sittingFlexion}}cm</p>
                        <p v-if="!!selReactionTime">选择反应时：{{selReactionTime}}s</p>
                        <p v-if="!!EyeCloseStandTime">闭眼单脚站立：{{EyeCloseStandTime}}s</p>
                    </div>
                    <!--div class="line line-1"></div-->
                </div>
            </div>
            <div class="m-national-list">
                <div class="item f-cb" v-if="!!BodyComposition" @click="changeMode('body')">
                    <div class="img"><img src="../assets/img/body.png"></div>
                    <div class="wrd">体成分（{{BodyComposition.BodyFatRateScore}}）</div>
                    <div class="u-btn u-btn-1">{{BodyComposition.BodyFatRateAssess}}</div>
                    <div class="arrow"></div>
                </div>
                <div class="item f-cb" v-if="!!BoneDensity" @click="changeMode('bone')">
                    <div class="img"><img src="../assets/img/bone.png"></div>
                    <div class="wrd">骨密度（{{BoneDensity.TValue}}）</div>
                    <div class="u-btn u-btn-1">{{BoneDensity.FractureRisk}}</div>
                    <div class="arrow"></div>
                </div>
                <div class="item f-cb" v-if="!!CardiopulmonaryAbility" @click="changeMode('cardiopulmonary')">
                    <div class="img"><img src="../assets/img/cardiopulmonary.png"></div>
                    <div class="wrd">心肺功能（{{CardiopulmonaryAbility.FCValue}}）</div>
                    <div class="u-btn u-btn-1">{{CardiopulmonaryAbility.Assess}}</div>
                    <div class="arrow"></div>
                </div>
                <div class="item f-cb" v-if="!!VascularFunction" @click="changeMode('vascular')">
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

        <div class="g-body" v-if="!!BodyComposition" v-show="mode==='body'">
            <BodyComposition :BodyComposition="BodyComposition" v-on:changeMode="changeMode"></BodyComposition>
        </div>

        <div class="g-bone" v-if="!!BoneDensity" v-show="mode==='bone'">
            <BoneDensity :BoneDensity="BoneDensity" v-on:changeMode="changeMode"></BoneDensity>
        </div>

        <div class="g-cardiopulmonary" v-if="!!CardiopulmonaryAbility" v-show="mode==='cardiopulmonary'">
            <CardiopulmonaryAbility :CardiopulmonaryAbility="CardiopulmonaryAbility" :result="result" v-on:changeMode="changeMode"></CardiopulmonaryAbility>
        </div>

        <div class="g-vascular" v-if="!!VascularFunction" v-show="mode==='vascular'">
            <VascularFunction :VascularFunction="VascularFunction" :result="result" v-on:changeMode="changeMode"></VascularFunction>
        </div>

        <div class="g-total" v-if="!!TotalEvaluate" v-show="mode==='total'">
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
                    phoneorcard:localStorage.phoneorcard
                }).then(result => {
                    console.log(result)
                    this.result = result;
                    dataArr.forEach(item => {
                        this[item] = result[_.upperFirstLetter(item)];
                    })
                    this.age = _.ages(result.Brithday);
                    this.rankPercent = result.PersonalRank && Math.floor(result.PersonalRank/result.ProvinceTotalNum*100);
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