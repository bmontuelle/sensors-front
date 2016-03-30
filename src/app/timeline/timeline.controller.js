export class TimelineController {
  constructor ($scope) {
    'ngInject';
    $scope.data = {
      dataset0: [
        {time: 1459349317056, humidity: 50, temperature: 25},
        {time: 1459349317057, humidity: 50, temperature: 25},
        {time: 1459349317058, humidity: 42, temperature: 25},
        {time: 1459349317059, humidity: 42, temperature: 25},
        {time: 1459349317060, humidity: 42, temperature: 26},
        {time: 1459349317061, humidity: 40, temperature: 26},
        {time: 1459349317062, humidity: 38, temperature: 27},
        {time: 1459349317063, humidity: 37, temperature: 27},
        {time: 1459349317064, humidity: 37, temperature: 26}
      ]
    };

    $scope.options = {
      series: [
        {
          axis: "y",
          dataset: "dataset0",
          key: "temperature",
          label: "An area series",
          color: "#1f77b4",
          type: ['line', 'dot', 'area'],
          id: 'mySeries0'
        },
        {
          axis: "y",
          dataset: "dataset0",
          key: "humidity",
          label: "An area series",
          color: "#338800",
          type: ['line', 'dot', 'area'],
          id: 'mySeries2'
        }
      ],
      axes: {x: {key: "time"}}
    };
    $scope.setData = function(messageEvent) {
      console.log("SetData ", messageEvent)

      //$scope.data.dataset0.push(JSON.parse(messageEvent.data))

      console.log("data is now", $scope.data)
    }

    var runningSource = new EventSource('http://localhost:9000/climate');
    runningSource.addEventListener('message', $scope.setData , false);

    this.data = $scope.data
    this.config = $scope.config
  }


}
