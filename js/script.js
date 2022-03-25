// AULA 12 - MANIPULANDO ATRIBUTOS


//function trocarImagem(filename, animalName){

//     console.log(document.querySelector(".imagem"));
//     document.querySelector(".imagem").setAttribute("src","img/" + filename);
    

//     document.querySelector(".imagem").setAttribute("data-animal",  animalName);


// }

// function pegarAnimal(){


//     let animal = document.querySelector(".imagem").getAttribute("data-animal");

//     alert("O animal é: " + animal);

// }

// AULA 13 - MANIPULANDO ATRIBUTOS

// .offsetHeight, offsetWidth  -> Pega a largura do elemento, margin, padding e scrooll


// .clientHeight, clienteWidth  -> Pega a largura do elemento e padding

// .scrollHeight, clienteWidth  -> Pega a largura do elemento e padding


// AULA 13 - SCROLL


// Quando for utilizar o scroll da própria página é utilizado o objeto window

// AULA 14 - SCROL EXERCÍCIO 

// function subirTela(){

//     window.scrollTo({
//         top: 0, 
//         left: 0, 
//         behavior: "smooth"
//     });
// }


// AULA 1 - CLIQUE  

function clicou(){

    document.getElementById("titulo").innerHTML = "obrigado";


}

// AULA 6 e 7 - OBJETO  


// let carros = [
//     {nome:'A', modelo:"Modelo 1"},
//     {nome:'B', modelo:'Modelo 1'},
//     {nome:'C', modelo:'Modelo 1'},
    
    
// ];

// // console.log(carros[2].nome);

// // AULA 6 e 7 - FOR

// //FOR LOOP

// // let texto = '';

// // for(let i = 0; i <= 50; i++){

// //     texto += i + '<br>';

// // }

// //FOR LOOP ARRAY

// let carros = ['A', 'B', 'C'];
// let html = '<ul>';

// for(let i in carros){

//     html += '<li>' + carros[i] +'</li>'

// }


//  html += '</ul>';

// document.getElementById('demo').innerHTML = html;

// // MÓDULO 4, AULA 3 - MANIPULAÇÃO DE STRINGS


// indexOf(busca); // Buscar informações em uma string, @busca[busca a string passada].
// substr(inicio, qtdCaractere); // Extrai informações de uma string, @inicio[onde começa a capturar a string], @qtdCaractere[quantos caracteres serão extraidos]
// replace(busca, substituto); // Buscar e substituir informações de uma string[copia do mesmo], @busca[captura a string], @substituto[substitui a variavel]
// toUpperCase(); // Transforma em maíusculo
// toLowerCase(); // Tranformar em minúsculo
// trim() // Remove todos espaços de uma string
// charAt(); // Busca um caractere
// split(); // Divide uma string em um array


// let nome = "Felipe Mascarenhas de Oliveira Souza";


// nome = nome.replace("Felipe", "João");

// console.log(nome);

// // MÓDULO 4, AULA 4 - MANIPULAÇÃO DE NÚMEROS

// toString(); // Formata para string
// toFixed(); // Formata o número de acordo com a quantidade decimais desejados
// parseInt(); // Formata string para número;
// parseFloat(); // Formata string para número e conserva os números decimais;


// let n = 10.123;

// let res = n.toFixed(0);

// console.log(res);


// // MÓDULO 4, AULA 5 a 8 - MANIPULAÇÃO DE ARRAYS

// toString(); // Formata um array para string separado por vírgula.
// join(itemDivisor); // Formata um array para string separado por vírgula. @itemDivisor[Formata para string  com string divisora]
// indexOf() // Busca por value dentro do indice, o retorno é número do indice, caso retorne false o valor é -1.
// pop(); // Remove o ultimo elemento do array.
// shift(); // Remove o primeiro o elemento do array; 
// push(); // Adiciona o item no final do array;
//delete() // Remove o valor do indice selecionado;
// splice() // Remove um item específico do array, primeiro parametro é posição do item selecionado, e o segundo é quantidade elementos que será removido;
// concat(); // Junta dois arrays; 
// sort(); //Ordena em ordem alfabética crescente
// reverse() // Ordena em ordem descrecente alfabética
// // map() // Tem como escopo uma função // Vai percorrer um array e executa uma função 
// filter(); // Tem como escopo uma função // Vai percorrer um array e executar a função e retornar caso seja true;
// every(); // Verifica todos os elementos do array e retorna um unico valor sendo true ou false, contudo todos devem atender a mesma condição e então retonará true ou false;
// some(); // Verifica todos os elementos do array e retorna um unico valor sendo true ou false, contudo se houver pelo menos elemento com a condição então retornará true;
// find(); // Verifica todos os elementos do array e retorna o valor encontrado.
// findIndex(); // Verifica todos os elementos do array e retorna o indice.



// let lista = [
//     {
//     nome:'Felipe', 
//     id: 1

//     }, 
//     {
//     nome: 'Jose',
//     id:2

//     },
//     {
//     nome: 'Fábio',
//     id:2

//     }



// ];

// lista2 = [];

// idUsuario = lista.find(function(item){

//     return (item.id == 2)? true: false;
    
// });



// console.log(idUsuario);



// let n = 10.123;

// let res = n.toFixed(0);

// console.log(res);


// // MÓDULO 4, AULA 9 a 11 - MANIPULAÇÃO DE DATAS


//  toDateString(); // Formata a string data  dia, nome do mês e ano.
//  toUTCString(); // Formata a string data dia, nome do mês e ano com o fuso horário de GMTs.
//  getFullYear(); // Formata a string data dia, nome do mês e ano com o fuso horário de GMTs.
//  getMonth(); // Pega o mês
//  getDay(); // Pega o dia da semana.
//  getDate(); // Pega o dia .
//  getHours(); // Pega o dia .
//  getMinutes(); // Pega os minutos .
//  getTime(); // Pega os timeStamp .
//  now(); // Pega os timeStamp.

// setFullYear(); // Altera o ano
// setMonth(); // Alterar o mês
// setDate(); // Alterar o mês

// // // MÓDULO 4, AULA 15 - TEMPLATE STRING

// SERVE PARA CONCATENAR STRINGS DE MANEIRA MAIS LEGÍVEL

// let nome = 'Felipe';
// let idade = 25;

// let frase = `Meu nome é ${nome} e eu tenho ${idade} de idade, ano que vem irei fazer ${idade + 1}`;

// console.log(frase);



// // // MÓDULO 4, AULA 16 - DESCONTRUINDO OBJETOS


// let pessoa = {

//     nome : 'Felipe',
//     sobrenome: 'Mascarenhas',
//     idade: 90,
//     social: {
//         facebook:'b7web',
//         instagram: 'Felipe'
//     },
//     nomeCompleto: function (){
//         return `${this.nome} ${this.sobrenome}`;
//     } 

    
//};

//let {nome:NomeCliente, sobrenome, jogos = 105} = pessoa;




//console.log(pessoa.nome, sobrenome, jogos);



// // // MÓDULO 4, AULA 17 - DESCONTRUINDO OBJETOS

// let pessoa = {

//     nome : 'Felipe',
//     sobrenome: 'Mascarenhas',
//     idade: 90,
//     social: {
//         facebook:'b7web',
//         instagram: {
//             url:'@mascarenhas',
//             seguidores: 1000
//         }
//     },
//     nomeCompleto: function (){
//         return `${this.nome} ${this.sobrenome}`;
//     } 

    
// };

// let {facebook, instagram} = pessoa.social;


// function pegarNomeCompleto({nome, sobrenome, cidade = "Lem", social:{instagram:{url:instagram}} }){




//     return `${nome} ${sobrenome} (Siga em ${instagram})`;

// }



// console.log(pegarNomeCompleto(pessoa));


// // // MÓDULO 4, AULA 18 - DESCONTRUINDO ARRAYS

// let info = ['Felipe', 'Marcelo', 'Lucas', 'Marlon', "@felipe"];


// let [nome, , , , instagram ] = info;

// console.log(nome, + ' '  + instagram);

// MÓDULO 4, AULA 19 - ARROW FUNCTIONS


// let somar = (x, y) => x +y;

// console.log(somar(10, 15));

// MÓDULO 4, AULA 20 - OPERADOR SPREAD

// let numeros = [1,2,3,4];

//  numeros = [...numeros, 5,6,7,8];

// let info = {
//     nome:"Felipe",
//     sobrenome: 'Lacerda',
//     idade: 500
// }

// info = {
//     ...info,
//     cidade:'Luís Eduardo Magalhães',
//     estado:'Bahia'

// }


// console.log(info);

// MÓDULO 4, AULA 21 - OPERADOR REST





// function adicionar(nomes, ...novosNomes){

//     let novoConjunto = [
//         ...nomes, 
//         ...novosNomes
//     ];

//     return novoConjunto;
  
// }


// let nomes = ["Felipe", "João"];

// let outros = adicionar(nomes, "Antonio", "Maria", "José");


// console.log(outros);

// MÓDULO 4, AULA 21 - INCLUDES E REPEATS

// let = lista = ['ovo', 'caf  é', 'arroz', 'feijão'];

// let nome = 'Bonieky';


// console.log(nome.includes('b'));


// console.log('x'.repeat(10));


// MÓDULO 4, AULA 23 - OBJETO: KEY, VALUES E ENTRIES

// let lista = ['feijão', 'arroz'];
// let pessoa = {

//     nome: "felipe",
//     sobrenome: "mascarenhas"

// };


// console.log(Object.entries(pessoa));


// MÓDULO 4, AULA 24 - String, padStart, padEnd
// padEnd(9, '*') Serve para preencher com string um número predefinido de caracteres


// let cartao = '4050102040587898';
// let lastDigits = cartao.slice(-4);


// let cartaoMascarado = lastDigits.padStart(16, '*');


// console.log(cartaoMascarado);


// MÓDULO 5, AULA 04 -  JSON.stringify e JSON.parse


// JSON.parse() // Tranforma string para json (objeto)
// JSON.stringify() // Tranforma objeto em string;

// let info = {
//     nome:"Felipe",
//     sobrenome: 'Lacerda',
//     idade: 500
// }

// info = JSON.stringify(info);

// info = JSON.parse(info);


// // var teste = JSON. parse('{"nome" : "Bonieky", "idade":90}');


// console.log(teste);


// MÓDULO 5, AULA 05 -  Assíncrono e síncrono

// MÓDULO 5, AULA 06 -  Callback

// MÓDULO 5, AULA 07 -  Promise

//CRIANDO PROMISE
// function pegarTemperatura(){
//     return new Promise(function(resolve, reject) {
       
//         console.log("pegando temperatura...");



//         setTimeout (function(){
//             resolve('40 na sombra');
//         }, 2000);



//     });

// }
// console.log("Antes");
// //USANDO UMA PROMISE
// let temp = pegarTemperatura();

// console.log("Durante");

// temp.then(function(resultado){
//     console.log("Temperatura: " + resultado);
// });

// temp.catch(function(){

//     console.log("Eita, deu errado !");

// });

// console.log("Ddepois");



// MÓDULO 5, AULA 08, 09 e 10-  Fetch
//Requisição sem Async/await
//  function loadPosts(){


//     // Sem await
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(function(resultado){

//             //A função json retorna uma promisse, portanto é necessário fazer um then junto a outro then
//            return resultado.json();



//         }).then(function(json){
            
            

//             console.log(json);

//             montarBlog(json);


//         })
//         .catch(function(error){

//             console.log(error);

//         });
// }


// //Requisição de Async e com await
// async function loadPosts(){

//     document.getElementById("posts").innerHTML = "Carregando";

//     let req = await fetch('https://jsonplaceholder.typicode.com/posdts');
//     let json = await req.json();
//     montarBlog(json);


// }


// //Exibe as informações 
// function montarBlog(lista){

//     let html = '';


//     for(let i in lista){

//         html += '<h3>' + lista[i].title + '</h3>';
//         html +=  lista[i].body+'<br>';
//         html += '<hr>';

  

//     }

//     document.getElementById("posts").innerHTML = html;

// }


// MÓDULO 5, AULA 11-  Fetch com POST

// async function inserirPost(){

//     document.getElementById("posts").innerHTML = "Carregando ...."; 

//     let req = await fetch("https://jsonplaceholder.typicode.com/posts",{
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Título de teste',
//             body: 'Corpo de teste',
//             userId: 13
//         }),
//         header:{
//             'Content-Type':'application/json'
//         }
//     });


    
//     let json = await req.json();

//     console.log(json);

// }




// let info = {
//     nome:"Felipe",
//     sobrenome: 'Lacerda',
//     idade: 500
// }

function Clicou(){

    console.log("Legal");
}