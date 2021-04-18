menu=[]
function send(){
    item=document.getElementById("input").value
    menu.push(item)
    document.getElementById("input").value=""
    document.getElementById("output").value=menu
}