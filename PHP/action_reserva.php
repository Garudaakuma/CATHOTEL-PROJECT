
<?php
    include "connection.php";
    if ($conn->connect_error) {
        die("Erro na conexão!<br>{$conn->connect_error}");
        header("Location: connection_error.php");
    } else {echo "conexão efetuada com sucesso!!!<br><br>";}
?>
