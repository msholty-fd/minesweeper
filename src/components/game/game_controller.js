export default class GameController {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(
			(state) => state
		)(this);

		$scope.$on('$destroy', unsubscribe);
	}
}
