function search()
        {
            var filter=document.getElementById("find").value.toUpperCase();
            var item=document.querySelectorAll(".product");
            var l=document.getElementsByTagName('h3');
            let found=false;
            for(var i=0;i<=l.length;i++)
            {
                let a=item[i].getElementsByTagName('h3')[0];
                let value=a.textContent;
                document.getElementById("searching").style.visibility="visible";
                document.getElementById("unavailable").style.visibility="hidden";
                document.getElementById("unavailabletext").style.visibility="hidden";
              
                if (value.toUpperCase().indexOf(filter)>-1)
                {
                    item[i].style.display="";
                    found=true;
                }
                else{
                    item[i].style.display="none";
                }
                if(!found)
            {
                document.getElementById("searching").style.visibility="hidden";
                document.getElementById("unavailable").style.visibility="visible";
                document.getElementById("unavailabletext").style.visibility="visible";
            }
            }
           
        }

        