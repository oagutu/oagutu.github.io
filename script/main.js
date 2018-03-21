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
    let stat = document.getElementById("status");
    console.log(stat);
    stat.innerHTML = "unverified return";
    
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

function borrowBook(){
    //invokes book borrowing from library
    let title = document.getElementById("book-title-1").innerHTML
    console.log(title);
    let author = document.getElementById("book-author-1").innerHTML;
    let reply = confirm("Borrow " + title +" by " + author);
    if (reply == true){
        date = prompt("enter date to be returned(mm/dd/yyyy):");
        console.log(date)
        if(date == null || date == ""){
            alert("Date not specified. " + title + " NOT added to your checkout")
        }
        else{
        alert(title + " added to your checkout, to be returned by " + date);
    }
    }
    else{
        alert(title + "NOT added to your checkout");
    }

}
