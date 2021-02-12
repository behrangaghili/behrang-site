var d_m = Date();
var d_f = new Date().toLocaleDateString('fa-IR');
/*function ConvertNumberToPersion(a) {
    persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
    function traverse(el) {
        if (el.nodeType == 3) {
            var list = el.data.match(/[0-9]/g);
            if (list != null && list.length != 0) {
                for (var i = 0; i < list.length; i++)
                    el.data = el.data.replace(list[i], persian[list[i]]);
            }
        }
        for (var i = 0; i < el.childNodes.length; i++) {
            traverse(el.childNodes[i]);
        }
    }
    return a;
}*/


function j_converted_date() {
    var m = parseInt(document.getElementById("date_months").value) + 1;
    var c_date = document.getElementById("date_years").value + "-" + m + "-" + document.getElementById("date_days").value;
    //alert(c_date);
    var d_m = new Date();
    var d_j = new Date(c_date);
    var Difference_In_Time = d_m.getTime() - d_j.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    Difference_In_Days = Math.round(Difference_In_Days);
    //Difference_In_Days = ConvertNumberToPersion(Difference_In_Days);
    var d_f = new Date(c_date).toLocaleDateString('fa-IR');
    document.getElementById("m_date_result").value = "روز درخواستی   " + d_f + "  و  " + "اختلاف روز   " + Difference_In_Days;

}
function m_converted_date() {
    var d_f = new Date().toLocaleDateString('fa-IR');
    alert(d_f);
    var m = document.getElementById("date_months").value
    var m = parseInt(document.getElementById("date_months").value) + 1;
    var c_date = document.getElementById("date_years").value + "-" + m + "-" + document.getElementById("date_days").value;
    var d_m = new Date().toLocaleDateString('fa-IR');
    var d_j = new Date(c_date);
    var Difference_In_Time = d_m.getTime() - d_j.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    Difference_In_Days = Math.round(Difference_In_Days);
    //Difference_In_Days = ConvertNumberToPersion(Difference_In_Days);
    var d_f = new Date(c_date).toLocaleDateString('fa-IR');
    document.getElementById("j_date_result").value = "روز درخواستی   " + d_f + "  و  " + "اختلاف روز   " + Difference_In_Days;

}








function find_date() {
    var d = Date();
    document.getElementById("write_date").innerHTML = "Today is " + d + "life is too short ";

}

function find_date_short() {
    var d = new Date();
    d = d.toDateString();
    document.getElementById("write_date").value = d;
}

function find_year() {
    var d = new Date();
    document.getElementById("write_year").value = d.getFullYear();
} 

function find_day_week() {
    var d = new Date();
    var t = new Date();
    d = d.getDay();
    parseInt(d);
    //alert(d);
    if (d == 0) {
        d = "Today is sunday";
    }
    if (d == 1) {
        d = "Today is moday";
    }
    if (d == 2) {
        d = "Today is tusday";
    }
    if (d == 3) {
        d = "Today is wensday";
    }
    if (d == 4) {
        d = "Today is tursday";
    }
    if (d == 5) {
        d = "Today is friday";
    }
    if (d == 6) {
        d = "Today is saturday";
    }

    document.getElementById("write_date").value = d + "        " + "Current time is " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
}