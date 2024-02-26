function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("find");
    var ch1;
    ch1=document.getElementById("find").value;
    if(ch1 =='')
    {
      document.getElementById('table').style.visibility="hidden";
      window.alert('enter reqiured fields');
      Break;
    }
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  let found=false;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
  
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          document.getElementById("table").style.visibility = "visible";
          tr[i].style.display = "";
          document.getElementById("unavailable").style.display="none";
          document.getElementById("unavailabletext").style.display="none";
          found=true;
        } else {
          tr[i].style.display = "none";

        }

        if(!found)
        {
            
            document.getElementById("table").style.visibility = "hidden";
            document.getElementById("infounavailable").style.visibility="visible";
            document.getElementById("unavailable").style.display="";
            document.getElementById("unavailabletext").style.display="";
        }
      }
    
    }
   
  }