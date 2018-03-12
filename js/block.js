var public = require("./public/publicEle.js")
function Block(option){
    this.width = "10px";
    this.height = "10px";
    this.backgroundColor = option.backgroundColor;
    this.x = public.getInt(0,60);
    this.y = public.getInt(0,60);
    this.left = this.x * 10 + "px";
    this.top = this.y * 10 + "px";
    
    
}

Block.prototype = {
    createBlock : function(){
        var block = document.getElementById("foodDiv");
        public.removeEle(block);
        var div = document.createElement("div");
        div.style.backgroundColor = this.backgroundColor;
        div.style.position = "absolute";
        div.style.width = this.width;
        div.style.height = this.height;
        div.style.left = this.left;
        div.style.top = this.top;
        div.setAttribute("id","food");
        block.appendChild(div);
    },
    changeBlock : function(){
        var food = document.getElementById("food");
        if(food != null || food != undefined){//如果food不为空，就只改变他的坐标位置
            food.style.left = public.getInt(0,60) * 10 + "px";;
            food.style.top = public.getInt(0,60) * 10 + "px";
        }
    },
    getFoodPos : function(){
        var food = public.getEleById("food");
        // console.log(food)
        if(food){
            return [Math.floor(food.style.left.split("px")[0]),Math.floor(food.style.top.split("px")[0])];
        }
        
    }
}


module.exports = {blockObject : Block}
