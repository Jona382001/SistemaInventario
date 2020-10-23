<?php
       
            class conectar{
                private $servidor="localhost";          
             private $usuario="root";
                private $pass ="";
                private $db ="inventario_intelfon";
            

                public function conexion(){

                    $conexion =mysqli_connect($this->servidor,
                    $this->usuario,
                    $this->pass,
                    $this->db);
                    return $conexion;
  
                }
            }

            
             
?>