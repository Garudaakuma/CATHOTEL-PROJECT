
<?php
$jsonData = json_decode(file_get_contents("../JSON/info-save.json"), true);
$server_info = [
    "servername"=>"{$jsonData["mySql"]["servername"]}",
    "username"=>"{$jsonData["mySql"]["username"]}",
    "password"=>"{$jsonData["mySql"]["password"]}",
    "database"=>"{$jsonData["mySql"]["database"]}",
    "port"=>"{$jsonData["mySql"]["port"]}"
];

if ($server_info['password'] === "****") {
    header("Location: connection_error.php");
}

$conn = new mysqli( $server_info['servername'],
                    $server_info['username'],
                    $server_info['password'],
                    $server_info['database'],
                    $server_info['port']);

if ($conn->connect_error) {
    die("Connection failed: ".$conn->connect_error);
}
$sqlQUERY = "INSERT INTO reserva (
    gato_check,
    gato_nome,
    gato_email,
    gato_raca,
    gato_cor,
    gato_pelo,
    gato_pata,
    gato_cauda,
    data_nascimento,
    gato_nacionalidade,
    gato_deficiencia_bool,
    gato_deficiencia,
    gato_vascinacao,
    gato_alergia_bool,
    gato_alergia,
    gato_remedio_bool,
    gato_remadio,
    gato_alimentacao,
    gato_amigavel,
    hotel_andar,
    padrao_quarto,
    banho_quarto,
    hotel_checkin,
    hotel_checkout
) VALUES (
    '{$jsonData["reservaForm"]["gato_check"]}',
    '{$jsonData["reservaForm"]["gato_nome"]}',
    '{$jsonData["reservaForm"]["gato_email"]}',
    '{$jsonData["reservaForm"]["gato_raca"]}',
    '{$jsonData["reservaForm"]["gato_cor"]}',
    '{$jsonData["reservaForm"]["gato_pelo"]}',
    '{$jsonData["reservaForm"]["gato_pata"]}',
    '{$jsonData["reservaForm"]["gato_cauda"]}',
    '{$jsonData["reservaForm"]["gato_nascimento"]}',
    '{$jsonData["reservaForm"]["gato_nacionalidade"]}',
    '{$jsonData["reservaForm"]["gato_deficiencia_bool"]}',
    '{$jsonData["reservaForm"]["gato_deficiencia"]}',
    '{$jsonData["reservaForm"]["gato_vascinacao"]}',
    '{$jsonData["reservaForm"]["gato_alergia_bool"]}',
    '{$jsonData["reservaForm"]["gato_alergia"]}',
    '{$jsonData["reservaForm"]["gato_remedio_bool"]}',
    '{$jsonData["reservaForm"]["gato_remedio"]}',
    '{$jsonData["reservaForm"]["gato_alimentacao"]}',
    '{$jsonData["reservaForm"]["gato_amigavel"]}',
    '{$jsonData["reservaForm"]["gato_andar"]}',
    '{$jsonData["reservaForm"]["gato_quarto"]}',
    '{$jsonData["reservaForm"]["gato_banho"]}',
    '{$jsonData["reservaForm"]["gato_checkin"]}',
    '{$jsonData["reservaForm"]["gato_checkout"]}'
)";
if (mysqli_query($conn,     $sqlQUERY)) {
    echo "new record created sucessfully!";
} else {
    echo "Error: " . $sqlQUERY . "<br>" . $conn->error;
}

$conn->close();
