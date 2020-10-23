<?php require_once "clases/dependencias.php " ?>   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="public/bower_components/Ionicons/css/ionicons.min.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/login.css">
    <title>Login</title>
</head>
<body>
    <div class="modal-dialog text-center">
        <div class="col-sm-15 main-section">
            <div class="modal-content">
                <div class="col-12 imagen">
                    <img src="http://www.intelfon.com.sv/img/slides/parallax/red256.png" >
                </div>
                <form id="login" class="col-12">
                    <div class="form-group" id="user">
                        <input type="text" name="usuario" id="user" class="form-control" placeholder="Usuario">
                    </div>
                    <div class="form-group" id="contra">
                        <input type="password" name="contraseña" id="pass" class="form-control" placeholder="Contraseña">
                    </div>
                    <a  class="btn btn-primary iniciar" id="iniciar" ><i class="fas fa-sign-in-alt" aria-hidden="true"></i> Iniciar </a> 
                    
                </form>
                <div class="col-12 recordar">
                    <a href="#" >Olvide la contraseña</a>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="js/inicioSesion.js"></script>
</html>