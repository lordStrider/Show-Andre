export const templaCadastrar = `
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="banner-central"></div>
        </div>
    </div>
        <div class="row mt-5">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>Login</h4>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="username" class="form-label visually-hidden">Usuário</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    <input type="text" class="form-control" id="username" placeholder="Usuário">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label visually-hidden">Senha</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                    <input type="password" class="form-control" id="password" placeholder="Senha">
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;