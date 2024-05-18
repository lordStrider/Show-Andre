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

    // Consulta SQL para buscar os dados das perguntas no banco de dados
    $sql = "SELECT pergunta, respostas, correta FROM BibliaQuiz";
    
    // Preparar a consulta
    $stmt = $conexao->prepare($sql);
    
    // Executar a consulta
    $stmt->execute();
    
    // Buscar os resultados da consulta
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Enviar os resultados como JSON
    echo json_encode($result);
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}

// Fechar a conexão com o banco de dados
$conexao = null;
?>
