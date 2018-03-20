function checkDaysLeft(){
    //gets days left from borrowed table and changes backgound color of row accordingly
    let rows = document.getElementsByTagName("tr").length - 1;
    //console.log(rows)
    for(r=1;r<=rows;r++){
        let days = document.getElementById("days-left-" + String(r)).innerHTML
        let row = "borrowed-row-" + String(r);
        if (days <=3 && days > 0){
            document.getElementById(row).style.background = "grey";
        }
        else if (days <= 0) {
            document.getElementById(row).style.background = "red";
        }
        else
        document.getElementById(row).style.background = "white";
    }
}