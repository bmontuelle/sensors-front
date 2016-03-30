export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('timeline', {
      url: '/timeline',
      templateUrl: 'app/timeline/timeline.html',
      controller: 'TimelineController',
      controllerAs: 'timeline'
    })
  ;

  $urlRouterProvider.otherwise('/');
}
