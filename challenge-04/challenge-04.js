// # Desafio da semana #4

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

// sempre que declara uma var finalize com ';'
var isTruthy = function (x) {
  return !!x;
};


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(''));
console.log(isTruthy(""));
console.log(isTruthy(NaN));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1));
console.log(isTruthy('1'));
console.log(isTruthy("1"));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy(function () {}));
console.log(isTruthy(1.20));
console.log(isTruthy('0'));
console.log(isTruthy(' '));
console.log(isTruthy(" "));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
  marca: 'Fiat',
  modelo: 'compacto',
  placa: '123ABC',
  ano: 2020,
  cor: 'Vermelho',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

//ajuste para camelCase
carro.mudarCor = function (trocaCor) {
  return carro.cor = trocaCor;
}
console.log(carro.cor);
carro.mudarCor('Azul');
console.log(carro.cor);
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function () {
  return carro.cor;
}
console.log(carro.obterCor());
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {
  return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function () {
  return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

/*
  alterado para os métodos criados acima

  - para tratar propriedades de objetos, é preferível usar
    métodos que lidam com este tratamento
*/
carro.obterMarcaModelo = function () {
  return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();
}
console.log(carro.obterMarcaModelo());
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"

- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"

- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.pessoasCarro = function (entraPessoasCarro) {
  var totalPessoas = carro.quantidadePessoas + entraPessoasCarro;

  if(totalPessoas > carro.assentos){ // as condições agora fazem uso do atributo assento do objeto carro, ao invés de feito na mão com o numero 5
    var pessoasQueCabem = carro.assentos - carro.quantidadePessoas;
    var umaOuMaisPessoas = pessoasQueCabem === 1 ? "pessoa" : "pessoas";
    return "Só cabem mais " + pessoasQueCabem + " " + umaOuMaisPessoas + "!";
  }
  else if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
    return "O carro já está lotado!"
  }
  carro.quantidadePessoas+=entraPessoasCarro; // atribuição após as verificações
  return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor()); // Azul

// Mude a cor do carro para vermelho.
carro.mudarCor("Vermelho");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // Vermelho

// Mude a cor do carro para verde musgo.
console.log(carro.mudarCor("verde musgo"));

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // verde musgo

// Qual a marca e modelo do carro?
// ajuste para marca E model
console.log(carro.obterMarcaModelo()); // Fiat

// Adicione 2 pessoas no carro.
console.log(carro.pessoasCarro(2)); // Já temos 2 pessoas no carro!
// Adicione mais 4 pessoas no carro.
console.log(carro.pessoasCarro(4)); // Só cabem mais 3 pessoas!

// Faça o carro encher.
console.log(carro.pessoasCarro(3)); //Já temos 5 pessoas no carro!


// Tire 4 pessoas do carro.
console.log(carro.pessoasCarro(-4)); //Já temos 1 pessoas no carro!


// Adicione 10 pessoas no carro.
console.log(carro.pessoasCarro(10));//Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas); // 1