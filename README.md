# eTerapias-API

eTerapias-API é o repositório que contem o código utilizado como backend para a aplicação do eTerapias. Conectando a aplicação ao banco de dados e integrando à geração de tokens para acesso à aplicação, salas e outros recursos associados às funcionalidades da aplicação eTerapias.

# Guia de Convenções de Casing

Este documento descreve as convenções de formatação de identificadores (casing) a serem seguidas ao escrever código neste projeto. A consistência no uso de casos específicos ajuda a melhorar a legibilidade e a manutenção do código.

## CamelCase

CamelCase é utilizado para:

- Nomes de variáveis e funções.
  Exemplo: `userName`, `messageId`

- Propriedades de objetos.
  Exemplo: `{ age: 22 }`

## PascalCase

PascalCase é utilizado para:

- Nomes de classes e construtores.
  Exemplo: `User`, `VideoRoom`

## lowercase

lowercase é utilizado para:

- Nomes de pastas.
  Exemplo: `controllers`, `middlewares`

## UPPERCASE

UPPERCASE é reservado para constantes.

- Exemplo: `SERVER_URL`

## Boas Práticas Adicionais

- **Nomes Significativos:** Atribua nomes que expressem claramente a intenção do identificador.

- **Promises e async/await:** Prefira começar o nome de funções que retornam Promises com palavras como "get", "fetch", "load", etc.

- **Linguagem global:** Use sempre inglês nos códigos, com exceção dos comentários.

Exemplo async/await:
```javascript
async function getUserData() {
  // código assíncrono aqui
}
```