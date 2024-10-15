
<?php
$server_info = [
    "server"=>"localhost",
    "username"=>"root",
    "password"=>"Rock#blues031023",
    "database"=>"cathotel",
    "port"=>"3306"
];
$server = "localhost";
$username = "root";
$password = "Rock#blues031023";
$dbname = "bd_aula";
$port = "3306";
$conn = new mysqli($server_info['server'],
                   $server_info['username'],
                   $server_info['password'],
                   $server_info['database'],
                   $server_info['port']);
