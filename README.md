# SMTP Tester

Este projeto é uma ferramenta simples para testar credenciais SMTP, permitindo verificar rapidamente se o servidor e as credenciais de e-mail estão configurados corretamente.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Conta de e-mail SMTP válida com host, porta, usuário e senha.

## Configuração

1. Clone este repositório:

   ```bash
   git clone https://github.com/AlexSzefezuk/smtp-tester.git
   cd smtp-tester
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Copie o arquivo `.env.example` para `.env`:

   ```bash
   cp .env.example .env
   ```

4. Abra o arquivo `.env` e configure as variáveis de ambiente com suas credenciais SMTP. Exemplo:

   ```plaintext
   HOST=              # Host SMTP
   PORT=              # Porta SMTP (465 para SSL, 587 para TLS)
   SECURE=            # 'true' para SSL (porta 465), 'false' para TLS (porta 587)
   USER=              # Usuário SMTP (seu e-mail)
   PASSWORD=          # Senha SMTP
   TO=                # Destinatário do e-mail de teste
   ```

   > **Nota**: Certifique-se de preencher corretamente todas as variáveis com as credenciais válidas.

## Envio de E-mail de Teste

Para enviar o e-mail de teste com as credenciais SMTP configuradas, execute:

```bash
npm run send
```

Esse comando envia um e-mail simples para o endereço definido na variável `TO`. Se as credenciais estiverem corretas, o terminal exibirá uma mensagem com o `messageId` do e-mail enviado.

## Estrutura do Projeto

- `index.js`: Arquivo principal do projeto. Configura o transporte SMTP usando `nodemailer` e envia um e-mail de teste com as credenciais do arquivo `.env`.
- `.env`: Arquivo de configuração das variáveis de ambiente. Armazena as credenciais SMTP e o destinatário do e-mail.

## Solução de Problemas

- **Erro de Autenticação (`535`)**: Verifique as credenciais no arquivo `.env`. Certifique-se de que `USER` e `PASSWORD` estão corretos e que não há espaços extras.
- **Erro de Conexão**: Verifique se o host, a porta e a configuração `SECURE` estão corretos e se você tem acesso ao servidor SMTP.