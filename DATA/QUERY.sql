CREATE DATABASE cathotel;
USE cathotel;

CREATE TABLE reserva(
    id_reserva INTEGER PRIMARY KEY AUTO_INCREMENT,
    gato_check VARCHAR(255) NOT NULL,
    gato_nome VARCHAR(255) NOT NULL,
    gato_email VARCHAR(255) NOT NULL,
    gato_raca VARCHAR(255) NOT NULL,
    gato_cor CHAR(7) NOT NULL,
    gato_pelo VARCHAR(255) NOT NULL,
    gato_pata VARCHAR(255) NOT NULL,
    gato_cauda VARCHAR(255) NOT NULL,
    data_nascimento VARCHAR(50) NOT NULL,
    gato_nacionalidade VARCHAR(255),
    gato_deficiencia_bool VARCHAR(255) NOT NULL,
    gato_deficiencia VARCHAR(255),
    gato_vascinacao VARCHAR(255) NOT NULL,
    gato_alergia_bool VARCHAR(255) NOT NULL,
    gato_alergia VARCHAR(255),
    gato_remedio_bool VARCHAR(255) NOT NULL,
    gato_remadio VARCHAR(255),
    gato_alimentacao VARCHAR(25) NOT NULL,
    gato_amigavel VARCHAR(255) NOT NULL,
    hotel_andar VARCHAR(25) NOT NULL,
    padrao_quarto VARCHAR(25) NOT NULL,
    banho_quarto VARCHAR(255) NOT NULL,
    hotel_checkin VARCHAR(25) NOT NULL,
    hotel_checkout VARCHAR(25) NOT NULL
);