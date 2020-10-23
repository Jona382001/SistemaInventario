<?php
	
    //echo $sql;
    class inicio{
    public function login($datos){

		$con = new conectar();
        $conexion = $con -> conexion();
        
        $password = md5($datos[1]);
        $_SESSION['usuario']=$datos[0];
            $sql="select p.nombre_completo,p.area,u.usuario,u.contrasena,u.tipo_usuario, a.pais, u.estado from personal p
            join usuarios u on p.identificacion=u.colaborador
            join pais a on p.pais= a.cod_pais
            where u.usuario='$datos[0]' and u.contrasena ='$password'";

            

    
           $result = mysqli_query($conexion,$sql);
           $ver=mysqli_fetch_row($result);

           $_SESSION['tipo_usuario']=$ver[4];
           $_SESSION['pais']=$ver[5];
           $_SESSION['pais_codigo']=$ver[5];

           $filas  = mysqli_num_rows($result);
           echo mysqli_error($conexion);


           
            if ($filas > 0 && $ver[6]==1){
                $con = new conectar();
                $conexion = $con -> conexion();
                        $sql2="update`usuarios` SET `ultima_conexion` = NOW() WHERE usuario = '$datos[0]'";
                         mysqli_query($conexion,$sql2);
                return 1;
               
            }else if($filas ==0){
                return 2;
            }else if($ver[6]==0){
                return 0;

            }
           
        }
     }
    
 ?>