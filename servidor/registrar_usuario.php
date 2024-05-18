<?php
// Define a origem cruzada
header('Access-Control-Allow-Origin: *');
require_once("Conexao.php");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conexão com o banco de dados (substitua com suas próprias credenciais)
    $conexao = new mysqli("localhost", "u711956194_cristao", "B1bl14_2023", "u711956194_BibliaQuiz");

    // Verifique se a conexão foi bem-sucedida
    if ($conexao->connect_error) {
        die("Erro de conexão: " . $conexao->connect_error);
    }

    // Recupere os dados do formulário
    $usuario = $_POST["usuario"];
    $senha = password_hash($_POST["senha"], PASSWORD_DEFAULT); // Hash da senha para segurança
    $email = $_POST["email"];

    // Inserir os dados na tabela de usuários
    $sql = "INSERT INTO Usuarios (usuario, senha, email) VALUES (?, ?, ?)";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("sss", $usuario, $senha, $email);

    if ($stmt->execute()) {
        echo "Usuário cadastrado com sucesso!";
    } else {
        echo "Erro no registro: " . $stmt->error;
    }

    // Feche a conexão
    $conexao->close();
}
?>
