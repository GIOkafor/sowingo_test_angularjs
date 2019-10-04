angular
    .module('app')
    .factory('ProductsService', ProductsService);

ProductsService.$inject = ['$http', 'logger'];

function ProductsService($http, logger) {
    return {
        getProducts: getProducts
    };

    function getProducts() {
        return $http.get('https://demo1064913.mockable.io/products')
            .then(getProductsComplete)
            .catch(getProductsFailed);

        function getProductsComplete(response) {
            return response.data.results;
        }

        function getProductsFailed(error) {
            logger.error('XHR Failed for getAvengers.' + error.data);
        }
    }
}