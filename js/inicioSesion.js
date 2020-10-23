document.write('<link rel="stylesheet" type="text/css" href="librerias/alertifyjs/css/alertify.css">');
document.write('<script src="librerias/alertifyjs/alertify.js"></script>');
    $('#iniciar').click(function(){
        
        user = document.getElementById("user").value ;
       pass =document.getElementById("pass").value;
        datos =$('#login').serialize();
  
        $.ajax({

            type:"POST",
            data:datos,
            url:"clases/credenciales.php",
            success:function(r){
               
            

    if (r==1){
        window.location="vistas/index.php";
        console.log("fgdf")
    }else if(r==0){

        alertify.alert("Cuenta desactivada","Su cuenta a sido desactivada, comuniquese con el administrador.", function(){
            $('#login').trigger('reset');
        });

    }else if(r==2){
        
        alertify.alert("Contraseña Incorrecta","Sus credenciales de acceso son incorrectas vuelva a intentarlo.", function(){
            $('#login').trigger('reset');
        });
       
    }
            }
        });
    });
