# O que é o React?

Lib de JS criado para criação de SPA's.

## Vantagens

* Organização do código em componentes, tudo na página web é um componente.
* O funcionamento de um componente não interfere no outro.
* Cada componente da web pode fazer sua própria requisição para uma API.
* Programação declarativa: solicitamos uma função e o react se encarrega do resto.

## Fundamentos

### Estrutura do código

O arquivo app.js retorna os componentes passados em seu return. O mesmo é renderizado
pelo arquivo index.js utilizando o react DOM, responsável por renderizar todos os
componentes retornados por app.js na div com id="root"(a que engloba nossa aplicação)
presente em index.html

### Renderização

O arquivo app.js é responsável por retornar todos os componentes que desejamos
para nossa aplicação web. O arquivo index.js recebe todos esses componentes e
utiliza função render do react DOM para renderizá-los no arquivo index.html

### JSX

Como escrevemos componentes web como funções JS que retornam um HTML, temos então
o chamado JSX, uma mistura de JS com HTML. Só podemos retornar um único componente
de cada função, portanto usamos a tag fragment <></>

### Propriedades

Como se fossem atributos, no entanto podemos passar propriedades para um
determinado componente a partir de outro componente e receber esse valor por meio
do atributo props do componente receptor.

Props são somente leitura, portanto não crie componentes que alterem props que
chegam, apenas crie lógicas que a implemente na interface. Além disso, as chamadas
funções puras devem ter o mesmo retorno para o mesmo tipo de argumento.

Ou seja, devemos construir componentes(que são funções no JS) de forma a receber
props, mas não alterá-las e continuar produzindo o mesmo retorno com o mesmo tipo
de props.
**TODO COMPONENTE REACT DEVE AGIR COMO UMA FUNÇÃO PURA**

### Estados

Cada componente possui estados de atributos atrelados a ele. Podemos monitorar
os estados de um componente através do useState.

````JS
import { useState } from 'react'

// Retorna um array com o valor e uma função para atualizar o valor
const [ value, setValue ] = useState(initialValue)
````

A função retornada pelo useState é responsável por atualizar o valor da variável,
visto que, pelo conceito da imutabilidade, ela deve ser atualizada dessa forma a fim
de que seja renderizada propriamente na tela, e não apenas com variável = 1 ou coisa
do tipo.

### Fluxo de Dados

O fluxo de dados de componentes em React é unidirecional, do componente pai para
o componente filho.
