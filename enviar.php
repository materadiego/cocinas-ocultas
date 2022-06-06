
<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$dpto = $_POST['departamento'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$donde = $_POST['donde'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$mensaje .= "Su e-mail es : " . $email . " \r\n";
$mensaje .= "Teléfono de contacto: " . $telefono . " \r\n";
$mensaje .= "Departamento: " . $dpto . " \r\n";
$mensaje .= "Quiere tener su cocina en: " . $donde . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el: " . date('d/m/Y', time());

$para = 'cocinasocultasuy@gmail.com';
$asunto = 'Consulta via web';

mail($para, $asunto, utf8_decode($mensaje), $header);


header("Location:consulta.html");
?>
