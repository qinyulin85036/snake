var removeEle = function(ele){
   
    //es5
    var len = ele.childNodes.length;
    for(var i = 0;i < len;i++){
        var child = ele.childNodes[0];
        if(child){
            child.remove();
        }
                   
    }

    //es6
    ele.childNodes.forEach(element => {
        // delete element;
        // if(element && element.nodeType == "1"){
        //     ele.removeChild(element);
        // }
    });
}

var getEleById = function(str){
    if(document.getElementById(str)){
        return document.getElementById(str);
    }
    else
    {
        return false;
    }
}

var getInt = function(min,max){
    var num = Math.floor(Math.random() * max);
    num = (num > max || num < min) ? getInt(min,max) : num;
    return num;
}

var compareArray = function(arr1,arr2){
    var str1 = JSON.stringify(arr1);
    var str2 = JSON.stringify(arr2);
    if(str1 == str2){
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = {removeEle:removeEle,getInt:getInt,getEleById:getEleById,compareArray:compareArray}