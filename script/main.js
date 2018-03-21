function checkDaysLeft(){
    //gets days left from borrowed table and changes backgound color of row accordingly
    let rows = document.getElementsByTagName("tr").length - 1;
    //console.log(rows)
    for(r=1;r<=rows;r++){
        let days = document.getElementById("days-left-" + String(r)).innerHTML
        let row = "borrowed-row-" + String(r);
        if (days <=3 && days > 0){
            document.getElementById(row).style.background = "#cccccc";
        }
        else if (days <= 0) {
            document.getElementById(row).style.background = "#ff6666";
        }
        else
        document.getElementById(row).style.background = "white";
    }
}


//library

function returnBook(){
    //handles book return process
    let stat = document.getElementById("status")
    console.log(stat)
    stat.innerHTML = "unverified return"
    
}

function getDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    today = month + '/' + day + '/' + year;
    console.log(today);
    document.getElementById("date-returned").innerHTML = "date returned: " + today;

}