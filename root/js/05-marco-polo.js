for(i=1;i<101;i++) {

    if(i%3===0 && i%5===0) {
        console.log(i, " Marco! Polo!");
        //document.write(i, " Marco! Polo!<br>");
    }
    else if(i%3===0) {
        console.log(i, " Marco!");
        //document.write(i, " Marco!<br>");
    }
    else if(i%5===0) {
        console.log(i, " Polo!");
        //document.write(i, " Polo!<br>");
    }
}