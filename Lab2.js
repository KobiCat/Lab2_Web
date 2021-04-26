var op;
function func() {
    var result;
    var num = Number(document.getElementById("number").value);
    switch(op){
        case '+':
            result = num + 1;
            break;
        case '-':
            result = num - 1;
            break;
        default:
            result = 'Error! Choose plus or minus';
    }
    document.getElementById("result").innerHTML = result;
}