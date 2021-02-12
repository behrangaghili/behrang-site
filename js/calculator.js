function changedata() {
    alert("data is changed ");
    document.getElementById('cal').innerHTML = " continue. it is getting fun";
    document.getElementById('cal').style.backgroundColor = "gray";
    document.getElementById('cal').style.fontSize = "50px";


}

function changestyle() {
    var element = document.getElementById('cal').style.backgroundColor;
    if (element == "gray") {
        document.getElementById('cal').style.backgroundColor = "black";
    }
}
//number keys opration
var input_key = 0;
var decimalp = 0;

function decimal() {
    if (decimalp == 0) {
        decimalp = 1;
    }
}

function clear() {
    input_key = 0;
    decimalp = 0;
    document.getElementById("result_dispaly").placeholder = "0";
    document.getElementById("result_dispaly").value = '';
}


function num_keys(val) {
    // console.log(val);
    // console.log(input_key);
    // console.log(decimalp);
    //input_key =decimalp==0?  input_key*10 +val:input_key + val/(10.0**decimalp++);
    if (decimalp == 0) {
        input_key = input_key * 10 + val;
    } else {
        input_key = input_key + val / (10.0 ** decimalp);
        decimalp++;
    }
    // console.log(input_key);
    // console.log(decimalp);
    document.getElementById("result_dispaly").value = parseFloat(input_key).toPrecision(10) + ""
}

//opration  keys opration  
var num1 = 0;
var num2 = "";
var sum_keys = "";

function opration_keys1() {
    var x = document.getElementById("result_dispaly").value;
    x = parseInt(x);
    num1 += x;
    document.getElementById("result_dispaly").placeholder = "+";
    document.getElementById("result_dispaly").value = '';
    alert(num1)


}
function test(){
    var y = document.getElementById("result_dispaly").value;
    if (isNaN(y))
    {
        alert("nan");
        clear();
    }
}