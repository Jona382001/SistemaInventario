document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/themes/default.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<script src="../librerias/alertifyjs/alertify.js"></script>');


function agregarEmpleado(){
    datos=$('#registroEmpleados').serialize();
    $.ajax({
        type:"POST",
        data:datos,
        url:"../provider/empleados/agregarEmpleado.php",
        success:function(r){
            
            if(r==1){
               
                alertify.success("Empleado agregado con exito");
                $('#TablaEmpleados').load('../provider/empleados/tablaEmpleados.php');
                $('#registroEmpleados').trigger('reset');
            }else{
                alertify.error("Ya existe un empleado con el mismo codigo");
            }
        }
    });
}
function eliminarEmpleado(_codEmpleado){
    alertify.confirm('Eliminar Empleado','¿Desea eliminar este empleado?', function(){ 
      
        $.ajax({
            type:"POST",
            data:"idempleado=" + _codEmpleado,
            url:"../provider/empleados/eliminarEmpleado.php",
            success:function(r){
                
                if(r==1){
                    
                    alertify.success("Empleado eliminado con exito");
                    $('#TablaEmpleados').load('../provider/empleados/tablaEmpleados.php');
                    
                }else{
                    alertify.error("No se pudo eliminar el empleado");
                }
            }
        });
    }, function(){ 
        alertify.error('Cancelo la operación');
    
    });
}
function actualizarEmpleado(){
    datos=$('#ActualizarEmpleados').serialize();
    $.ajax({
        type:"POST",
        data:datos,
        url:"../provider/empleados/actualizarEmpleado.php",
        success:function(r){
            
            if(r==1){
               
                alertify.success("Empleado actualizado con exito");
                $('#TablaEmpleados').load('../provider/empleados/tablaEmpleados.php');
                $('#ActualizarEmpleados').trigger('reset');
            }else{
                alertify.error("Se produjo un error, vuelva a intentarlo en otro momento");
            }
        }
    });

}
function detalleEmpleado(_empleado){

    $('#empleadosModalActualizar').modal('show');
    $.ajax({
        type:"POST",
        data:"idEmpleado=" + _empleado,
        url:"../provider/empleados/obtenerDatosempleados.php",
        success:function(r){
            dato=jQuery.parseJSON(r);
            console.log(r);
            $('#Acodigo').val( dato['identificacion'] );
            $('#Apersona').val( dato['nombre'] );
            $('#Aarea').val( dato['area'] );
            $('#Acargo').val( dato['cargo'] );
            $('#Apais').val( dato['pais'] );

           
        }
    });
}