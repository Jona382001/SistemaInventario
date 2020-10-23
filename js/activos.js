document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/themes/default.css">');
document.write('<link rel="stylesheet" type="text/css" href="../librerias/alertifyjs/css/alertify.css">');
document.write('<script src="../librerias/alertifyjs/alertify.js"></script>');

 
 (function(document) {
      'use strict';

      var LightTableFilter = (function(Arr) {

        var _input;

        function _onInputEvent(e) {
          _input = e.target;
          var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
          Arr.forEach.call(tables, function(table) {
            Arr.forEach.call(table.tBodies, function(tbody) {
              Arr.forEach.call(tbody.rows, _filter);
            });
          });
        }

        function _filter(row) {
          var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
          row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }

        return {
          init: function() {
            var inputs = document.getElementsByClassName('light-table-filter');
            Arr.forEach.call(inputs, function(input) {
              input.oninput = _onInputEvent;
            });
          }
        };
      })(Array.prototype);

      document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
          LightTableFilter.init();
        }
      });

    })(document);




function buscar(){
  document.getElementById('cerrarFiltro').style.display = 'inline-block';
  
   datos=$('#filtro').serialize();
   console.log(datos);
       $.ajax({
       type:"POST",
       data: datos,
       url:"../provider/tablaActivosFiltros.php",
       success:function(_r){
                        $('#TablaActivos').html(_r);
					}
				});

}
$('#cerrarFiltro').click(function(){
  $('#filtro').trigger('reset');
  document.getElementById('cerrarFiltro').style.display = 'none';
  $('#TablaActivos').load('../provider/tablaActivos.php');
});
function GuardarActivo(){
  
    datos=$('#insertarActivo').serialize();
    console.log(datos);
    $.ajax({
        type:"POST",
        data:datos,
        url:"../provider/activos/insertarActivo.php",
        success:function(r){
        console.log(r);
        if (r==1){
            
            alertify.success('Activo registrado exítosamente.');
            $('#insertarActivo').trigger('reset');
            $('#TablaActivos').load('../provider/tablaActivos.php');
        
        }else {
            alertify.error('A colocado un codigo repetido de un activo, Vuelva a intentarlo ');
            $('#TablaActivos').load('../provider/tablaActivos.php');
            $('#insertarActivo').trigger('reset');
        }
        }
    });
}
/** function detallesActivo(idactivo){
	$('#detalles').modal('show');
	console.log(idactivo);
			$.ajax({
				type:"POST",
				data:"idActivo=" + idactivo,
				url:"../provider/activos/obtenerDetallesActivo.php",
				success:function(r){
					dato=jQuery.parseJSON(r);
					console.log(r);
					$('#activoDetalle').text( idactivo );
					$('#cod').val(idactivo );
					$('#pro').val( dato['problema'] );
					$('#procesa').val( dato['procesador'] );
					$('#memo').val( dato['memoria'] );
					$('#tip').val( dato['tipo_activo'] );
					$('#marc').val( dato['marca'] );
					$('#placa').val( dato['motherboard'] );
					$('#fuente').val( dato['fuente'] );
					$('#est').val( dato['Estado'] );
					$('#mod').val( dato['modelo'] );
					$('#disc').val( dato['disco'] );
			
				}
			});
        }*/
////////////////////////////////////////////////
function editar(){
    event.preventDefault();
    $('.form-control').prop("disabled", false);
//	$('#cod').prop("disabled", true);
    $('#guardarDetalle').prop("disabled", false);
    $('#est').prop("disabled", true);
    $('#tip').prop("disabled", true);

}

function agregaDatosActivos(idActivo){

$('#actualizar').modal('show');
$.ajax({
    type:"POST",
    data:"idActivo=" + idActivo,
    url:"../provider/activos/obtenerDatosActivos.php",
    success:function(r){
        dato=jQuery.parseJSON(r);
        console.log(r);
        $('#Acod_activo').val( dato['cod_activo'] );
        $('#AtipoActivo').val( dato['tipo_activo'] );
        $('#AnombreMaquina').val( dato['nombre_maquina'] );
        $('#Amodelo').val( dato['modelo_maquina'] );
        $('#Asistem').val( dato['SO'] );
        $('#Aram').val( dato['RAM'] );
        $('#Ahhdd').val( dato['HHDD'] );
        $('#Aprocesador').val( dato['procesador'] );
        $('#Aubicacion').val( dato['ubicacion'] );
       
    if (dato['Estado']=="si"){
     
      $("#Rsi").attr('checked', true);
    }else{
      $("#Rno").attr('checked', true);
    }
    if (dato['disponibilidad']==0){
     
      $("#Dno").attr('checked', true);
    }else{
      $("#Dsi").attr('checked', true);
    }
    }
});
}
function eliminarActivo(_idActivo){
  alertify.confirm('Eliminar Activo','¿Desea eliminar el activo '+_idActivo+'?', function(){ 
      
    $.ajax({
        type:"POST",
        data:"idactivo=" + _idActivo,
        url:"../provider/activos/eliminarActivo.php",
        success:function(r){
            
            if(r==1){
              $('#TablaActivos').load('../provider/tablaActivos.php');
                alertify.success("Activo eliminado con exito");
                
            }else{
                alertify.error("No se pudo eliminar el Activo");
            }
        }
    });
}, function(){ 
    alertify.error('Cancelo la operación');

});
}
function ActualizarActivo(){
  alertify.confirm('Actualizar Activo','¿Desea Actualizar el activo?', function(){ 
    datos=$('#actualizarActivo').serialize();
    $.ajax({
        type:"POST",
        data:datos,
        url:"../provider/activos/actualizarActivo.php",
        success:function(r){
            
            if(r==1){
              $('#TablaActivos').load('../provider/tablaActivos.php');
                alertify.success("Activo actualizado con exito");
                $('#actualizarActivo').trigger('reset');
                
            }else{
                alertify.error("No se pudo actualizar el Activo");
            }
        }
    });
}, function(){ 
    alertify.error('Cancelo la operación');

});
}


