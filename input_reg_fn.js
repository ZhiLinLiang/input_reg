/*
*表单验证--屏蔽主键，只允许输入数字
*/
//禁止中英文输入&&基于JQ
//兼容IE9+，Firefox 55.0.3，Safari 5.1.7，Chrome  60.0.3
function GetInput(e) { //屏蔽非数字和非退格符
	var k = window.event ? e.keyCode: e.which; 
	if ((k <= 57 && k >= 48) || (k <= 105 && k >= 96) || (k == 8)) {//48-57是大键盘的数字键，96-105是小键盘的数字键，8是退格符←
		return true;
	} else {
		return false;
	}
}
function checkStr(obj) {
	var target = $.trim($(obj).val());
	if ((escape(target).indexOf("%u") > ( - 1)) || (target.match(/\D/) != null)) {
		alert("这里不能输入中文/全角字符/英文/半角字符");
		$(obj).val("").focus();
	}
}
function Set(obj) {
	//即时处理输入框的内容.
}
