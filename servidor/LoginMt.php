<?php
// Define a origem cruzada
header('Access-Control-Allow-Origin: *');

// Verifica se o valor de notify_token foi postado
if(isset($_POST['notify_token'])) {

    // Recupera os dados do usuário a partir da requisição
    $id = $_POST['id'];
    $senha = $_POST["senha"];
    $email = $_POST['email'];
    $user_name = $_POST['user_name'];
    $notify_token = $_POST['notify_token'];

    // Chama a função para atualizar o valor de notify_token na tabela de usuários
    updateNotifyToken($user_name, $senha, $notify_token);

    // Termina a execução do script
    exit();
}

// Função para atualizar o valor de notify_token na tabela de usuários
function updateNotifyToken($user_name, $senha, $notify_token) {
    // Inclui o arquivo de conexão com o banco de dados
    require_once("Conexao.php");

    // Executa a consulta SQL para atualizar o valor de notify_token na tabela de usuários
    $sql = "UPDATE Usuarios SET notify_token = '$notify_token' WHERE usuario = '$user_name' AND senha = '$senha'";
    $result = $conn->query($sql);

    // Verifica se a consulta foi bem-sucedida
    if ($result === FALSE) {
        echo "Erro ao inserir na tabela de usuários: " . $conn->error;
    } else {
        // Executa a função de callback
        $sql = "SELECT * FROM Usuarios WHERE usuario = '$user_name'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            $hash = $user['senha'];
            
            if (password_verify($senha, $hash)) {

                $json = array(
                    'user_id'=> $user['id'],
                    'success' => "Autorizado!",
                    'username' => $user_name,
                    
                );
    
            echo json_encode($json);

                echo 'A senha está correta!';
            } else {
                echo $hash;
            }
        } else {
            echo "Não autorizado";
        }
    }

    // Fecha a conexão
    $conn->close();
}


?>