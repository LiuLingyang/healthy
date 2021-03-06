import fetch from './fetch';

const mock = false;

export default {

	getQuery(data){
		if(mock){
			return new Promise((resolve, reject) => {
				resolve({
          "IsOK":"true",
          "Msg":"Ok",
          "UserName":"张三",
          "IDCard":"430682198812203665",
          "MobilePhone":"18888888888",
          "Phone":"666666666",
          "Height":"176",
          "Weight":"65",
          "PersonalRank":"14600",
          "ProvinceTotalNum":"55000",
          "Grip":"55.8",
          "SittingFlexion":"16.8",
          "SelReactionTime":"5",
          "EyeCloseStandTime":"12.66",
          "VitalCapacity":"2260",
          "Sex":"0",
          "Brithday":"1988-08-08",
          "GripAssess":'良好',
          "SittingFlexionAssess":'差',
          "SelReactionTimeAssess":'良好',
          "EyeCloseStandTimeAssess":'优秀',
          "VitalCapacityAssess":'中等',
          "TotalScore":'86',
          "TotalAssess":'良好',
          "StepIndex":"3",
          "StepIndexAssess":"良好",
          "LongJump":"1",
          "LongJumpAssess":"差",
          "Tennis":"1",
          "TennisAssess":"差",
          "Balance":"1",
          "BalanceAssess":"差",
          "ContinueJump":"1",
          "ContinueJumpAssess":"差",
          "StandJump":"1",
          "StandJumpAssess":"差",
          "PushUp":"1",
          "PushUpAssess":"差",
          "SitUp":"1",
          "SitUpAssess":"差",
          "HWAssess":"差",
          "BodyHeightAssess":"差",
          "BodyComposition":[{
            "Device":"MC180",
            "BodyFatRateScore":"21.5",
            "BodyFatRateAssess":"标准",
            "ShapeAssess":"标准",
            "TargetWeight":"68.5",
            "WeightControl":"-7.5",
            "FatControl":"-8.3",
            "MuscleControl":"10",
            "BMI":"10",
            "BMIAssess":"良好",
            "GutFat":"10",
            "GutFatAssess":"良好",
            "Whr":"10",
            "WhrAssess":"良好",
          }],
          "BoneDensity":[{
            "Device":"EXA3000",
            "TValue":"0.5",
            "FractureRisk":"骨质正常"
          }],
          "CardiopulmonaryAbility":[{
            "Device":"YMCA",
            "FCValue":"8.1",
            "Assess":"中等",
            "FCApprise":"您的心肺功能：中等，需要进一步提高心肺功能能力。"
          }],
          "VascularFunction":[{
            "Device":"vs-1000",
            "PWVLeftScore":"2.6",
            "PWVLeftAssess":"硬",
            "PWVRightScore":"3.2",
            "PWVRightAssess":"硬",
            "ABILeftScore":"0.9",
            "ABILeftAssess":"正常",
            "ABIRightScore":"1.3",
            "ABIRightAssess":"正常",
            "FLb_SBP":"123",
            "FLb_DBP":"124",
            "FRb_SBP":"125",
            "FRb_DBP":"126"
          }],
          "TotalEvaluate":[{
            "TotalAppraise":"综合评价综合评价综合评价综合评价综合评价综合评价",
            "ImportFocus":"重点关注重点关注重点关注重点关注重点关注重点关注",
          }]
        });
			});
		}

    let url = 'http://venues.zjtzjs.cn/ZJReport/GetReportData';
    if(data.name){
      url = 'http://venues.zjtzjs.cn/ZJReport/GetCitizenDataByName';
    }
		return fetch(url,{
      method:'GET',
      data:data
    });
	}

}
