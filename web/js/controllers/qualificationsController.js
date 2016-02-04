UEWeb.controller("QualificationsController",
    function($scope, $http, AuthenticationService) {

        var token;

        if (localStorage['token']){
            token = JSON.parse(localStorage['token']);
        } else {
            token = "HACK ALERT!";
        }

        AuthenticationService.checkToken(token);

        $scope.qualifications = function() {

            var data = {
                token: token
            };

            $http.post('http://localhost/incruit/backend/services/qualifications.php', data).success(function(response){
                console.log(response);
            }).error(function(error){
                console.error(error);
            })
        };

        $scope.qualifications();

    });