document.getElementById("genbtn").onclick = function() {
  myFunction();
};

var txtout_1 = "";
var txtout_2 = "";
var txtout_3 = "";
var txtout_4 = "";
var txtout_5 = "";
var txtout_6 = "";
var txtout_7 = "";
var txtout_8 = "";

function nameGen() {
  return (
    b_list[Math.floor(Math.random() * b_list.length)] +
    " " +
    a_list[Math.floor(Math.random() * a_list.length)]
  );
}

function myFunction() {
  txtout_8 = txtout_7;
  txtout_7 = txtout_6;
  txtout_6 = txtout_5;
  txtout_5 = txtout_4;
  txtout_4 = txtout_3;
  txtout_3 = txtout_2;
  txtout_2 = txtout_1;

  let txtout_0 = nameGen();

  if (txtout_0.length < 29) {
    txtout_1 = txtout_0;
  } else {
    txtout_1 = nameGen();
  }

  document.getElementById("txtout_1").innerHTML = txtout_1;
  document.getElementById("txtout_2").innerHTML = txtout_2;
  document.getElementById("txtout_3").innerHTML = txtout_3;
  document.getElementById("txtout_4").innerHTML = txtout_4;
  document.getElementById("txtout_5").innerHTML = txtout_5;
  document.getElementById("txtout_6").innerHTML = txtout_6;
  document.getElementById("txtout_7").innerHTML = txtout_7;
  document.getElementById("txtout_8").innerHTML = txtout_8;
}
