
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>falha na conexão!</title>
    <style>
        * { box-sizing: content-box; }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #121212;
            color: #f0f0f0;
        }
        h1 {text-align: center;}
        .error_connection {
            transition: 0.25s;
            display: flex;
            flex-direction: column;
            padding: 5vh;
            border-radius: 5vh;
        } .error_connection:hover {
            transition: 0.5s;
            background-color: #222222;
        }
        .forms form {
            display: flex;
            flex-direction: column;
            gap: 5vh;
        }
        .inputs {
            display: flex;
            flex-direction: column;
        } .server_input {
            display: flex;
            flex-direction: column;
            align-items: center;
        } .server_input p {
            text-align: center;
        } .server_input input[type=text], input[type=password] {
            padding: 1vh;
            border-radius: 1vh;
        } .pw_inputs {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .bt_form{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2vh;
        } .bt_form input[type=submit] {
            transition: 0.5s;
            font-size: 5vh;
            border-radius: 1vh;
            border-style: none;
            outline: 0.5vh #f0f0f0 solid;
            background-color: #212121;
            color: #f0f0f0;
        } .bt_form input[type=submit]:hover {
            transition: 0.5s;
            scale: 125%;
            background-color: #f0f0f0;
            color: #121212;
        }
    </style>
</head>
<body>
    <section class="error_connection">
        <h1>✖ Falha na conexão! ✖</h1>
        <div class="forms">
        <form name="form" id="form" method="post" action="connection.php">
        <div class="inputs">
            <div class="server_input">
                <p>Server name</p><input type="text" name="servername" id="servername">
            </div>
            <div class="server_input">
                <p>User name</p><input type="text" name="username" id="username">
            </div>
            <div class="server_input">
                <p>Password</p>
                <div class="pw_inputs">
                    <input type="password" name="password" id="password">
                    <input type="checkbox" onclick="togglePassword()" onkeypress="togglePassword()">
                </div>
            </div>
            <div class="server_input">
                <p>Database</p><input type="text" name="database" id="database" value="cathotel">
            </div>
            <div class="server_input">
                <p>Port</p><input type="text" name="port" id="port" value="3306">
            </div>
        </div>
            <div class="bt_form"><input type="submit" value="conectar!"></div>
        </form>
        </div>
    </section>
</body>
<script>
    //show password and hide password
    function togglePassword() {
        const typePw = document.getElementById('password')
        if (typePw.type === "password") {
            typePw.type = "text"
        } else {
            typePw.type = "password"
        }
    }
    //consts
    const servername = document.getElementById('servername')
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const database = document.getElementById('database')
    const port = document.getElementById('port')
    //submit verifying
    document.getElementById('form').addEventListener('submit', (e) => {
        if (servername.value === '' || username.value === '' || password.value === '') {
            alert('Todos os campos devem ser preenchidos.')
            e.preventDefault()
        }
    })
    //regexp validations
    function checkSN(servername) {
        const re = /^[^\d][^\s][\w]+$/
        return re.test(servername)
    }
    function checkUN(username) {
        const re = /^[^\d][^\s][\w]+$/
        return re.test(username)
    }
    function checkPR(port) {
        const re = /^\d{4}$/
        return re.test(port)
    }
    //validate inputs
    servername.addEventListener('input', () => {
        if (!checkSN(servername.value || !(username.value === ''))) {
            servername.style.color = "#ff0000"
        } else {
            servername.style.color = "#121212"
        }
    })
    username.addEventListener('input', () => {
        if (!checkUN(username.value)) {
            username.style.color = "#ff0000"
        } else {
            username.style.color = "#121212"
        }
    })
    port.addEventListener('input', () => {
        if (!checkPR(port.value)) {
            port.style.color = "#ff0000"
        } else {
            port.style.color = "#121212"
        }
    })
</script>
</html>
