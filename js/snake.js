var public = require("./public/publicEle.js")
function Snake(option){
    this.width = 10;
    this.height = 10;
    // this.arrSnake = [["head",[5,5]],["body",[4,5]],["body",[3,5]]];
    this.arrSnake;
}

Snake.prototype = {
    initSnake : function(){
        this.arrSnake = [["head",[5,5]],["body",[4,5]],["body",[3,5]]];
    },
    createSnake : function(){
        var snakeDiv = document.getElementById("snake");
        public.removeEle(snakeDiv);
        this.arrSnake.forEach(snake => {
            var div = document.createElement("div");
            div.classList.add(snake[0]=="head"?"head" : "body");
            div.style.left = snake[1][0] * 10 + "px";
            div.style.top = snake[1][1] * 10 + "px";
            snakeDiv.appendChild(div);
        });
    },
    moveSnake : function(direction){
        let len = this.arrSnake.length;
        for(let i = len - 1;i>0;i--){
            this.arrSnake[i][1][0] = this.arrSnake[i-1][1][0];
            this.arrSnake[i][1][1] = this.arrSnake[i-1][1][1];
        }
        switch(direction){
            case "right":{
                this.arrSnake[0][1][0] += 1;
                break;
            }
            case "down":{
                this.arrSnake[0][1][1] += 1;
                break;
            }
            case "left":{
                this.arrSnake[0][1][0] -= 1;
                break;
            }
            default:{
                this.arrSnake[0][1][1] -= 1;
                break;
            }
        }
        this.fillSnake();
    },
    fillSnake:function(){
        let sArr = this.arrSnake;
        let nArr = public.getEleById("snake").childNodes;
        let len = sArr.length;
        if(len == nArr.length){
            for(let i = 0;i<len;i++){
                nArr[i].style.left = sArr[i][1][0] * 10 + "px";
                nArr[i].style.top = sArr[i][1][1] * 10 + "px";
            }
        }
    },
    addSnake:function(){
        this.arrSnake.push(["body",[null,null]]);
        this.createSnake();
    },
    checkOver:function(){
        if(this.arrSnake[0][1][0]<0 || this.arrSnake[0][1][0]>=60 || this.arrSnake[0][1][1]<0 || this.arrSnake[0][1][1]>=60){
            return true;
        }
        else
        {
            return false;
        }
    },
    getSnake:function(){
        return this.arrSnake;
    }
}

module.exports = {Snake : Snake}