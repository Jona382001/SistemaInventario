<?php

class metodosEmpleados{
 
 public function registrarEmpleado($datos){
        $c=new conectar();
        $conexion=$c->conexion();

  
        $sql="insert INTO `personal` (`identificacion`, `nombre_completo`, `area`, `cargo`, `pais`, `fecha_creacion`) 
        VALUES ('$datos[0]', '$datos[1]', '$datos[2]', '$datos[3]', '$datos[4]', NOW());";
       
        $sql1="select * FROM `personal` WHERE identificacion ='$datos[0]'";

      $result= mysqli_query($conexion,$sql1);
      $filas  = mysqli_num_rows($result);
      
      if ($filas > 0){
        return 0;
    }else{
      return mysqli_query($conexion,$sql);
    }
      
}
public function eliminarEmpleado($idempleado){
    $c=new conectar();
    $conexion=$c->conexion();
    $sql="delete FROM `personal` WHERE identificacion = $idempleado";
    $result= mysqli_query($conexion,$sql);
    return $result;
}
public function obtenDatosEmpleado($idempleado){
    $c=new conectar();
    $conexion=$c->conexion();
    $sql="select * FROM `personal` where identificacion='$idempleado'";

    $result=mysqli_query($conexion,$sql);
    $ver=mysqli_fetch_row($result);
     
    $datos=array(
                'identificacion' => $ver[0],
                    'nombre' => $ver[1],
                    'area' => $ver[2],
                    'cargo' =>  $ver[3],
                    'pais' =>$ver[4]
                
                );
    return $datos;
}
public function actualizarEmpleado($datos){
  
  $c=new conectar();
  $conexion=$c->conexion();


  $sql="update `personal` SET 
                              `nombre_completo` = '$datos[1]', 
                              `area` = '$datos[2]', 
                              `cargo` = '$datos[3]',
                               `pais` = '$datos[4]'
                                WHERE `personal`.`identificacion` = $datos[0];";
 


     return mysqli_query($conexion,$sql);
}
}
?>