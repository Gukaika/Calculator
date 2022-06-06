const display = document.getElementById("display");

function Clear() {
    display.value = "";
}
function Calculate() {
    try{
    display.value = eval(display.value);
    }
    catch(err){
        alert("invalid");
    }    
}
function press(x) {
    display.value += x;
}
function del() {
    display.value = display.value.slice(0, -1);
}        


