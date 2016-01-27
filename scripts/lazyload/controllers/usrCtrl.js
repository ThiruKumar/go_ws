// --- fullcalendar controller
;(function() {

	var app = angular.module("app.ctrls");
	
	
	app.controller('crUsrCtrl', function ($scope, $http) {
 
    $scope.addData = function(){
        /*var angDat = {data1: $scope.angData1};
		alert(angDat.data1);
        $http.post('index.php/Welcome/addAngData',angDat).success(function(data){
           // $scope.refresh();
		   alert(data);
            $scope.angData1 = '';
        }).error(function(data){
            alert(data.error);
        });*/
		
		
		
		var req = {
 method: 'POST',
 url: 'PutData',
 headers: {
   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
 },
 data: $.param({ data1:  $scope.angData1, data2:$scope.angData2})
}
		
$http(req).then(function(response){
                                    
									$scope.sts = {};
            						$scope.sts.msg = response.data;
	                        		}, function(){});		
		
    }
 
});
	


app.controller('lsUsrCtrl', function ($scope, $http) {
 
    $scope.refresh = function(){
        $http.get('getData').success(function(data){
		$scope.datas = data;
		console.log(data.toSource());
		//console.log(data[0].Series[0].values[0]);
		
        }).error(function(data){
            $scope.tasks = data;
        });
    }
 
  $scope.refresh();
 
});



app.controller('lsNoComm', function ($scope, $http) {
 
    $scope.refresh = function(){
        $http.get('getNoComm').success(function(data){
		$scope.datas = data;
		console.log(data.toSource());
		//console.log(data[0].Series[0].values[0]);
		
        }).error(function(data){
            $scope.tasks = data;
        });
    }
 
  $scope.refresh();
 
});








//=== #end
})()

