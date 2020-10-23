document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/themes/default.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<script src="../librerias/alertifyjs/alertify.js"></script>');



function GuardarBodega(){
  
    datos=$('#registroBodegas').serialize();
    console.log(datos);
    $.ajax({
        type:"POST",
        data:datos,
        url:"../provider/bodega/insertarBodega.php",
        success:function(r){
        console.log(r);
        if (r==1){
            
            alertify.success('Activo registrado exítosamente.');
            $('#registroBodegas').trigger('reset');
            $('#TablaBodega').load('../provider/bodega/tablaBodega.php');
        
        }else {
            alertify.error('A colocado un codigo repetido de un activo, Vuelva a intentarlo ');
            $('#TablaBodega').load('../provider/bodega/tablaBodega.php');
            $('#registroBodegas').trigger('reset');
        }
        }
    });
}
function eliminarBodega(_codBodega){
    alertify.confirm('Eliminar Bodega','¿Desea eliminar esta bodega?', function(){ 
      
        $.ajax({
            type:"POST",
            data:"idbodega=" + _codBodega,
            url:"../provider/bodega/eliminarBodega.php",
            success:function(r){
                
                if(r==1){
                    
                    alertify.success("Bodega eliminada con exito");
                    $('#TablaBodega').load('../provider/bodega/tablaBodega.php');
                    
                }else{
                    alertify.error("No se pudo eliminar la bodega");
                }
            }
        });
    }, function(){ 
        alertify.error('Cancelo la operación');
    
    });
}