<?php
// Configuración de cabecera para aceptar JSON
header("Content-Type: application/json");

// Leer los datos JSON de la solicitud
$input = json_decode(file_get_contents("php://input"), true);

if (isset($input['name']) && isset($input['email'])) {
    $name = $input['name'];
    $email = $input['email'];

    // Aquí podrías añadir código para guardar los datos en una base de datos
    // Ejemplo de conexión a base de datos (omitido por simplicidad)

    // Enviar respuesta de éxito
    echo json_encode(["success" => true, "message" => "Datos guardados correctamente"]);
} else {
    // Enviar respuesta de error si faltan datos
    echo json_encode(["success" => false, "message" => "Datos incompletos"]);
}
