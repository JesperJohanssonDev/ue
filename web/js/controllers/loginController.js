UEWeb.controller("LoginController",
    function($scope, $http, $location) {

        $scope.loginInfo = {
            username: undefined,
            password: undefined
        };

        $scope.loginUser = function () {
            var data = {
                username: $scope.loginInfo.username,
                password: $scope.loginInfo.password
            };

            $http.post("http://localhost/incruit/backend/services/login.php", data).success(function(response) {
                console.log(response);
                if(response !== "unauthorized") {
                    localStorage.setItem("token", JSON.stringify(response));
                    $location.path("/start");
                } else {
                    console.log("Wrong password or username");
                }
            }).error(function(error){
                console.log(error);
            });
        }

    });