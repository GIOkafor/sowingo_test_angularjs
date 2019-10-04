class HomeCtrl {
  constructor($scope, $http) {
    'ngInject';
    var vm = this;
    vm.name = "AngularJS";
    vm.products = [];

    getProducts();

    ///////////////////////////////

    function getProducts(){
      console.log("getting products");
      return $http.get('https://demo1064913.mockable.io/products')
            .then(res => {
              //console.log(res.data.products);
              vm.products = res.data.products;
              return vm.products;
            })
            .catch(getProductsFailed);
    }

    function getProductsComplete(response) {
        return response.data.products;
    }

    function getProductsFailed(error) {
        console.log('XHR Failed for getProducts.' + error);
    }
  }
}

//HomeCtrl.$inject= ['productService', 'logger'];

export default HomeCtrl;