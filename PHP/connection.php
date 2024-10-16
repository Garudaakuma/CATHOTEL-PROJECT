
<?php
print_r($_POST);
$server_info = [
    "server"=>"{$_POST["servername"]}",
    "username"=>"{$_POST["username"]}",
    "password"=>"{$_POST["password"]}",
    "database"=>"{$_POST["database"]}",
    "port"=>"{$_POST["port"]}"
];
$conn = new mysqli($server_info['server'],
                   $server_info['username'],
                   $server_info['password'],
                   $server_info['database'],
                   $server_info['port']);
