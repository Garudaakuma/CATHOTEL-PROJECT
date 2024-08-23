const CatCheck = document.getElementById('CatCheck');
const Catname = document.getElementById('Catname');
const Catrace = document.getElementById('Catrace');
const Catcolor = document.getElementById('Catcolor');
const CatCheckFurr = document.getElementById('CatCheckFurr');
const CatPaw = document.getElementById('CatPaw');
const CatCheckTail = document.getElementById('CatCheckTail');
const CatBirth = document.getElementById('CatBirth');
const CatNacionality = document.getElementById('CatNacionality');
const CatAutism = document.getElementById('CatAutism');
const CatAutismText = document.getElementById('CatAutismText');
const CatMeds = document.getElementById('CatMeds');
const CatAllergy = document.getElementById('CatAllergy');
const CatAllergyText = document.getElementById('CatAllergyText');
const CatPills = document.getElementById('CatPills');
const CatPillsText = document.getElementById('CatPillsText');
const Catfood = document.getElementById('Catfood');
const CatFriendly = document.getElementById('CatFriendly');
const CatFloor = document.getElementById('CatFloor');
const CatTypeRoom = document.getElementById('CatTypeRoom');
const CatBath = document.getElementById('CatBath');
const CatCheckIn = document.getElementById('CatCheckIn');
const CatCheckOut = document.getElementById('CatCheckOut');
const form = document.getElementById('form');


function pageOnLoad() {
    CatCheck.focus()
}

function btnSendOnClick(event) {
    event.preventDefault();

    if (CatCheck.value == "") {
        alert("Preenchimento obrigatório: Gato?")
        CatCheck.focus()
    } else if (CatCheck.value == "2") {
        alert("Necessita de um gato!")
        CatCheck.focus()
    }
    else if (Catname.value == "") {
        alert("Preenchimento obrigatório: Nome do gato")
        Catname.focus()
    }
    else if (Catrace.value == "") {
        alert()
    }
}
