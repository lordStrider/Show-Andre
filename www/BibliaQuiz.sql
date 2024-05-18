-- CREATE TABLE BibliaQuiz (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     titulo VARCHAR(255),
--     perguntas VARCHAR(255),
--     resposta VARCHAR(2),
--     dificuldade VARCHAR(10)
-- );
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(255),
    senha VARCHAR(255),
    email VARCHAR(255) UNIQUE
);
