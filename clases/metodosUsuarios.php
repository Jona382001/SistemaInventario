<?php
      class usuarios{
                public function registroUsuarios($datos){
                    
                    $c=new conectar();
                    $conexion=$c->conexion();
                    $password = md5($datos[2]);
            
                    $sql="select * FROM `usuarioS` where usuario ='$datos[1]'";

                    $sql2="insert INTO `usuarios` (`cod_usuario`, `usuario`, 
                                                   `contrasena`, `tipo_usuario`,
                                                   `colaborador`,
                                                   `fecha_creacion`, `estado`)
                      VALUES (NULL, '$datos[1]', 
                      '$password', '$datos[3]', 
                      '$datos[0]',
                       NOW(), '0');";
                     $result2= mysqli_query($conexion,$sql);
                    $filas = mysqli_num_rows($result2);
                  
                  if ($filas > 0){
                   
                    return 0;
            
                }else{
                  return mysqli_query($conexion,$sql2);
                }
                 
            
                }
            

            public function eliminarUsuario($idusuario){
              $c=new conectar();
              $conexion=$c->conexion();
              $sql="delete FROM `usuarios` WHERE cod_usuario = $idusuario";
              $result= mysqli_query($conexion,$sql);
              return $result;
          }
     }
?>