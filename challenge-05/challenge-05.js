/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, '2', 'três', 'IV', undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
  return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]); //2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function otherFunction(arr,n){
  return arr[n]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherArr = [9,'8',null,[6],{five: 5}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for(i = 0; i < otherArr.length; i++){
  console.log(otherFunction(otherArr,i));
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (bookName) {
  var obj = {
    'hobbit': {
      nome: 'Hobbit',
      quantidadePaginas: 310,
      autor: "J.R.R. Tolkien",
      editora: "Livraria Civilização"
    },
    'deusesAmericanos':{
      nome: 'Deuses Americanos',
      quantidadePaginas: 493,
      autor: "Neil Gaiman",
      editora: "Conrad do Brasil"
    },
    'coraline': {
      nome: "Coraline",
      quantidadePaginas: 163,
      autor: "Neil Gaiman",
      editora: "Rocco Jovens Leitores"
    },
  }
  return !bookName ? obj : obj[bookName]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro " + book('coraline').nome + " tem " + book('coraline').quantidadePaginas + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + book('deusesAmericanos').nome + " é " + book("deusesAmericanos").autor + ".")
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + book("hobbit").nome + " foi publicado pela editora " + book('hobbit').editora + ".")
