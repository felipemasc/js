let modalQt = 1;
let cart = [];
let modalKey = 0;


const c = function(el){

    return document.querySelector(el);


};

const cs = function(el){

    return document.querySelectorAll(el);

};


//Listagem do conteúdo
pizzaJson.map(function(item, index){


    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML =  `R$ ${ item.price.toFixed(2) }`;
    pizzaItem.querySelector('.pizza-item--img img').src =  item.img;

    pizzaItem.querySelector('a').addEventListener('click', function(e){
      e.preventDefault();





      let key = e.target.closest('.pizza-item').getAttribute('data-key');
      modalQt = 1;

      modalKey = key;




 


      c('.pizzaBig img').src = pizzaJson[key].img;
      c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
      c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
      c('.pizzaInfo--actualPrice').innerHTML =  `R$ ${ pizzaJson[key].price.toFixed(2) }`;

      c('.pizzaInfo--size.selected').classList.remove('selected');

      cs('.pizzaInfo--size').forEach(function(size, sizeIndex){

        if(sizeIndex == 2){
          size.classList.add('selected');
        }
        size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
      });

      c('.pizzaInfo--qt').innerHTML = modalQt;
  

      c('.pizzaWindowArea').style.opacity = 0;
      c('.pizzaWindowArea').style.display = 'flex';

      setTimeout(function(){

        c('.pizzaWindowArea').style.opacity = 1;

      }, 200);
    

    });

    c('.pizza-area').append(pizzaItem);


});

//Eventos do modal

function closeModal(){

  c('.pizzaWindowArea').style.opacity = 0;

  setTimeout(function(){

    c('.pizzaWindowArea').style.display = 'none';
  }, 500);

}

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach(function(item){

  item.addEventListener('click', closeModal);

});

c('.pizzaInfo--qtmenos').addEventListener('click', function(){

 

  if(modalQt > 1){

    modalQt--;

    c('.pizzaInfo--qt').innerHTML = modalQt;

  }
   

});

c('.pizzaInfo--qtmais').addEventListener('click', function(){

  modalQt++;

  c('.pizzaInfo--qt').innerHTML = modalQt;



});

//VERIFICA O TAMANHO DA PIZZA
cs('.pizzaInfo--size').forEach(function(size, sizeIndex){

  size.addEventListener('click', function(e){

    c('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');

  });

});

//ADICIONA AO CARRINHO
c('.pizzaInfo--addButton').addEventListener('click', function(){


  let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));

  let identifier =  pizzaJson[modalKey].id + '@' + size;

  let key = cart.findIndex(function(item){

    return item.identifier == identifier;

  });

  if(key > -1){

    cart[key].qt += modalQt;


  }else{

    cart.push({
      identifier,
      id:pizzaJson[modalKey].id,
      size,
      qt:modalQt
  
    });


  }

  updateCart();
  closeModal();


});

function updateCart(){


  if(cart.length > 0){

    c('aside').classList.add('show');

    c('.cart').innerHTML = "";

    for(let i in cart){

      let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id);

      let cartItem = c('.models .cart--item').cloneNode(true);


      let pizzaSizeName;

      switch(cart[i].size){

        case 0:
          pizzaSizeName = 'P';
          break;
        case 1:
          pizzaSizeName = 'M';
          break;
        case 2: 
          pizzaSizeName = 'G';
          break;



      }


      let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

      cartItem.querySelector('img').src = pizzaItem.img;
      cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
      cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;

      c('.cart').append(cartItem);


      console.log(pizzaItem);

    }

  }else{

  }



}

