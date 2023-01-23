var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
    var result=JSON.parse(request.response);
    for (let i=0; i<result.length ; i++){
        console.log(result[i].flag);
        console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population);

    }

}

// How to compare two JSON have the same properties without order

let obj1={ name='Person1', age=5};
let obj2={ age=5 , name='Person1'};
var assume=true;

for(var i in Object.keys(assume)){
    if(a[i]!=b[i]){
        assume = false;
    }
}
if(assume){
    console.log("properties are same");
}else{
     console.log("properties are not same");
}
