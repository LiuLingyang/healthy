<template>
    <div class="g-mn">

        <div class="g-national" v-show="mode==='national'">
            <div class="m-hd" v-if="!!phoneorcard">
                <div class="back" @click="loginout"><div class="arrow"></div><span class="wrd">登出</span></div>
                国民体质评定报告
            </div>
            <div class="m-hd" v-if="!!name">
                <div class="back" @click="loginout"><div class="arrow"></div><span class="wrd">登出</span></div>
                公民体质评定报告
            </div>
            <div class="m-national">
                <p class="rank" v-if="rankPercent">您超过本省{{rankPercent}}%的人</p>
                <div class="img" @click="changeMode('summary')">
                    <img v-if="age>2&&age<7&&result.Sex==0" src="../assets/img/3-6-0.png"/>
                    <img v-if="age>2&&age<7&&result.Sex==1" src="../assets/img/3-6-1.png"/>
                    <img v-if="age>19&&age<40&&result.Sex==0" src="../assets/img/20-39-0.png"/>
                    <img v-if="age>19&&age<40&&result.Sex==1" src="../assets/img/20-39-1.png"/>
                    <img v-if="age>39&&age<60&&result.Sex==0" src="../assets/img/40-59-0.png"/>
                    <img v-if="age>39&&age<60&&result.Sex==1" src="../assets/img/40-59-1.png"/>
                    <img v-if="age>59&&age<70&&result.Sex==0" src="../assets/img/60-69-0.png"/>
                    <img v-if="age>59&&age<70&&result.Sex==1" src="../assets/img/60-69-1.png"/>

                    <div class="blk blk-1">
                        <p v-if="!!result.Height">身高：{{result.Height}}cm</p>
                        <p v-if="!!result.Weight">体重：{{result.Weight}}kg</p>
                    </div>
                    <div class="blk blk-2">
                        <p v-if="!!result.VitalCapacity">肺活量：{{result.VitalCapacity}}ml</p>
                        <p v-if="!!result.StepIndex">台阶指数：{{result.StepIndex}}次</p>
                        <p v-if="!!result.LongJump">立定跳远：{{result.LongJump}}cm</p>
                        <p v-if="!!result.Tennis">网球掷远：{{result.Tennis}}m</p>
                        <p v-if="!!result.TripRun">10米折返跑：{{result.TripRun}}s</p>
                        <p v-if="!!result.Balance">走平衡木：{{result.Balance}}s</p>
                        <p v-if="!!result.ContinueJump">双脚连续跳：{{result.ContinueJump}}s</p>
                        <p v-if="!!result.StandJump">纵跳：{{result.StandJump}}cm</p>
                        <p v-if="!!result.PushUp">俯卧撑：{{result.PushUp}}次</p>
                        <p v-if="!!result.SitUp">一分钟仰卧起坐：{{result.SitUp}}次</p>
                        <p v-if="!!result.F1500Run">1500米跑：{{result.F1500Run}}分</p>
                        <p v-if="!!result.F800Run">800米跑：{{result.F800Run}}分</p>
                        <p v-if="!!result.F2MinTiaoSheng">2分钟跳绳：{{result.F2MinTiaoSheng}}次</p>
                        <p v-if="!!result.FSanDianYiDong">三点移动：{{result.FSanDianYiDong}}s</p>
                        <p v-if="!!result.FXiangXianTiao">象限跳：{{result.FXiangXianTiao}}s</p>
                        <p v-if="!!result.F3000Walk">3000米健身走：{{result.F3000Walk}}分</p>
                        <p v-if="!!result.FLiangDianCeHua">两点侧滑：{{result.FLiangDianCeHua}}s</p>
                        <p v-if="!!result.FRaoGanPao">绕杆跑：{{result.FRaoGanPao}}s</p>
                        <p v-if="!!result.FYaoWei">腰围：{{result.FYaoWei}}cm</p>
                    </div>
                    <div class="blk blk-3">
                        <p v-if="!!result.Grip">握力：{{result.Grip}}kg</p>
                        <p v-if="!!result.SittingFlexion">坐位体前屈：{{result.SittingFlexion}}cm</p>
                        <p v-if="!!result.SelReactionTime">选择反应时：{{result.SelReactionTime}}s</p>
                        <p v-if="!!result.EyeCloseStandTime">闭眼单脚站立：{{result.EyeCloseStandTime}}s</p>
                    </div>
                    <!--div class="line line-1"></div-->
                </div>
                <div class="tip" v-if="!!phoneorcard">点击图片查看评价</div>
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
                <div class="item f-cb" v-if="!!TotalEvaluate" @click="changeMode('total')">
                    <div class="img"><img src="../assets/img/total.png"></div>
                    <div class="wrd">综合评价</div>
                    <div class="arrow"></div>
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

    export default {
        data(){
            return {
                mode:'national',
                age:undefined,
                rankPercent:undefined,
                result:{},
                BodyComposition:undefined,
                BoneDensity:undefined,
                CardiopulmonaryAbility:undefined,
                VascularFunction:undefined,
                TotalEvaluate:undefined,
                phoneorcard:undefined,
                name:undefined,
                birth:undefined
            }
        },
        created(){
            this.phoneorcard = this.$route.params.phoneorcard;
            this.name = this.$route.params.name;
            this.birth = this.$route.params.birth;
            this.fetchQuery();
        },
        mounted(){

        },
        methods: {
            fetchQuery(){
                service.getQuery({
                    phoneorcard:this.phoneorcard,
                    name:this.name,
                    brith:this.birth
                }).then(result => {
                    //公民数据格式转换
                    if(this.name){
                        let transformMap = {
                            Height:'FShenGao',
                            Weight:'FTiChong',
                            VitalCapacity:'FFeiHuoLiang',
                            TripRun:'F10Run',
                            LongJump:'FLiDingTiaoYuan',
                            Tennis:'FWangQiuZhiYuan',
                            ContinueJump:'FShuangJiaoLianXuTiao',
                            Balance:'FZouPingHengMu',
                            SittingFlexion:'FZuoWeiTiQianQu',
                            PushUp:'FFuWoCheng',
                            SitUp:'FYangWoQiZuo',
                            Grip:'FWoLi',
                            SelReactionTime:'FXuanZeFanYingShi',
                            EyeCloseStandTime:'FBiYanDanJiaoZhanLi',
                            TotalScore:'FZongHePingFen_df',
                            TotalAssess:'FZongHePingFen_pj'
                        }
                        for(var key in transformMap){
                            result[key] = result[transformMap[key]];
                        }
                        result.TotalEvaluate = [{
                            TotalAppraise:result['FColligateAppraise'],
                            ImportFocus:result['FMainAttention']
                        }]
                    }
                    this.result = result;
                    this.age = _.ages(result.Brithday);
                    this.rankPercent = result.PersonalRank && Math.floor((1-result.PersonalRank/result.ProvinceTotalNum)*100);
                    this.BodyComposition = result.BodyComposition && result.BodyComposition[0];
                    this.BoneDensity = result.BoneDensity && result.BoneDensity[0];
                    this.CardiopulmonaryAbility = result.CardiopulmonaryAbility && result.CardiopulmonaryAbility[0];
                    this.VascularFunction = result.VascularFunction && result.VascularFunction[0];
                    this.TotalEvaluate = result.TotalEvaluate && result.TotalEvaluate[0];
                }).catch(err => {
                    alert('没有查询到您的报告');
                });
            },
            changeMode(mode){
                this.mode = mode;
            },
            loginout(){
                if(this.phoneorcard){
                    if(localStorage && !!localStorage.phoneorcard){
                        localStorage.removeItem('phoneorcard');
                    }
                    this.$router.push({ name: 'login'});
                }else{
                    this.$router.push({ name: 'login2'});
                }
            }
        },
        components:{BodyComposition,BoneDensity,CardiopulmonaryAbility,VascularFunction,TotalEvaluate,SummaryEvaluate}
    }
</script>