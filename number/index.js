var numchar = [];
var dateNow = new Date();
const pi = 3.14;
var r = 7;

function kelilingLingkaran(a, b) {
  return 2 * a * b;
}

function diameterLingkaran(a) {
  return 2 * a;
}

function tambahLingkaran(a, b) {
  return a + b;
}

for (var i = 0; i <= 3; i++) {
  numchar[i] = prompt("Masukan Array ", 0);
}

for (i = 0; i <= 3; i++) {
  console.log("Array ke " + i + "=" + numchar[i]);
  document.write("Array ke " + i + "=" + numchar[i] + "<br />");
}

document.write("<br />");

if (numchar[0] == numchar[1]) {
  console.log("Array 0 dan Array 1 Sama");
  document.write("Array 0 dan Array 1 Sama");
} else {
  console.log("Array 0 dan Array 1 Sama");
  document.write("Array 0 dan Array 1 Tidak Sama");
}

document.write("<br />");

if (numchar[2] > numchar[3]) {
  console.log("Array 2  lebih besar dari Array 3");
  document.write("Array 2  lebih besar dari Array 3");
} else if (numchar[2] < numchar[3]) {
  console.log("Array 2  lebih kecil dari Array 3");
  document.write("Array 2  lebih kecil dari Array 3");
} else {
  console.log("Array 2 sama dengan Array 3");
  document.write("Array 2 sama dengan Array 3");
}

document.write("<br />");

var num_3 = Math.sin(numchar[2]);
var num_4 = Math.exp(numchar[3]);

document.write("<br />");

console.log("Nilai Sin Array ke 2 = " + num_3);
document.write("Nilai Sin Array ke 2 = " + num_3 + "<br />");

console.log("Nilai Exp Array ke 3 = " + num_4);
document.write("Nilai Exp Array ke 3 = " + num_4 + "<br />");

document.write("<br />");

console.log(
  "Keliling lingkaran dengan jari-jari 7 adalah " + kelilingLingkaran(pi, r)
);
document.write(
  "Keliling lingkaran dengan jari-jari 7 adalah " +
    kelilingLingkaran(pi, r) +
    "<br />"
);

document.write("<br />");

console.log(
  "Diameter lingkaran dengan jari-jari 7 adalah " + kelilingLingkaran(pi, r)
);
document.write(
  "Diameter Lingkaran dengan jari-jari 7 adalah " +
    diameterLingkaran(r) +
    "<br />"
);

document.write("<br />");

console.log(
  "Jumlah Keliling + Diameter = " +
    tambahLingkaran(kelilingLingkaran(pi, r), diameterLingkaran(r))
);
document.write(
  "Jumlah Keliling + Diameter = " +
    tambahLingkaran(kelilingLingkaran(pi, r), diameterLingkaran(r)) +
    "<br />"
);

document.write("Mengulang Array 3 sebanyak Array 3 juga " + "<br />");
for (var i = 0; i < numchar[3]; i++) {
  document.write(numchar[3]);
  console.log(numchar[3]);
}

document.write("<br />");
document.write("<br />");
document.write(dateNow);