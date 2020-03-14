openNav();
var Qindex = 1;

var select1 = document.getElementById("cl1");
var text1 = document.getElementById("tb1");
var out1 = document.getElementById("out1");

function getCookieVals() {
  console.log("getting cookies");

  var Lang1 = accessCookie("P" + Qindex + "cl1");
  var tex1 = accessCookie("P" + Qindex + "tb1");
  var ou1 = accessCookie("P" + Qindex + "out1");

  console.log("Text1 = " + tex1);
  console.log("Output1 = " + ou1);

  select1.selectedIndex = Lang1;
  text1.innerText = tex1;
  out1.value = ou1;
}

function handleChange(ele) {
  createCookie("P" + Qindex + ele.id, ele.value, 0.5);
  console.log("P" + Qindex + ele.id + " = " + ele.value);
}

getCookieVals();
