var color=new Array(26);
color[0]="aqua";
color[1]="#eeeeee";
color[2]="#99CCFF";
color[3]="lavender";
color[4]="pink";
color[5]="#669999";
color[6]="fuchsia";
color[7]="teal";
color[8]="#ffe8d6";
color[9]="#9bf6ff";
color[10]="#e6ccb2";
color[11]="#95d5b2";
color[12]="#bee3db";
color[13]="#ffff3f";
color[14]="#e0aaff";
color[15]="#9ef01a";
color[16]="#f0efeb";
color[17]="#ff99ac";
color[18]="#57cc99";
color[19]="#735d78";
color[20]="#ff4d6d";
color[21]="#e1e5f2";
color[22]="#df7373";
color[23]="#06d6a0";
color[24]="#2b2d42";
color[25]="#223843";
color[26]="#33658a";

function changeColor()
{
var ranNum= Math.floor(Math.random()*26);
document.getElementById('color-random').style.backgroundColor=color[ranNum];
}




// function changeColor()
//  {
// 	document.getElementById('color-random').style.backgroundImage= "url('https://picsum.photos/seed/picsum/200/300')".backgroundRepeat="none";
// 	document.getElementById('color-random').style.backgroundRepeat = "none";
// }



