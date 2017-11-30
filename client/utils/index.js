
function obj2query(data){
	let query = '';
	if( !data ) return query;
	for( let i in data ){
	  	query += `${i}=${encodeURIComponent(data[i])}&`
	}
	return query.replace(/&$/, '');
}

/**
 * 时期格式化
 */
let fmap = {
	yyyy(date){
		return date.getFullYear();
	},
	MM(date){
		return fix(date.getMonth() + 1);
	},
	dd(date){
		return fix(date.getDate());
	},
	HH(date){
		return fix(date.getHours());
	},
	mm(date){
		return fix(date.getMinutes());
	},
	ss(date){
		return fix(date.getSeconds());
	}
}
let trunk = new RegExp(Object.keys(fmap).join('|'),'g');
function fix(str){
  str = '' + (str || '');
  return str.length <= 1? '0' + str : str;
}
function format(value,format){
	format = format || 'yyyy-MM-dd HH:mm:ss';
	if(!value) return;
	value = new Date(value);
	return format.replace( trunk, (cap) => fmap[cap]? fmap[cap](value): '');
}

//计算年龄
function ages(str){   
	var   r   =   str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);     
	if(r==null)return   false;     
	var   d=   new   Date(r[1],   r[3]-1,   r[4]);     
	if   (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4])   
	{   
		var   Y   =   new   Date().getFullYear();
		return (Y-r[1]);
	}   
	return("输入的日期格式错误！");   
}

//首字母大写
function upperFirstLetter(str){
   return str.replace(/\b\w+\b/g, function(word) {   
	return word.substring(0,1).toUpperCase( ) +  word.substring(1);   
	});   
}

export default {
	obj2query,
	format,
	ages,
	upperFirstLetter
}
