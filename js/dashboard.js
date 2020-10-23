document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/themes/default.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<script src="../librerias/alertifyjs/alertify.js"></script>');


function agregarTipo(){
    valor = $('#activotipo').val();
   
        datos=$('#tipo').serialize();
    if(valor!=""){
    $.ajax({
        type:"POST",
        data:datos,
        url:"../provider/dashboard/ingresarTipo.php",
        success:function(r){
            
           
                location.reload();
             
               
          
        }
    });
}else{
 
    alertify.error("Si desea guardar un tipo de activo nuevo llene el campo de arriba.");
}
}
function eliminarTipo(_tipo){
    alertify.confirm('Eliminar Empleado','¿Desea eliminar este empleado?', function(){ 
      
        $.ajax({
            type:"POST",
            data:"idtipo=" + _tipo,
            url:"../provider/dashboard/eliminarTipo.php",
            success:function(r){
                
                if(r=="true"){
                    
                    alertify.success("Eliminado con exito");
                    $('#agregarTipo').modal('hide');
                    location.reload();
                    
                }else{
                    alertify.error("No se pudo eliminar");
                }
            }
        });
    }, function(){ 
        alertify.error('Cancelo la operación');
    
    });
}