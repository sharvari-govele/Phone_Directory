// JS code goes here
window.contactsList = [{
  name: 'Admin',
  mobile: '9999999999',
  email: 'admin@xyzcompany.com'
}]
document.getElementById("error").style.display="none";
element=document.getElementById("submit");
element.addEventListener("click", myfunction);

function validate(){
  valid=true;
  var regex_name=/^[a-z\s]{1,20}$/i;
  var regex_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var regex_mobile=/^\d{10}$/;
    
n=document.getElementById("name").value;
e=document.getElementById("email").value;
m=document.getElementById("mobile").value;
  if(!regex_name.test(n)){
    valid=false;
  }
  if(!regex_email.test(e)){
    valid=false;
  }
  if(!regex_mobile.test(m)){
    valid=false;
  }
  return valid;
  }

  function myfunction(){
    if(validate()){
      document.getElementById("error").style.display="none";
      tablecall();
    }
    else{
      document.getElementById("error").style.display="block";
    }
  }
function tablecall(){
  var table=document.getElementById("summaryTable").getElementsByTagName("tbody")[0];
  var row = table.insertRow();
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  cell1.innerHTML=document.getElementById('name').value;
  cell2.innerHTML=document.getElementById('mobile').value;
  cell3.innerHTML=document.getElementById('email').value;
  document.getElementById('name').value="";
  document.getElementById('mobile').value="";
  document.getElementById('email').value="";

}

var asc=true;
document.getElementById("nameColumn").addEventListener('click',sortTable);

function sortTable(){
  if(asc){
    var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("summaryTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  asc=false;

  }
  else{
    var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("summaryTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  asc=true;

  }
}

