import fetch from './fetch';

const hostIp = 'http://124.207.124.238:8211/';
const mock = true;

export default {

	getQuery(data){
		if(mock){
			return new Promise((resolve, reject) => {
				resolve({
          "IsOk":"true",
          "Msg":"Ok",
          "UserName":"张三",
          "IDCard":"430682198812203665",
          "MobilePhone":"18888888888",
          "Phone":"666666666",
          "Height":"176",
          "Weight":"65",
          "PersonalRank":"14600",
          "ProvinceTotalNum":"550000",
          "Grip":"55.8",
          "SittingFlexion":"16.8",
          "SelReactionTime":"5",
          "EyeCloseStandTime":"12.66",
          "VitalCapacity":"2260",
          "Sex":"0",
          "Brithday":"1988-08-08",
          "BodyComposition":[{
            "Device":"MC180",
            "BodyFatRateScore":"21.5",
            "BodyFatRateAssess":"标准",
            "ShapeAssess":"标准",
            "TargetWeight":"68.5",
            "WeightControl":"-7.5",
            "FatControl":"-8.3",
            "MuscleControl":"10"
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
            "ABIRightAssess":"正常"
          }]
        });
			});
		}

		return fetch(hostIp + 'Test/GetReportData',{
      method:'GET',
      data:data
    });
	}

}
