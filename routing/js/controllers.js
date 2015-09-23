app.controller('HomeController', function ($scope) {

  $scope.message = "Welcome!";

});

app.controller('DogsController', function($scope){

    $scope.message = "Woof Woof!";

});


//In fact you need the # (hashtag) for non HTML5 browsers.

//The # is an old browser shortcircuit which doesn't fire the request, which allows many js frameworks to build their own clientside rerouting on top of that.

// You can use $locationProvider.html5Mode(true) to tell angular to use HTML5 strategy if available.
