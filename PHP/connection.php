
<?php
print_r($_POST);
$server_info = [
    "server"=>"localhost",
    "username"=>"root",
    "password"=>"********",
    "database"=>"cathotel",
    "port"=>"3306"
];
$conn = new mysqli($server_info['server'],
                   $server_info['username'],
                   $server_info['password'],
                   $server_info['database'],
                   $server_info['port']);
