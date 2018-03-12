function OutLine(option){
    this.cellX = option.cellX;
    this.cellY = option.cellY;
    this.width = 2;
    this.height = 2;
    this.backgroundColor = option.backgroundColor;
    this.borderColor = option.borderColor;

}
OutLine.prototype = {
    createLine : function(){
        let div = document.createElement("div");
        div.style.backgroundColor = this.backgroundColor;
        div.style.borderColor = this.borderColor;
        div.style.width = this.cellX * this.width + "px";
        div.style.height = this.cellY * this.height + "px";
        div.className = "outline";        
        document.getElementById("outline").insertBefore(div,document.getElementById("outline").firstChild);
    }
}




module.exports = {lineObject:OutLine}