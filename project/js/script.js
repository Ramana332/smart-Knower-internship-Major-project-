var text = document.getElementById('About');
      
      window.onclick = function(event) {
          if (event.target == text) {
            text.style.display = "none";
          }
      }
      var modal = document.getElementById('popavai');
      
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
      var users=[];
      var index=0;
      function save(){
            var username=document.getElementById('name').value;
            var vechicalName=document.getElementById('vechicalName').value;
            var vehicaltype1=document.getElementById('vehicalType1').checked;
            var vehicaltype2=document.getElementById('vehicalType2').checked;
            var vehicalType
            if(vehicaltype1==true){
                vehicalType=document.getElementById('vehicalType1').value;
            }else{
                vehicalType=document.getElementById('vehicalType2').value;
            }
            var vehicalNumber=document.getElementById('vehicalNumber').value;
            var entryTime=document.getElementById('entryTime').value;
            var exitTime=document.getElementById('exitTime').value;
            
            var booking={};
            booking.username=username;
            booking.vechicalName=vechicalName;
            booking.vehicalNumber=vehicalNumber;
            booking.vehicalType=vehicalType;
            booking.entryTime=entryTime;
            booking.exitTime=exitTime;

            users.push(booking);
      }    
  
      function display(){
            save();
            var output=document.getElementById('displayDetails').innerHTML; 
            for(var i=index;i<users.length;i++){
              debugger;
             document.getElementById('desplayD').style.display='block';
             output=output+"<tr>"+"<td>"+users[i].username+"</td>"+"<td>"+users[i].vechicalName+"</td>"+"<td>"+users[i].vehicalNumber+"</td>"+"<td>"+users[i].vehicalType+"</td>"+"<td>"+users[i].entryTime+"</td>"+"<td>"+users[i].exitTime+"</td>"+"</tr>"
             index++;
           }
              document.getElementById('displayDetails').innerHTML=output;
              document.getElementById("name").value ="";
              document.getElementById("vechicalName").value ="";
              document.getElementById("vehicalNumber").value ="";
              document.getElementById("entryTime").value ="";
              document.getElementById("exitTime").value ="";
      }
