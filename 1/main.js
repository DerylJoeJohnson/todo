$(document).ready(function(){
    var count=0;
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/todos",
            success:function(data){

                //console.log(data);
                //var output= "  ID </th><th> Name </th><th> Username </th><th> street </th><th> suite </th><th> city </th><th> zipcode </th><th> phone </th><th> website </th><th> company name </th></tr> </thead> ";
                var output=" ";
                for(var i in data)               {
                    
                    output+="<div class='col col-sm-12 col-12'><div class='card'> <div class='card-header'>";
                    output+="<div class='card-body'>";
                    if(data[i].completed==true)
                    {output+="<p><input type='checkbox' name='' id='1' checked disabled>CHECK</p>";}
                    else 
                    {output+="<p><input type='checkbox' name='' id='1' >CHECK</p>";}
                    output+="<label>ID : "+data[i].id+"<br>";
                    output+="Title : "+  data[i].title  +"</label><br></div></div></div></div>";
                    
                    
                        
                    
                    
                }
                
                $("#todo").html(output);
                
                $('input[type="checkbox"]').click(function(){            
                if($(this).is(":checked")){
                    //alert("Checkbox is checked.");
                    count++;
                }else
                {
                    count--;
                }
                //if(count==5)
                //{
                  //  alert("Congrats brother .");
                //}
                var mypromise=new Promise((resolve,reject)=>{
                
                    if(count>=5){
                        resolve();
                    }
                    else{
                        reject();
                    }
                });
                mypromise.then(()=>{
                   alert("You have checked 5 boxes successfully");
                   //window.location.href='main.html';

                }) .catch(()=>{
                   console.log(count);
                })
            });




            }
        });
       
    });