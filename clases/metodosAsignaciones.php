<?php
      class asignaciones{
                public function asignar($datos){
                    
                    $c=new conectar();
                    $conexion=$c->conexion();
                   
            

                    $sql="insert INTO `asignaciones` (`cod_asignacion`, `empleado`, `equipo`, `fecha_asignacion`) 
                    VALUES (NULL, '$datos[0]', '$datos[1]', NOW());";
                     $sql2="update `activos` SET `disponibilidad` = '0' WHERE `activos`.`cod_activo` = '$datos[1]';";
                     mysqli_query($conexion,$sql2);
                    
                  return mysqli_query($conexion,$sql);
                }
            

         
     }
?>