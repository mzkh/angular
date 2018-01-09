var app = angular.module("customer_manager", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "customer_list.html"
        })
        .when("/add", {
            templateUrl: "add.htm"
        })
});
app.controller("customer_list", function ($scope, $location) {
    $scope.user = {};
    $scope.customer_data = [{first_name:"Michelle",last_name:"Avery",add:"12, Angels Square",city:"Dallas",state:"Texas"},{first_name:"Ward",last_name:"Bell",add:"1926, Ocean view St",city:"Seattle",state:"Washington"},{first_name:"Robin",last_name:"Clerk",add:"1 Atomic St",city:"Dallas",state:"Texas"},{first_name:"Pinal",last_name:"Dave",add:"37, york circle",city:"Los Angeles",state:"California"},{first_name:"Albert",last_name:"Einstein",add:"88, jefferson way",city:"Seattle",state:"Washington"},{first_name:"Robyn",last_name:"Flores",add:"744, Richmond Circle",city:"Seattle",state:"Washington"}];
    $scope.add_customer = function() {
        $scope.form_error = "";
        var arr = ['first_name', 'last_name', 'add', 'city', 'state'];
        var obj = {};
        var res = arr.some(function(item){
            if(!$scope.user[item]) {
                $scope.form_error = item + " missing";
                return true;
            }
            obj[item] = $scope.user[item];
        });

        // only validating
        //not checking existing user base Todo:
        if (res) return;
        $scope.customer_data.push(obj);
        alert('customer details added');
        $scope.user = {};
        $location.path("/")
    };
});