WebAppIncruit.controller("StartController",
    function ($scope, $http){

        $scope.testJson = function() {

            var data = {
                token: token
            };

            $http.post('http://localhost/incruit/backend/data/testJson.php', data).success(function(response){
                console.log(response);
                $scope.email = response[0].email;
            }).error(function(error){
                console.error(error);
            })
        };

        $scope.testJson();

    });