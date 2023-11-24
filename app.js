function calCue(click){
    let inp = document.getElementById("input").value += click;
    // console.log(inp);
}
function equal(){
    let result = document.getElementById("input");
    result.value = eval(result.value);
}
function deletAll() {
    document.getElementById("input").value = '';
}
function delet() {
    let a = document.getElementById("input");
    let b = a.value ;
    if(b.length > 0){
        let res = b.slice(0,-1);
        a.value = res;
    }
    // let b = a.value;
    // if (b.length > 0) {
    //     let res = b.slice(0, -1);
    //     a.value = res;
    // }
}