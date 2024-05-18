<?php
// Configurar as credenciais do banco de dados
header('Access-Control-Allow-Origin: *');
// Permite receber conteúdo codificado
header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
require_once("Conexao.php");

try {
    // Crie uma conexão com o banco de dados usando PDO
    $conexao = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    // Defina o modo de erro para exceção (para tratar erros de forma apropriada)
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Receba os dados do formulário
    $data = json_decode(file_get_contents("php://input"));

    // Prepare a consulta SQL para inserção dos dados
    $stmt = $conexao->prepare("INSERT INTO BibliaQuiz (perguntas, respostas, correta, referencia, dificuldade) VALUES (:perguntas, :respostas, :correta, :referencia, :dificuldade)");

    // Vincule os parâmetros
    $stmt->bindParam(':perguntas', $data->perguntas);
    $stmt->bindParam(':respostas', implode("|", $data->respostas));
    $stmt->bindParam(':correta', implode("|", $data->correta));
    $stmt->bindParam(':referencia', $data->referencia);
    $stmt->bindParam(':dificuldade', $data->dificuldade);

    // Execute a consulta
    $stmt->execute();

    echo "Pergunta cadastrada com sucesso!";
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}

// Feche a conexão com o banco de dados
$conexao = null;
?>
