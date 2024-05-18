<?php
// Dados para conexão com o banco de dados
$servername = "localhost";
$username = "u711956194_cristao";
$password = "B1bl14_2023";
$dbname = "u711956194_BibliaQuiz";


// Conecta ao banco de dados
$conexao = new mysqli($servername, $username, $password, $dbname);

// Verifica se ocorreu algum erro na conexão
if ($conexao->connect_error) {
    die("Erro de conexão com o banco de dados: " . $conn->connect_error);
}
