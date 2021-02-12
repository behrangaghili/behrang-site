var d = Date();
function converted_date(){
    var m =parseInt(document.getElementById("date_months").value)+1;
    var c_date = document.getElementById("date_years").value + "-" + m + "-" + document.getElementById("date_days").value;
    alert(c_date);
    var d = new Date(c_date).toLocaleDateString('fa-IR');
    document.getElementById("m_date_result").value ="روز درخواستی به تاریخ شمسی " + d + " می باشد";

}









function find_date(){
    var d = Date();
    document.getElementById("write_date").value = "Today is "+ d +"life is too short ";
}
function find_date_short(){
    var d = new Date();
    d = d.toDateString();
    document.getElementById("write_date").value = d ;
}
function find_day_week(){
    var d = new Date();
    var t = new Date();
    d = d.getDay();
    parseInt(d);
    //alert(d);
    if (d == 0){
        d = "Today is sunday";
    } 
    if(d == 1){
        d = "Today is moday";    
    }
    if(d == 2){
        d = "Today is tusday";    
    }
    if(d == 3){
        d = "Today is wensday";    
    }
    if(d == 4){
        d = "Today is tursday";    
    }
    if(d == 5){
        d = "Today is friday";    
    }
    if(d == 6){
        d = "Today is saturday";    
    }
       
        document.getElementById("write_date").value = d +"        "+ "Current time is " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() ;
    }


function find_year(){
    var d = new Date();
    document.getElementById("write_year").value = d.getFullYear();
}