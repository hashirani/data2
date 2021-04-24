


//var colors =  [1,2,4,5,6,7,8];


function adddiv(){
    var n=5;
 
for(var i=0;i<n;i++){

    var div = document.createElement('div');
    console.log(div)
    
    document.getElementById('holder').appendChild(div);
}
}
adddiv()