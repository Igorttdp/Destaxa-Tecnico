## Iniciando o Projeto

Atenção! Insira o token concedido para o teste técnico no arquivo "next.config.mjs" como no exemplo abaixo:

```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    token: "token_aqui",
  },
};

export default nextConfig;
```

Agora, rode o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para utilizar a aplicação.
