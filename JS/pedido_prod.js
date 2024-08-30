
function pageOnLoad() {
    CatCheckYes.focus()
}

function btnSendOnClick(event) {
    const CatCheckYes = document.getElementById('CatCheckYes');
    const CatCheckNo = document.getElementById('CatCheckNo');
    const Catname = document.getElementById('Catname');
    const CatEmail = document.getElementById('CatEmail')
    const Catrace1 = document.getElementById('Catrace1');
    const Catrace2 = document.getElementById('Catrace2');
    const Catrace3 = document.getElementById('Catrace3');
    const Catrace4 = document.getElementById('Catrace4');
    const Catrace5 = document.getElementById('Catrace5');
    const Catrace6 = document.getElementById('Catrace6');
    const Catcolor = document.getElementById('Catcolor');
    const CatCheckFurr1 = document.getElementById('CatCheckFurr1');
    const CatCheckFurr2 = document.getElementById('CatCheckFurr2');
    const CatPaw = document.getElementById('CatPaw');
    const CatCheckTail1 = document.getElementById('CatCheckTail1');
    const CatCheckTail2 = document.getElementById('CatCheckTail2');
    const CatBirth = document.getElementById('CatBirth');
    const CatNacionality = document.getElementById('CatNacionality');
    const CatAutism1 = document.getElementById('CatAutism1');
    const CatAutism2 = document.getElementById('CatAutism2');
    const CatAutismText = document.getElementById('CatAutismText');
    const CatMeds1 = document.getElementById('CatMeds1');
    const CatMeds2 = document.getElementById('CatMeds2');
    const CatAllergy1 = document.getElementById('CatAllergy1');
    const CatAllergy2 = document.getElementById('CatAllergy2');
    const CatAllergyText = document.getElementById('CatAllergyText');
    const CatPills1 = document.getElementById('CatPills1');
    const CatPills2 = document.getElementById('CatPills2');
    const CatPillsText = document.getElementById('CatPillsText');
    const Catfood1 = document.getElementById('Catfood1');
    const Catfood2 = document.getElementById('Catfood2');
    const Catfood3 = document.getElementById('Catfood3');
    const CatFriendly1 = document.getElementById('CatFriendly1');
    const CatFriendly2 = document.getElementById('CatFriendly2');
    const CatFloor = document.getElementById('CatFloor');
    const CatTypeRoom1 = document.getElementById('CatTypeRoom1');
    const CatTypeRoom2 = document.getElementById('CatTypeRoom2');
    const CatTypeRoom3 = document.getElementById('CatTypeRoom3');
    const CatTypeRoom4 = document.getElementById('CatTypeRoom4');
    const CatBath1 = document.getElementById('CatBath1');
    const CatBath2 = document.getElementById('CatBath2');
    const CatCheckIn = document.getElementById('CatCheckIn');
    const CatCheckOut = document.getElementById('CatCheckOut');
    const form = document.getElementById('form');

    event.preventDefault();

    if (!CatCheckYes.checked && !CatCheckNo.checked) {
        alert("Preenchimento obrigatório: Contem gato?")
        CatCheckYes.focus()
    } else if (CatCheckNo.checked && !CatCheckYes.checked) {
        alert("Necessita de um gato!")
        CatCheckYes.focus()
    } else if (Catname.value == "") {
        alert("Preenchimento obrigatório: Nome do gato")
        Catname.focus()
    } else if (CatEmail.value == "") {
        alert("Preenchimento obrigatório: Email do gato")
        CatEmail.focus()
    } else if (!Catrace1.checked && !Catrace2.checked && !Catrace3.checked && !Catrace4.checked && !Catrace5.checked && !Catrace6.checked) {
        alert("Preenchimento obrigatório: Raça do gato")
        Catrace1.focus()
    } else if (Catcolor.value == "0000ff" || Catcolor.value == "ff0000" || Catcolor.value == "00ff00") {
        alert("Preenchimento obrigatorio: Cor invalida")
        Catcolor.focus()
    } else if (!CatCheckFurr1.checked && !CatCheckFurr2.checked) {
        alert("Preenchimento obrigatório: Pelo do gato")
        CatCheckFurr1.focus()
    } else if (CatPaw.value == "0") {
        alert("Preenchimento obrigatório: Quantidade de patas")
        CatPaw.focus()
    }
}

/*
GATO ✔
RAÇA ✔
COR ✔
PELO ✔
CAUDA
DEFICIENCIA
VACINAÇÃO
ALERGIA
REMEDIO
ALIMENTAÇÃO
PODE SE ENTRUMAR
PADRÃO DO QUARTO
BANHO INCLUSO
*/