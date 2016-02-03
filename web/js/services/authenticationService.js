WebAppIncruit.service('AuthenticationService', ["$http", "$location",
    function($http, $location){

        var self = this;

        self.checkToken = function(token) {

            var data = {
                token: token
            };

            $http.post("http://localhost/incruit/backend/services/authentication.php", data).success(function(response){
                if (response === "unauthorized"){
                    $location.path("/login");
                } else {
                    return response;
                }

            }).error(function(error){
                $location.path("/login");
            })

        }

    }]);
