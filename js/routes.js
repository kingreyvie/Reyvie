angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contactPage', {
    url: '/page1',
    templateUrl: 'templates/contactPage.html',
    controller: 'contactPageCtrl'
  })

  .state('bato', {
    url: '/page3',
    templateUrl: 'templates/bato.html',
    controller: 'batoCtrl'
  })

  .state('dickGordon', {
    url: '/page7',
    templateUrl: 'templates/dickGordon.html',
    controller: 'dickGordonCtrl'
  })

  .state('decastro', {
    url: '/page5',
    templateUrl: 'templates/decastro.html',
    controller: 'decastroCtrl'
  })

  .state('digong', {
    url: '/page6',
    templateUrl: 'templates/digong.html',
    controller: 'digongCtrl'
  })

  .state('trililing', {
    url: '/page8',
    templateUrl: 'templates/trililing.html',
    controller: 'trililingCtrl'
  })

  .state('miriam', {
    url: '/page9',
    templateUrl: 'templates/miriam.html',
    controller: 'miriamCtrl'
  })

  .state('manny', {
    url: '/page10',
    templateUrl: 'templates/manny.html',
    controller: 'mannyCtrl'
  })

  .state('larryGordon', {
    url: '/page11',
    templateUrl: 'templates/larryGordon.html',
    controller: 'larryGordonCtrl'
  })

  .state('titoSotto', {
    url: '/page12',
    templateUrl: 'templates/titoSotto.html',
    controller: 'titoSottoCtrl'
  })

  .state('leilaDelima', {
    url: '/page13',
    templateUrl: 'templates/leilaDelima.html',
    controller: 'leilaDelimaCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});