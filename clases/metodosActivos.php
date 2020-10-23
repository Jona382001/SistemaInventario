<?php

class metodosActivos{
 
 public function registrarActivos($datos){
        $c=new conectar();
        $conexion=$c->conexion();

  
        $sql="insert INTO `activos` (`cod_activo`, `tipo_activo`, 
                                    `nombre_maquina`, `modelo_maquina`,
                                       `sistema`, `RAM`, 
                                       `HHDD`, `procesador`,
                                        `arquitectura`, `Estado`,
                                         `disponibilidad`,
                                          `ubicacion`, `fecha_ingreso`,
                                          `fecha_salida`) 
            VALUES ('$datos[0]', '$datos[1]', 
                    '$datos[2]', '$datos[3]', 
                    '$datos[5]', '$datos[6]', 
                    '$datos[7]', '$datos[8]', 
                    '$datos[9]', '$datos[10]', 
                    '$datos[11]', 
                    '$datos[4]', NOW(), 
                    '$datos[12]');";
       
        $sql1="select * FROM `activos` WHERE cod_activo ='$datos[0]'";

      $result= mysqli_query($conexion,$sql1);
      $filas  = mysqli_num_rows($result);
      
      if ($filas > 0){
        return 0;
    }else{
      return mysqli_query($conexion,$sql);
    }
      
    }
    public function obtenDatosActivo($idactivo){
  $c=new conectar();
  $conexion=$c->conexion();
  $sql="select cod_activo,
               tipo_activo,
               nombre_maquina,
               modelo_maquina,
               sistema,
               RAM,
               HHDD,
               procesador,
               Estado,
               ubicacion,
               disponibilidad 
               FROM `activos` 
               where cod_activo='$idactivo'";
    

  $result=mysqli_query($conexion,$sql);
  $ver=mysqli_fetch_row($result);
   

  if ($ver[8]==1){
    $fun="si";
  }else{
    $fun="no";
  }
  
  $datos=array(
              'cod_activo' => $ver[0],
                  'tipo_activo' => $ver[1],
                  'nombre_maquina' =>$ver[2],
                  'modelo_maquina' =>$ver[3],
                  'SO' => $ver[4],
                  'RAM' => $ver[5],
                  'HHDD' => $ver[6],
                  'procesador' => $ver[7],
                  'Estado' => $fun,
                  'ubicacion' => $ver[9],
                  'disponibilidad' => $ver[10]
              );
  return $datos;
}
public function detalles($idactivo){
    $c=new conectar();
    $conexion=$c->conexion();
    $sql="select * FROM `activos` where cod_activo='$idactivo'";

    $result=mysqli_query($conexion,$sql);
    $ver=mysqli_fetch_row($result);
     

    if ($ver[3]==1){
      $fun="Funciona";
    }else{
      $fun="No Funciona";
    }
    
    $datos=array(
                'cod_activo' => $ver[0],
                    'tipo_activo' => $ver[1],
                    'bodega' => $ver[2],
                    'Estado' =>  $ver[3],
                    'fecha_ingreso' =>$ver[4],
                    'fecha_defuncion' => $ver[5]
                
                );
    return $datos;
}
public function eliminarActivo($idactivo){
  $c=new conectar();
  $conexion=$c->conexion();
  $sql="delete FROM `activos` WHERE cod_activo = '$idactivo'";
  $result= mysqli_query($conexion,$sql);
  
  return $result;
}
public function actualizarActivo($datos){
  $c=new conectar();
  $conexion=$c->conexion();

  $sql="update `activos` 
  SET `nombre_maquina` = '$datos[1]',
  `modelo_maquina` ='$datos[2]',
   `sistema` = '$datos[4]',
    `RAM` = '$datos[5]',
     `HHDD` = '$datos[6]',
      `procesador` = '$datos[7]',
       `Estado` = '$datos[8]',
        `disponibilidad` = '$datos[9]',
         `ubicacion` = '$datos[3]', 
         `fecha_salida` = '2019-07-06'
          WHERE `activos`.`cod_activo` = '$datos[0]';";

        if($datos[8]==0){
          $sql="update `activos` 
  SET `nombre_maquina` = '$datos[1]',
  `modelo_maquina` ='$datos[2]',
   `sistema` = '$datos[4]',
    `RAM` = '$datos[5]',
     `HHDD` = '$datos[6]',
      `procesador` = '$datos[7]',
       `Estado` = '$datos[8]',
        `disponibilidad` = '$datos[9]',
         `ubicacion` = '$datos[3]', 
         `fecha_salida` = NOW()
          WHERE `activos`.`cod_activo` = '$datos[0]';";
        }
        
$result= mysqli_query($conexion,$sql);	
return $result;
}
}
?>