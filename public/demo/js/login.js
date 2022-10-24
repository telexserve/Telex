function required()
{
var empt = document.forms["login"]["i1"]["i2"].value;
if (empt == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}