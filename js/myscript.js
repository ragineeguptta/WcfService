const URL = "http://localhost:54273/Service1.svc/add?n1=1.2&n2=3.2";

let app = angular.module("myApp", []);

app.controller("myCtrl", ($scope, $http) => {


    // Calling api

    $http.get(URL).then(
        (response) => {
            //success
           // alert("dsgga");
           // console.log("Inside Success");
            console.log(response.data);
            $scope.all_data = response.data;

        },
        (error) => {
            //error
            // console.log("Inside Error");
            console.log(error);
        }
    );
});