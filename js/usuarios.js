document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/themes/default.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<script src="../librerias/alertifyjs/alertify.js"></script>');



$('#btnGuardar').click(function(){
   user= $('#usuario').val();
   
   
    datos=$('#registroUsuarios').serialize();
    $.ajax({
        type:"POST",
        data:datos,
        url:"../provider/ingresarUsuario.php",
        success:function(r){
    
            if(r==1){
                alertify.alert("Usuario agregado","El usuario " + user + " se creo correctamente");
                $('#TablaUsuarios').load('../provider/tablaUsuarios.php');
                $('#registroUsuarios').trigger('reset');
            }else if(r==0){
                alertify.alert("Error al guardar el usuario","Ya existe el usuario " + user + ", ingrese un nuevo usuario.");
                $('#registroUsuarios').trigger('reset');
                
            }
        }
    });
});


function eliminarUsuario(idusuario){
			
    alertify.confirm('Eliminar Usuarios','¿Desea eliminar este usuario?', function(){ 
      
        $.ajax({
            type:"POST",
            data:"idusuario=" + idusuario,
            url:"../provider/eliminarUsuario.php",
            success:function(r){
                
                if(r==1){
                    $('#tablaUsuarios').load('../vistas/usuarios/tablausuario.php');
                    alertify.success("Usuario eliminado con exito");
                    $('#TablaUsuarios').load('../provider/tablaUsuarios.php');
                }else{
                    alertify.error("No se pudo eliminar el usuario");
                }
            }
        });
    }, function(){ 
        alertify.error('Cancelo la operación');
    
    });
}
function activarOdesactivar(idusuario,_estado){
      
    if(_estado==1){
        alertify.confirm('Desactivar Usuario','¿Desea desactivar este usuario?', function(){
       
            $.ajax({
                type:"POST",
                data:{idusuario:idusuario, _estado:_estado},
                url:"../provider/activarUsuario.php",
                success:function(r){
                       
                        alertify.success("Usuario desactivado con exito");
                        $('#TablaUsuarios').load('../provider/tablaUsuarios.php');
                
                }
            });
        }, function(){ 
            alertify.error('Cancelo la operación');
        
        });
    }else{
        alertify.confirm('Activar Usuario','¿Desea activar este usuario?', function(){
            $.ajax({
                type:"POST",
                data:{idusuario:idusuario, _estado:_estado},
                url:"../provider/activarUsuario.php",
                success:function(r){
                    
                   
                        alertify.success("Usuario activado con exito");
                        $('#TablaUsuarios').load('../provider/tablaUsuarios.php');
                    
                }
            });
        }, function(){ 
            alertify.error('Cancelo la operación');
        
        });
    }
    
}

