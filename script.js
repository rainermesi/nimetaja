document.getElementById("genbtn").onclick = function() {
  myFunction();
};

function myFunction() {
  document.getElementById("txtout").value =
    b_list[Math.floor(Math.random() * b_list.length)] +
    " " +
    a_list[Math.floor(Math.random() * a_list.length)];
}
