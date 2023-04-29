## Objetivo da Aplicação:

> O objetivo da minha aplicação é criar um site de catálogos de filmes com recursos avançados de pesquisa e gerenciamento de listas, com uma interface amigável e responsiva para oferecer aos usuários uma experiência completa e envolvente na busca por novos filmes. Para alcançar esse objetivo, a aplicação será desenvolvida utilizando o framework AdonisJS, o que permitirá um desenvolvimento mais rápido e seguro. Além disso, será implementada uma camada de autenticação para que os usuários possam criar suas próprias contas e terem acesso aos recursos personalizados do site. Os usuários poderão pesquisar filmes por título ou gênero, filtrar os resultados por classificação indicativa, criar e gerenciar suas próprias listas de filmes favoritos, avaliar e comentar sobre os filmes. O site terá um design limpo e moderno para oferecer a melhor experiência possível aos usuários.

## Tecnologias Utilizadas:
- Eslint: é uma ferramenta que ajuda a manter a consistência e a qualidade do código, identificando possíveis erros e problemas em seu código JavaScript.

- Prettier: é um formatador de código que ajuda a manter a consistência do seu código, automatizando a formatação do mesmo.

- AdonisJS: é um framework para o desenvolvimento de aplicativos web em Node.js. Ele oferece uma estrutura robusta e completa para criar aplicativos web escaláveis e seguros.

- Lucid: é o ORM (Object-Relational Mapping) padrão do AdonisJS. Ele fornece uma interface para interagir com o banco de dados, permitindo a criação, consulta, atualização e exclusão de registros em um banco de dados.

- pg: é um pacote Node.js que permite conectar-se e interagir com bancos de dados PostgreSQL.

- phc-argon2: é um pacote Node.js que fornece uma implementação do algoritmo de hashing Argon2, que é considerado um dos algoritmos de hashing mais seguros disponíveis atualmente. É frequentemente utilizado para criptografar senhas em aplicações web.

## Informações Técnicas
- Instalar as dependências:
```
yarn
npm i
```
- Rodar as migrations:
```
node ace migration:run
```
- Como iniciar a aplicação
```
yarn dev
npm run dev
```

### Estrutura de Pastas:

- **app/**: Contém todo o código de lógica de negócios e regras de negócios da aplicação.
- **config/**: Contém as configurações da aplicação, como as configurações de banco de dados e de autenticação.
- **database/**: Contém as migrações de banco de dados e as sementes de dados iniciais.
- **public/**: Contém todos os recursos públicos, como imagens, arquivos CSS e arquivos JavaScript.
- **resources/**: Contém os arquivos de visualização e outros recursos, como traduções e ativos estáticos.
- **routes/**: Contém todas as rotas da aplicação.
- **start/**: Contém o código de inicialização da aplicação, incluindo os arquivos de middleware e os provedores de serviços.
- **test/**: Contém todos os testes da aplicação.

### Padrões utilizados:

- Estrutura MVC
- API RESTFul
