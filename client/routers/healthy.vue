<template>
    <div class="g-mn">
        
        <div class="g-index">
            <div class="m-national">
                <p class="rank"><span>{{personalRank}}</span>名</p>
                <p class="pro">全省排名</p>
                <div class="img">
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
                </div>
            </div>

            <div class="m-national-list">
                <div class="item f-cb">
                    <div class="img"><img src="../assets/img/body.png"></div>
                    <div class="wrd">体成分（{{BodyComposition.BodyFatRateScore}}）</div>
                    <div class="u-btn u-btn-1">{{BodyComposition.BodyFatRateAssess}}</div>
                    <div class="arrow"></div>
                </div>
                <div class="item f-cb">
                    <div class="img"><img src="../assets/img/bone.png"></div>
                    <div class="wrd">骨密度（{{BoneDensity.TValue}}）</div>
                    <div class="u-btn u-btn-1">{{BoneDensity.FractureRisk}}</div>
                    <div class="arrow"></div>
                </div>
                <div class="item f-cb">
                    <div class="img"><img src="../assets/img/cardiopulmonary.png"></div>
                    <div class="wrd">心肺功能（{{CardiopulmonaryAbility.FCValue}}）</div>
                    <div class="u-btn u-btn-1">{{CardiopulmonaryAbility.Assess}}</div>
                    <div class="arrow"></div>
                </div>
                <div class="item f-cb">
                    <div class="img"><img src="../assets/img/vascular.png"></div>
                    <div class="wrd">血管机能（{{VascularFunction.ABILeftScore}}~{{VascularFunction.ABIRightScore}}）</div>
                    <div class="u-btn u-btn-1">{{VascularFunction.ABILeftAssess}}</div>
                    <div class="arrow"></div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    import _ from '../utils';
    import consts from '../utils/consts';
    import service from '../utils/service';

    const dataArr = ['personalRank','sex','brithday','height','weight','vitalCapacity','grip','sittingFlexion','selReactionTime','EyeCloseStandTime']

    export default {
        data(){
            let obj = {
                mode:'index',
                age:undefined,
                BodyComposition:{},
                BoneDensity:{},
                CardiopulmonaryAbility:{},
                VascularFunction:{}
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
                    dataArr.forEach(item => {
                        this[item] = result[_.upperFirstLetter(item)];
                    })
                    this.age = _.ages(result.Brithday);
                    this.BodyComposition = result.BodyComposition[0];
                    this.BoneDensity = result.BoneDensity[0];
                    this.CardiopulmonaryAbility = result.CardiopulmonaryAbility[0];
                    this.VascularFunction = result.VascularFunction[0];
                })
            }
        }
    }
</script>