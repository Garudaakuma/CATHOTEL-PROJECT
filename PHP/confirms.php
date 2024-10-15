
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ENVIO COM SUCESSO!</title>
</head>
<body style="background-color: #eeeeee;">
    <?php
    include "connection.php";
    if ($conn->connect_error) {
        die("Erro na conexão!<br>{$conn->connect_error}");
    } else {
        echo "conexão efetuada com sucesso!!!<br><br>";
    }
    ?>
</body>
</html>
