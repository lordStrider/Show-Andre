<?php
// Define a origem cruzada
header('Access-Control-Allow-Origin: *');

/* inicio codigo jwt */
require_once __DIR__ . '/vendor/autoload.php'; // Carrega a biblioteca JWT

use Firebase\JWT\JWT;

// Função para gerar um device token
function generateDeviceToken($username, $password) {
    // Chave secreta para a assinatura do token
    $secretKey = 'skljaksdj9983498327453lsldkjf';

    // Configurações do token
    $issuedAt = time(); // Data de emissão do token (timestamp atual)
    $expirationTime = strtotime('+1 year'); // Data de expiração do token (1 ano a partir da data atual)

    // Dados do token
    $tokenData = array(
        'username' => $username,
        'password' => $password,
        'iat' => $issuedAt, // Emitido em
        'exp' => $expirationTime // Expira em
    );

    // Gera o token
    $token = JWT::encode($tokenData, $secretKey, 'HS256');

    return $token;
}

// Função para inserir um usuário no banco de dados
function insertUsuario($id, $senha, $device_token, $email, $user_name) {
// Inclui o arquivo de conexão com o banco de dados
    require_once("Conexao.php");
   
    $sql = "SELECT * FROM usuarios WHERE user_name = '$senha' LIMIT 1";
    $result = $conn->query($sql);

    // Verifica se houve erro na conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    // Verifica se o userName já existe na tabela "usuario"
    $sql = "SELECT * FROM usuarios WHERE user_name = '$user_name' LIMIT 1";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $json = array(
            'success' => false,
            'message' => "Nome de usuário já existe.!"
        );
        echo json_encode($json);
    } else {
        // Verifica se o email já existe na tabela "usuario"
        $sql = "SELECT * FROM usuarios WHERE email = '$email' LIMIT 1";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $json = array(
            'success' => false,
            'message' => "Este e-mail já existe!"
        );
        echo json_encode($json);
        } else {
        
    // Insere o usuário na tabela "usuario"
    $sql = "INSERT INTO usuarios (id, senha, device_token, email, user_name) VALUES ('$id', '$senha', '$device_token', '$email', '$user_name')";
    $json = array(
            'success' => true,
            'message' => "Inserido com sucesso!",
            'username' => $user_name,
            'senha' => $senha,
            'device_token' => $device_token
        );

        echo json_encode($json);
    }
}
    if ($conn->query($sql) === FALSE) {
        echo "Erro ao inserir usuário: " . $conn->error;
    }

    // Fecha a conexão
    $conn->close();

}

// Recupera os dados do usuário a partir da requisição
$id = $_POST['id'];
$senha = $_POST['senha'];
$email = $_POST['email'];
$user_name = $_POST['user_name'];
$device_token = generateDeviceToken($user_name, $senha);

// Chama a função para inserir o usuário no banco de dados
insertUsuario($id, $senha, $device_token, $email, $user_name);

?>