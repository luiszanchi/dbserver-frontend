### Requisitos
- Docker (ultima versão);
- Docker compose (ultima versão);

#### Comando para rodar o projeto na primeira vez
`$ cp .env.example .env && docker-compose build --no-cache && docker-compose up -d`

#### Comando para executar o projeto nas próximas vezes
`$ docker-compose up -d`

#### O que vale destacar no código utilizado?

- Utilização do Vue como FrontEnd
    - Componentização e utilização de templates
- Comunicação via axios ao Backend

#### O que poderia ser feito para melhorar o sistema?
Permitir que o usuário veja a votação em tempo real com a biblioteca `socket.io

#### Algo a mais que você tenha a dizer
Acredito que eu possa ter muitos desafios na DBServer e que possamos crescer em conjunto, espero que esses projetos atendam a espectativa de você leitor/programador
