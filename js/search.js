function rel() {
    var i_text = document.getElementById("i_text").value;
    var i_search = document.getElementById("i_search").value;
    var t = i_text.replace(i_search, "");
    var h = i_text.search(i_search);
    alert(t);
    document.getElementById("show_num").innerHTML = t;
}

/*function w_search() {
    var i_text = document.getElementById("i_text").value;
    var i_search = document.getElementById("i_search").value;
    var i = -1;
    var m = 0;
    var x = i_text.search(i_search);
    //alert(i_search);
    //document.getElementById("show_num").innerHTML = x
    while (i < x) {
        m++ ;
        var t = i_text.replace(i_search , "");
        alert(t);
        t += t;
        var x = i_text.search(i_search);
        }
        document.getElementById("show_num").innerHTML = m; 

    }*/
function w_search() {
    var i_text = document.getElementById("i_text").value;

    var i_search = document.getElementById("i_search").value;


    if (!(i_text && i_search)) {
        document.getElementById("show_num").innerHTML = "Fill both text boxes"
    } else {
        var m = 0;
        var p = 0;
        while (true) {
            p = i_text.indexOf(i_search, p);
            //alert(p);
            if (p >= 0) {
                m++;
                p+=i_search.length;
            } else
                break;
        }
        document.getElementById("show_num").innerHTML = m;
    }
    //alert(m);
}