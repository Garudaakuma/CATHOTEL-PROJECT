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

// ? Birth date ? //
CatBirth.addEventListener("change", () => {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed).toISOString()
    let Today_dmy = [today[8]+today[9], //? Day string
    today[5]+today[6], //? Month String
    today[0]+today[1]+today[2]+today[3]] //? Year String
    let CheckBirth = [CatBirth.value[8]+CatBirth.value[9], //? Day string
    CatBirth.value[5]+CatBirth.value[6], //? Month String
    CatBirth.value[0]+CatBirth.value[1]+CatBirth.value[2]+CatBirth.value[3]] //? Year String

    if (CatBirth.value.length > 10) {
        alert("Valor invalido!")
        CatCheckIn.value = ""
    }
    if (CheckBirth != "") {
        if (Today_dmy[2]-CheckBirth[2] > 18) {
            alert("uh... o gato é imortal?")
            CatBirth.value = ""
            CatBirth.focus()
        } else if (Today_dmy[1]-CheckBirth[1] < 12) {
            alert("O gato é menor de idade")
            CatBirth.value = ""
            CatBirth.focus()
        }
    }
})

// ? yes then ... ? //
CatAutism1.addEventListener("change", () => {
    if (CatAutism1.checked) {
        CatAutismText.style.visibility = "hidden"
    }
}); CatAutism2.addEventListener("change", () => {
    if (CatAutism2.checked) {
        CatAutismText.style.visibility = "visible"
        CatAutismText.value = ""
    }
})
CatAllergy1.addEventListener("change", () => {
    if (CatAllergy1.checked) {
        CatAllergyText.style.visibility = "hidden"
    }
}); CatAllergy2.addEventListener("change", () => {
    if (CatAllergy2.checked) {
        CatAllergyText.style.visibility = "visible"
        CatAllergyText.value = ""
    }
})
CatPills1.addEventListener("change", () => {
    if (CatPills1.checked) {
        CatPillsText.style.visibility = "hidden"
    }
}); CatPills2.addEventListener("change", () => {
    if (CatPills2.checked) {
        CatPillsText.style.visibility = "visible"
        CatPillsText.value = ""
    }
}) // ? yes then ... ? //

CatPaw.addEventListener("change", () => {
    if (CatPaw.value > 4) {
        CatPaw.value = 4
    } else if (CatPaw.value < 0) {
        CatPaw.value = 0
    }
})

CatFloor.addEventListener("change", () => {
    if (CatFloor.value > 60) {
        CatFloor.value = 60
    } else if (CatFloor.value < 0) {
        CatFloor.value = 0
    }
})

//? Date start
CatCheckIn.addEventListener("change", () => {
    let CheckIn_dmy = [CatCheckIn.value[8]+CatCheckIn.value[9], //? Day string
    CatCheckIn.value[5]+CatCheckIn.value[6], //? Month String
    CatCheckIn.value[0]+CatCheckIn.value[1]+CatCheckIn.value[2]+CatCheckIn.value[3]] //? Year String

    let CheckOut_dmy = [CatCheckOut.value[8]+CatCheckOut.value[9], //? Day string
    CatCheckOut.value[5]+CatCheckOut.value[6], //? Month string
    CatCheckOut.value[0]+CatCheckOut.value[1]+CatCheckOut.value[2]+CatCheckOut.value[3]] //? Year string

    if (CatCheckIn.value.length > 10) {
        alert("Valor invalido!")
        CatCheckIn.value = ""
    }
    if (CatCheckIn.value != "" && CatCheckOut.value != "") {
        if (CheckIn_dmy[2] > CheckOut_dmy[2]) {
            alert("Invalid year checkIn!")
            CatCheckIn.value = ""
            CatCheckIn.focus()
        } else if (CheckIn_dmy[1] > CheckOut_dmy[1] && CheckIn_dmy[2] >= CheckOut_dmy[2]) {
            alert("Invalid month checkIn!")
            CatCheckIn.value = ""
            CatCheckIn.focus()
        } else if (CheckIn_dmy[0] > CheckOut_dmy[0] && CheckIn_dmy[1] >= CheckOut_dmy[1] && CheckIn_dmy[2] >= CheckOut_dmy[2]) {
            alert("Invalid day checkIn!")
            CatCheckIn.value = ""
            CatCheckIn.focus()
        }
    }
})
//? Date end
CatCheckOut.addEventListener("change", () => {
    let CheckIn_dmy = [CatCheckIn.value[8]+CatCheckIn.value[9], //? Day string
    CatCheckIn.value[5]+CatCheckIn.value[6], //? Month String
    CatCheckIn.value[0]+CatCheckIn.value[1]+CatCheckIn.value[2]+CatCheckIn.value[3]] //? Year String

    let CheckOut_dmy = [CatCheckOut.value[8]+CatCheckOut.value[9], //? Day string
    CatCheckOut.value[5]+CatCheckOut.value[6], //? Month string
    CatCheckOut.value[0]+CatCheckOut.value[1]+CatCheckOut.value[2]+CatCheckOut.value[3]] //? Year string

    if (CatCheckOut.value.length > 10) {
        alert("Valor invalido!")
        CatCheckOut.value = ""
    }
    if (CatCheckIn.value != "" && CatCheckOut.value != "") {
        if (CheckIn_dmy[2] > CheckOut_dmy[2]) {
            alert("Invalid year checkOut!")
            CatCheckOut.value = ""
            CatCheckOut.focus()
        } else if (CheckIn_dmy[1] > CheckOut_dmy[1] && CheckIn_dmy[2] >= CheckOut_dmy[2]) {
            alert("Invalid month checkOut!")
            CatCheckOut.value = ""
            CatCheckOut.focus()
        } else if (CheckIn_dmy[0] > CheckOut_dmy[0] && CheckIn_dmy[1] >= CheckOut_dmy[1] && CheckIn_dmy[2] >= CheckOut_dmy[2]) {
            alert("Invalid day checkOut!")
            CatCheckOut.value = ""
            CatCheckOut.focus()
        }
    }
})

function pageOnLoad() {
    CatCheckYes.focus()
}

function btnSendOnClick(event) {
    event.preventDefault();

    if (!CatCheckYes.checked && !CatCheckNo.checked) {
        alert("Preenchimento obrigatório: Contem gato?")
        CatCheckYes.focus()
    } else if (CatCheckNo.checked && !CatCheckYes.checked) {
        alert("Necessita de um gato!")
        CatCheckYes.focus()
    } else if (Catname.value == "") { //Todo: Regex
        alert("Preenchimento obrigatório: Nome do gato")
        Catname.focus()
    } else if (CatEmail.value == "") { //Todo: Regex
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
    } else if (!CatCheckTail1.checked && !CatCheckTail2.checked) {
        alert("Preenchimento obrigatorio: O gato possui cauda?")
        CatCheckTail1.focus()
    } else if (CatBirth.value == "") {
        alert("Preenchimento obrigatorio: Data de nascimento do gato")
        CatBirth.focus()
    } else if (CatNacionality.value == "") {  //Todo: Regex
        alert("Preenchimento obrigatorio: Nacionalidade")
        CatNacionality.focus()
    } else if (!CatAutism1.checked && !CatAutism2.checked || CatAutismText.value == "") { //Todo: Regex
        alert("Preenchimento obrigatorio: Deficiencia")
        CatAutism1.focus()
        CatAutismText.set
    } else if (!CatMeds1.checked && !CatMeds2.checked) {
        alert("Preenchimento obrigatorio: Vacinação em dia")
        CatMeds1.focus()
    } else if (!CatMeds2.checked) {
        alert("A vacinação do gato precisa estar em dia!!")
        CatMeds1.focus()
    } else if (!CatAllergy1.checked && !CatAllergy2.checked) { //Todo: Regex
        alert("Preenchimento obrigatorio: Possui alergia")
        CatAllergy1.focus()
    } else if (!CatPills1.checked && !CatPills2.checked || CatPillsText.value == "") { //Todo: Regex
        alert("Preenchimento obrigatorio: Toma remedios")
        CatPills1.focus()
    } else if (!Catfood1.checked && !Catfood2.checked && !Catfood3.checked) {
        alert("Preenchimento obrigatorio: Alimentação")
        Catfood1.focus()
    } else if (!CatFriendly1.checked && !CatFriendly2) {
        alert("Preenchimento obrigatorio: é possivel enturmar com outros gatos")
        CatFriendly1.focus()
    } else if (CatFloor.value == 0) {
        alert("Preenchimento obrigatorio: qual andar")
        CatFloor.focus()
    } else if (!CatTypeRoom1.checked && !CatTypeRoom2.checked && !CatTypeRoom3.checked && !CatTypeRoom4.checked) {
        alert("Preenchimento obrigatorio: Padrão do quarto")
        CatTypeRoom1.focus()
    } else if (!CatBath1.checked && !CatBath2.checked) {
        alert("Preenchimento obrigatorio: Banho incluso")
        CatBath1.focus()
    } else if (!CatCheckIn.value == "") {
        alert("Preenchimento obrigatorio: CheckIn do gato")
        CatCheckIn.focus()
    } else if (!CatCheckOut.value == "") {
        alert("Preenchimento obrigatorio: CheckOut do gato")
        CatCheckOut.focus()
    }
}

function nameCheck(name) {
    const re = /^([A-Z])\w$/g
}

/* //TODO: ✔
GATO                ✔  |
RAÇA                ✔  |
COR                 ✔  |
PELO                ✔  |
CAUDA               ✔  |
DEFICIENCIA         ✔  |
VACINAÇÃO           ✔  |
ALERGIA             ✔  |
REMEDIO             ✔  |
ALIMENTAÇÃO         ✔  |
PODE SE ENTRUMAR    ✔  |
PADRÃO DO QUARTO    ✔  |
BANHO INCLUSO       ✔  |
*/