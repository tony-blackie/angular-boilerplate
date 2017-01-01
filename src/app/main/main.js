(function() {
    "use strict";

    angular
        .module('awesome-app.main', ['ui.router'])
        .config(function config($stateProvider) {
            $stateProvider
                .state('main', {
                    controller: 'MainCtrl',
                    templateUrl: 'main/main.tpl.html'
                });
        });
})();