$(document).ready(function(){
    $("#but").click(function(){
        var name=$("#name").val();
        var psw=$("#pass").val();

            function check(a,b,callback)
            {  
                if(a=='admin'&& b=='12345')
                {
                    
                    callback('1');
                }
                else
                {
                    callback('0');
                  
                }
                
            }
            check(name,psw,(res)=>{
                console.log(res);
                if(res=='1')
                {   window.location.href='main.html';
            }
                else if(res=='0')
                { alert("Invalid User Details");
        }
               
            });





        });

});