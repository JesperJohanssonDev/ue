WebAppIncruit.controller("LogoutController",
    function ($scope, $http, $location, AuthenticationService){

        //If user is not logged in
        var token;

        if (localStorage['token']){
            token = JSON.parse(localStorage['token']);
        } else {
            token = "HACK ALERT!";
        }

        AuthenticationService.checkToken(token);

        $scope.logout = function(){

            var data = {
                token: token
            };

            $http.post('http://localhost/incruit/backend/services/logout.php', data).success(function(response){
                localStorage.clear();
                $location.path("/#/login");
            }).error(function(error){
                console.error(error);
            })
        };

        $scope.logout();


    });