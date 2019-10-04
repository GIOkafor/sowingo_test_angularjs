//addToCart(product)
//favouriteProduct(product)

angular
    .module('app')
    .component('productInfo', {
      templateUrl: 'product/product.html',
      controller: ProductController
    })
    //.controller('ProductController', ProductController);

function ProductController() { 
  var vm = this;

  vm.toggleFavourite = togglefavourite;
  vm.addToCart = addToCart;

  //////////////
  function testComp(){
    console.log("Hello world");
  }

  function toggleFavourite(){
    ///
  }

  function addToCart(){
    ///
  }
}