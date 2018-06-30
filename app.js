document.addEventListener('keydown',function(event){
console.log(event);
var shiftcode,CtrlCode,AltCode;
shiftcode=(event.shiftKey)? "Yes":"No";
CtrlCode=(event.ctrlKey)? "Yes":"No";
AltCode=(event.altKey)? "Yes":"No";
document.body.innerHTML=`
<div style="font-family:sans-serif; font-size:50px;">KeyCode: ${event.which}</div>
<hr>
<br>

Key=> ${event.key}
<br>
CtrlPress=> ${CtrlCode}
<br>
ShiftPress=> ${shiftcode}
<br>
AltPress=> ${AltCode}
`;

});