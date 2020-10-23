document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/themes/default.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<script src="../librerias/alertifyjs/alertify.js"></script>');



function cambiarContra(){
    actual = $('#Actual').val();
    nueva = $('#nueva').val();
    confirmar = $('#confirmar').val();
   
    if (nueva=="" || confirmar=="" || actual==""){
        alertify.alert("Campos Vacios","Debe de rellenar todos los campos.");
                     
    }else if (nueva!=confirmar){
        alertify.alert("Error al confirmar contraseña","Las contraseñas no coinciden", function(){
            $('#Actual').val('');
            $('#nueva').val('');
            $('#confirmar').val('');
        });
    }else{

        datos=$('#cambio').serialize();
        $.ajax({
            type:"POST",
            data:datos,
            url:"../provider/menu/resetContra.php",
            success:function(r){
                
                if(r=='true'){
                    alertify.alert("Contraseña modificada","Su contraseña se cambio correctamente");
                    $('#cambiarContra').modal('hide');
                }else if (r==0){
                    alertify.alert("Contraseña incorrecta","Debe de colocar su contraseña actual.", function(){
                        $('#Actual').val('');
                        $('#nueva').val('');
                        $('#confirmar').val('');
                    });
                }else if(r==1){
                    alertify.alert("Contraseña actual","A ingresado la contraseña actual, debe de colocar una nueva contraseña", function(){
                        $('#Actual').val('');
                        $('#nueva').val('');
                        $('#confirmar').val('');
                    });
                }
            }
        });
    }
}
function salir(){
    
    alertify.confirm('Cerrar Sesion','¿Desea  salir al inicio de sesion?', function(){ 
        window.location="../clases/salir.php";
       
    }, function(){ 
        alertify.error('Cancelo la operación');
    
    });
}
