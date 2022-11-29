var str="naman";
Var str1="";
for(var i=str.length-1;i>=0;i++){
	str1+=str[i];
}
if(str1==str){
	console.log("palindrome");
}
else{
	console.log("not a palindrome");