// # Desafio da semana #2

// Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:


// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function func(x,y){
  return x+y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var funcSoma = func(10,10) + 5;

// Qual o valor atualizado dessa variável?
console.log(funcSoma);


// Declare uma nova variável, sem valor.
var nada;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function vida(){
  nada = 'TUDO'
  return console.log('O valor da variável agora é ' + nada);
}

// Invoque a função criada acima.
vida();

// Qual o retorno da função? (Use comentários de bloco).
// console.log(vida());

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

/*minha função e a dele são a mesma*/
function varios(x,y,z){
  if(x === undefined || y === undefined || z === undefined ){
    return console.log('Preencha todos os valores corretamente!');
  }
  return console.log('Resolução do instrutor:',(x*y*z) + 2);
}
/*eu poderia alterar para um condição mais limpa*/
function varios1(x,y,z){
  if(!x || !y || !z){
    return console.log('Preencha todos os valores corretamente!');
  }
  return console.log('Minha resolução simplificada:',(x*y*z) + 2);
}
varios(5,5,5); // resolução do instrutor
varios1(5,5,5);// minha resolução fora da condição
varios1(5,5);// minha resolução entrando na condição

// Invoque a função criada acima, passando só dois números como argumento.
varios(1,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// a função varios retorna a string Preencha todos os valores corretamente!, pois a validação deu false

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
varios(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//verdadeiro, pois a validação é igual a true

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function variosOutros(x,y,z) {
  if (x && !y && !z){
    return x;
  } else if ((x && y ) && !z){
    return x+y;
  } else if (x && y && z ){
    return (x+y)/z;
  } else if (!x || !y || !z){
    return false;
  }
  return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(variosOutros(2));
console.log(variosOutros(2,3));
console.log(variosOutros(2,3,4));
console.log(variosOutros());
