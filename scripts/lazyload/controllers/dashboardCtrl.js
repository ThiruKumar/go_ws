// --- fullcalendar controller
;(function() {

var app = angular.module("app.ctrls");
	
app.controller('DashboardCtrl', function ($scope, $http) {
 


$scope.analyticsconfig={data:{columns:[["Last 6 days",30,100,80,140,150,200]],type:"spline",types:{"Last 6 days":"bar"}},color:{pattern:["#3F51B5","#38B4EE","#4CAF50","#E91E63"]},legend:{position:"inset"},size:{height:330}},$scope.storageOpts={size:100,lineWidth:2,lineCap:"square",barColor:"#E91E63"},$scope.storagePercent=80,$scope.serverOpts={size:100,lineWidth:2,lineCap:"square",barColor:"#4CAF50"},$scope.serverPercent=35,$scope.clientOpts={size:100,lineWidth:2,lineCap:"square",barColor:"#FDD835"},$scope.clientPercent=54,$scope.browserconfig={data:{columns:[["Cable Loss",48.9],["Panel Loss",16.1],["Inverter Loss",10.9],["Transformer Loss",17.1],["Other",7]],type:"donut"},size:{width:260,height:260},donut:{width:50},color:{pattern:["#3F51B5","#4CAF50","#f44336","#E91E63","#38B4EE"]}}


 
    $scope.refresh = function(){


        $http.get('todayGen').success(function(data){
        $scope.todayGen = data[0].Series[0].values[0][1].toFixed(2);
        //console.log(data.toSource());     
        //console.log(data[0].Series[0].values[0][1]);   
        }).error(function(data){
            $scope.tasks = data;
        });


        $http.get('pkPower').success(function(data){
		$scope.pkPower = data[0].Series[0].values[0][1].toFixed(2);
		//console.log(data.toSource());		
        //console.log(data[0].Series[0].values[0][1]);   
        }).error(function(data){
            $scope.tasks = data;
        });


        $http.get('totGen').success(function(data){
        $scope.totGen = data[0].Series[0].values[0][1].toFixed(2);
        //console.log(data.toSource());        
        }).error(function(data){
            $scope.tasks = data;
        });


        $http.get('impPwr').success(function(data){
        $scope.impPwr = data[0].Series[0].values[0][1].toFixed(2);
        //console.log(data.toSource());        
        }).error(function(data){
            $scope.tasks = data;
        });

        $http.get('noCommDev').success(function(data){
        $scope.noCommDev = data[0].Series[0].values[0][1];
        //console.log(data.toSource());        
        }).error(function(data){
            $scope.tasks = data;
        });

        $http.get('alarms').success(function(data){
        $scope.alarms = data[0].Series[0].values[0][1];
        //console.log(data.toSource());        
        }).error(function(data){
            $scope.tasks = data;
        });


        $http.get('actvPwr').success(function(data){
        $scope.actvPwr = data[0].Series[0].values[0][1].toFixed(2);
        //console.log(data.toSource());        
        }).error(function(data){
            $scope.tasks = data;
        });


        $http.get('slrRdtn').success(function(data){
        $scope.slrRdtn = data[0].Series[0].values[0][1].toFixed(2);
        //console.log(data.toSource());        
        }).error(function(data){
            $scope.tasks = data;
        });


        $http.get('windSpd').success(function(data){
        $scope.windSpd = data[0].Series[0].values[0][1].toFixed(2);
        //console.log(data.toSource());        
        }).error(function(data){
            $scope.tasks = data;
        });


    }
 
  $scope.refresh();
 
});









//=== #end
})()

