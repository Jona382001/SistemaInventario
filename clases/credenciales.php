<?php
session_start();
		require_once "../clases/conexion.php";
		require_once "../clases/login.php";
		$obj = new inicio();
		$datos = array(
			$_POST['usuario'],
			$_POST['contraseña']
		);

		echo $obj ->login($datos);
  ?>

	
	

	
	
	