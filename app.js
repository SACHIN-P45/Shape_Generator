let button=document.getElementById("button");
var numberInShape=1;
var oldValue=0;
button.onclick=()=>{
    let n=document.getElementById("number").value;
    const circle=document.getElementById("circle");
    const square=document.getElementById("square");
    const rectangle=document.getElementById("rect");
    const color=document.getElementById("color").value;
    const width=document.getElementById("width").value;
    const height=document.getElementById("height").value;
    const box=document.getElementById("box");

n=Number(n)+Number(oldValue);
for(let i=numberInShape;i<=n;i++)
{
    let shape=document.createElement("div");
    shape.innerHTML+=numberInShape;
    if(circle.checked)
    {
        shape.classList.add("circle");
        shape.style.width=width+"px";
        shape.style.height=height+"px";
        shape.style.backgroundColor=color;
    }
    else if(square.checked)
    {
        shape.classList.add("square");
        shape.style.backgroundColor=color;
        shape.style.width=width+"px";
        shape.style.height=height+"px";
    }
    else if(rectangle.checked)
    {
        shape.classList.add("rectangle");
        shape.style.backgroundColor=color;
        shape.style.width=width+"px";
        shape.style.height=height+"px";
    }
    else{
        document.writeln("Invalid Input")
    }

    numberInShape++;
    box.appendChild(shape);
    oldValue=document.getElementById("box").lastElementChild.innerHTML;
}
};