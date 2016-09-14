var a,s;
a=0;
if (a>0) {
s=1;
}
else if (a<0) {
	s=2;
}
else {
	s=3;
}
console.log(s);

var b,c;
b=0;
switch (b>0) {
	case true:c=1;   
	break;
	case false:c=2;
	break;
	default:c=3;
	break;
}
console.log(c);

var x,y;
x=7;
y=3;
for(var i=0;i<78;i++) {
x=x+y;
}
console.log(x);