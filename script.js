var rnumber;
var rtries;
limit = 51;

function random()
{
	today = new Date();
	num = today.getTime();
	num = Math.round(Math.abs(Math.sin(num) *1000000 )) % limit;
	return num;
}
 function init(){
 	rnumber = random();
 	rtries = 0;
 	document.fgame.output.value='угадайчисло от 1 до ' + (limit-1) +'...';
 	document.fgame.tries.value=rtries;
 	document.fgame.highlow.value='';
 	document.fgame.input.value='';
 }

 function game(number) {
 	if (number==rnumber) {
		rtries++;
		document.fgame.output.value+'Вы догодались с' +rtries+'попытки!Это было'+rnumber+
		'!нажмите"старт,чтобы играть снова.';
		document.fgame.highlow.value='было такое';
	}
	else{
		rtries++
		document.fgame.output.value='не то,';
		document.fgame.highlow.value=(rnumber>number) ? 'больше': 'меньше';
	    document.fgame.tries.value=rtries;
    }
}


