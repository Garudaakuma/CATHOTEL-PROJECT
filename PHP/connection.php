
<?php
$jsonData = json_decode(file_get_contents("../JSON/info-save.json"), true);
print_r($jsonData);
$server_info = [
    "servername"=>"{$jsonData["mySql"]["servername"]}",
    "username"=>"{$jsonData["mySql"]["username"]}",
    "password"=>"{$jsonData["mySql"]["password"]}",
    "database"=>"{$jsonData["mySql"]["database"]}",
    "port"=>"{$jsonData["mySql"]["port"]}"
];

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Ativa o modo de exceções

try {
    $mysqli = new mysqli(
    $server_info['servername'],
    $server_info['username'],
    $server_info['password'],
    $server_info['database']);
    echo 'Conexão bem-sucedida!';
} catch (mysqli_sql_exception $e) {
    // Tratamento de erro
    echo 'Erro na conexão: ' . $e->getMessage();
}

$conn = new mysqli($server_info['servername'],
                   $server_info['username'],
                   "Rock#blues031023",
                   $server_info['database'],
                   $server_info['port']);

if ($conn->connect_error) {
    die('Erro de conexão: ' . $mysqli->connect_error);
} else {
    echo 'Conexão bem-sucedida!';
}