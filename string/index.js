var dateNow = new Date();
var yeah = "belajar string javascript"

console.log(yeah);
document.write(yeah+"<br />");

document.write("<br />");

console.log("Huruf kapital semua = " + yeah.toUpperCase());
console.log("Huruf kecil semua = " + yeah.toLowerCase());

document.write("Huruf kapital semua = " + yeah.toUpperCase() + "<br />");
document.write("Huruf kecil semua = " + yeah.toLowerCase() + "<br />");

document.write("<br />");

document.write("To Title Case : ")
for (var i = 0; i < yeah.length ; i++){
    if (i == 15) {
        console.log(yeah[15].toUpperCase());   
        document.write(yeah[15].toUpperCase());
    }else if (i == 8) {
        console.log(yeah[8].toUpperCase());   
        document.write(yeah[8].toUpperCase());
    }else if(i==0){
        console.log(yeah[0].toUpperCase());   
        document.write(yeah[0].toUpperCase());
    } else {
        console.log(yeah[i]);   
        document.write(yeah[i]);
    }
}

document.write("<br />"+"<br />");

console.log("Hour : " + dateNow.getHours());
document.write("Hour : " + dateNow.getHours() + "<br />");
console.log("Minute : " + dateNow.getMinutes());
document.write("Minute : " + dateNow.getMinutes() + "<br />");
console.log("Second : " + dateNow.getSeconds());
document.write("Second : " + dateNow.getSeconds() + "<br />" + "<br />");

if (dateNow.getDay() == 0) {
    console.log("Hari ini Senin");    
    document.write("Hari ini Senin" + "<br />");
}else if (dateNow.getDay() == 1) {
    console.log("Hari ini Selasa");    
    document.write("Hari ini Selasa" + "<br />");
}else if (dateNow.getDay() == 2) {
    console.log("Hari ini Rabu");    
    document.write("Hari ini Rabu" + "<br />");
}else if (dateNow.getDay() == 3) {
    console.log("Hari ini Kamis");    
    document.write("Hari ini Kamis" + "<br />");
}else if (dateNow.getDay() == 4) {
    console.log("Hari ini Jumat");    
    document.write("Hari ini Jumat" + "<br />");
}else if (dateNow.getDay() == 5) {
    console.log("Hari ini Sabtu");    
    document.write("Hari ini Sabtu" + "<br />");
}else {
    console.log("Hari ini Minggu");    
    document.write("Hari ini Minggu" + "<br />");
} 

console.log("Tanggal : " + dateNow.getDate());
document.write("Tanggal : " + dateNow.getDate()+"<br />");
console.log("7 Hari ini setelah hari ini adalah tgl : " + (dateNow.getDate() + 7));
document.write("7 Hari ini setelah hari ini adalah tgl : "+ (dateNow.getDate()+7) + "<br />");

document.write("<br />");
document.write(dateNow);