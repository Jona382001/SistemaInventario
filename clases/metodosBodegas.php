<?php
      class bodegas{
                public function registroBodegas($datos){
                    
                    $c=new conectar();
                    $conexion=$c->conexion();
                   
            

                    $sql2="insert INTO `ubicaciones` (`cod_ubicacion`, `ubicacion`, `direccion`, `pais`) 
                    VALUES (NULL, '$datos[0]', '$datos[1]', '$datos[2]');";
                     

                  return mysqli_query($conexion,$sql2);
                }
            

            public function eliminarBodegas($idbodega){
              $c=new conectar();
              $conexion=$c->conexion();
              $sql="delete FROM `ubicaciones` WHERE `ubicaciones`.`cod_ubicacion` = $idbodega";
              $result= mysqli_query($conexion,$sql);
              return $result;
          }
     }
?>