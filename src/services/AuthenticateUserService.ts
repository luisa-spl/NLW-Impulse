import axios from 'axios';

/**
 * Receber code(string)
 * Recuperar acess token no github
 * Verificar se o usuario existe no DB
 * Se sim, gerar token
 * Se não, cria no DB e gera um token
 * Retorna o token com as infos do usuario logado
 */

class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/acess_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            }, 
            headers: {
                "Accept": "application/json"
            }
        })

        return response.data;
    }
}

export { AuthenticateUserService }