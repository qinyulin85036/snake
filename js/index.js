var outLine = require("./outline.js");
var block = require("./block.js");
var Snake = require("./snake.js");
var public = require("./public/publicEle.js")

var stateInit = {
    lineOption : {
        cellX : 300,
        cellY : 300,
        backgroundColor : "blanchedalmond",
        borderColor : "1px solid black"
    },
    foodOption : {
        backgroundColor : "black",
        left : public.getInt(0,60) * 10 + "px",
        top : public.getInt(0,60) * 10 + "px",
    },
    direction : "right",
    speed:150,
    
};

(function(state,window){
    document.addEventListener("keydown",function(e){
        switch(e.keyCode){
            case 87:{state.direction = "up";break;}
            case 68:{state.direction = "right";break;}
            case 83:{state.direction = "down";break;}
            case 65:{state.direction = "left";break;}
            default:{break}
        }
    })
    var outline = new outLine.lineObject(state.lineOption);
    var food = new block.blockObject(state.foodOption);
    var snake = new Snake.Snake({});
    var init = function(){
        state.direction = "right";
        outline.createLine();
        food.createBlock();
        snake.initSnake();
        snake.createSnake();
        
    };
    
    var jsq = function(){
        var jishiqi = setInterval(()=>{
            /**判断是否吃到食物 */
            let foodArr = food.getFoodPos();
            let snakeArr = [snake.getSnake()[0][1][0]*10,snake.getSnake()[0][1][1]*10];
            if(public.compareArray(foodArr,snakeArr)){
                snake.addSnake();
                food.changeBlock()
            }

            //蛇的移动
            snake.moveSnake(state.direction);

            /*判断结束，然后在重新开始*/
            var over = snake.checkOver();
            if(over)
            {
                console.log("over")
                clearInterval(jishiqi);
                setTimeout(()=>{
                    if(state.speed<30){
                        state.speed -= 40;
                    }
                    init();
                    jsq();
                },3000)
            }
        },state.speed);
        return jishiqi;
    }
    init();
    jsq();
    
    // var jishiqi = setInterval(function(){
    //     snake.moveSnake(state.direction);
    //     let foodArr = food.getFoodPos();
    //     let snakeArr = [snake.getSnake()[0][1][0]*10,snake.getSnake()[0][1][1]*10];
    //     if(public.compareArray(foodArr,snakeArr)){
    //         snake.addSnake();
    //         food.changeBlock()
    //     }

    //     var over = snake.checkOver();
    //     if(over)
    //     {
    //         console.log("over")
    //         clearInterval(jishiqi);
    //         mapInit();
    //     }
    // },200)
    
})(stateInit,window)







