SaiaDoVermelho.controller("MoneyController",["$scope","MoneyService", function($scope, MoneyService){
	$scope.money = MoneyService.money;

	$scope.new = function(){
		try{
			if($scope.type === 'incoming'){
				MoneyService.newIncoming({name:$scope.name, value:$scope.value});
			}else if($scope.type === 'expense'){
				MoneyService.newExpense({name:$scope.name, value:$scope.value});
			}
		}catch(e){
			alert(e.message);
		}
	}

	$scope.deleteIncoming = MoneyService.deleteIncoming;
	$scope.deleteExpense = MoneyService.deleteExpense;
}]);