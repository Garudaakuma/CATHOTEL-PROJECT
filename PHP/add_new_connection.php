
<?php
$jsonDataDecoded = json_decode(file_get_contents("../JSON/info-save.json"), true);
$jsonDataDecoded['mySql'] = $_POST;
print_r($jsonDataDecoded);
file_put_contents("../JSON/info-save.json", json_encode($jsonDataDecoded));
header("Location: connection.php");
