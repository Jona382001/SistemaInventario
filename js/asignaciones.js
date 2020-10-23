document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/themes/default.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<script src="../librerias/alertifyjs/alertify.js"></script>');



function asignar(){
    
    datos=$('#asignar').serialize();
    console.log(datos);
    $.ajax({
        type:"POST",
        data:datos,
        url:"../provider/asignaciones/asignar.php",
        success:function(r){
        console.log(r);
        if (r==1){
            $('#tabla').load('../provider/asignaciones/tablaAsignaciones.php');
            alertify.confirm('Equipo asignado Correctamente','¿Desea imprimir la constancia de asignacion?', function(){ 
               var  emp = document.getElementById("empleado");
               var empleado = emp.options[emp.selectedIndex].text;

              
                var equipo = document.getElementById("equipo").value;
                        window.location="../provider/asignaciones/reporte-entrega.php?equipo="+ equipo + "&empleado="+ empleado;
                        
            }, function(){ 
                alertify.error('Cancelo la operación');
                location.reload();
            
            });
        
        }else {
            alertify.error('Hubo un error al crear la asignacion de equipo');
            $('#tablaAsignaciones').load('../provider/asignaciones/tablaAsignaciones.php');
           
        }
        }
    });
}



function eliminarasignacion(_codasignacion,_codactivo){
   
    alertify.confirm('Eliminar Asignación','¿Desea eliminar esta asignacion?', function(){ 
    
        $.ajax({
            type:"POST",
            data:{_codasignacion:_codasignacion, _codactivo:_codactivo},
            url:"../provider/asignaciones/eliminarAsignacion.php",
            success:function(r){
            
                if(r=="true"){
                    
                    alertify.success("Asignacion eliminada con exito");
                    $('#tabla').load('../provider/asignaciones/tablaAsignaciones.php');
                    location.reload();
            
                }else{
                    alertify.error("No se pudo eliminar la asignacion");
                }
            }
        });
    }, function(){ 
        alertify.error('Cancelo la operación');
    
    });
}