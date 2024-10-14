CREATE DATABASE cathotel;
USE cathotel;
CREATE TABLE reserva(
    id_reserva INTEGER PRIMARY KEY AUTO_INCREMENT,
    gato_check BOOLEAN NOT NULL,
    gato_nome VARCHAR(50) NOT NULL,
    gato_email VARCHAR(50) NOT NULL,
    gato_raca VARCHAR(50) NOT NULL,
    gato_cor CHAR(7) NOT NULL,
    gato_pata BOOLEAN NOT NULL,
    gato_cauda BOOLEAN NOT NULL,
    data_nascimento DATE NOT NULL,
    gato_nacionalidade VARCHAR(50),
    gato_deficiencia_bool BOOLEAN NOT NULL,
    gato_deficiencia VARCHAR(50),
    gato_vascinacao BOOLEAN NOT NULL,
    gato_alergia_bool BOOLEAN NOT NULL,
    gato_alergia VARCHAR(50),
    gato_remedio_bool BOOLEAN NOT NULL,
    gato_remadio VARCHAR(50),
    gato_alimentacao TINYINT(3) NOT NULL,
    gato_amigavel BOOLEAN NOT NULL,
    hotel_andar TINYINT(60) NOT NULL,
    padrao_quarto TINYINT(4) NOT NULL,
    banho_quarto BOOLEAN NOT NULL,
    hotel_checkin DATE NOT NULL,
    hotel_checkout DATE NOT NULL
);