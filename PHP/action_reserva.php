
<?php
    print_r($_POST);
    $formPain = [
        "reservaForm"=> [
            "gato_check"=>$_POST["CatCheck"],
            "gato_nome"=>$_POST["Catname"],
            "gato_email"=>$_POST["CatEmail"],
            "gato_raca"=>$_POST["Catrace"],
            "gato_cor"=>$_POST["Catcolor"],
            "gato_pelo"=>$_POST["CatCheckFurr"],
            "gato_pata"=>$_POST["CatPaw"],
            "gato_cauda"=>$_POST["CatCheckTail"],
            "gato_nascimento"=>$_POST["CatBirth"],
            "gato_nacionalidade"=>$_POST["CatNacionality"],
            "gato_deficencia_bool"=>$_POST["CatAutism"],
            "gato_deficiencia"=>$_POST["CatAutismText"],
            "gato_vascinacao"=>$_POST["CatMeds"],
            "gato_alergia_bool"=>$_POST["CatAllergy"],
            "gato_alergia"=>$_POST["CatAllergyText"],
            "gato_remedio_bool"=>$_POST["CatPills"],
            "gato_remedio"=>$_POST["CatPillsText"],
            "gato_alimentacao"=>$_POST["Catfood"],
            "gato_amigavel"=>$_POST["CatFriendly"],
            "gato_andar"=>$_POST["CatFloor"],
            "gato_quarto"=>$_POST["CatTypeRoom"],
            "gato_checkin"=>$_POST["CatCheckIn"],
            "gato_checkout"=>$_POST["CatCheckOut"]
        ]
    ];
    $jsondecode = json_decode(file_get_contents("../JSON/info-save.json"), true);
    print_r($jsondecode);
    echo "<br><br>";
    $arryMerged = $formPain + $jsondecode;
    print_r($arryMerged);
    echo "<br><br>";
    $stringJson = json_encode($arryMerged);
    print_r($stringJson);
    echo "<br><br>";
    file_put_contents("../JSON/info-save.json",$stringJson);
    include "connection.php";
    if ($conn->connect_error ) {
        header("Location: connection_error.php");
        die("Erro na conexão!<br>{$conn->connect_error}");
    } else {echo "conexão efetuada com sucesso!!!<br><br>";}
    /*
{
    "reservaForm": {
        "gato_check":"true",
        "gato_nome":"ABACATE",
        "gato_email":"test@example.us",
        "gato_raca":"Persa",
        "gato_cor":"#11ff00",
        "gato_pelo":"true",
        "gato_pata":"4",
        "gato_cauda":"true",
        "gato_nascimento":"2024-10-03",
        "gato_nacionalidade":"Persa",
        "gato_deficencia_bool":"false",
        "gato_deficiencia":"",
        "gato_vascinacao":"true",
        "gato_alergia_bool":"false",
        "gato_alergia":"",
        "gato_remedio_bool":"false",
        "gato_remedio":"",
        "gato_alimentacao":"Carn\u00edvoro",
        "gato_amigavel":"true",
        "gato_andar":"45",
        "gato_quarto":"Luxo",
        "gato_checkin":"2024-10-10",
        "gato_checkout":"2024-10-24"
    },
    "mySql": {
        "servername":"localhost",
        "username":"root",
        "password":"",
        "database":"cathotel",
        "port":"3306"
    }
}
    */
