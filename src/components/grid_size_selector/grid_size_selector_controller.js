import gameSizes from './grid_size_selector_constants';
import { setGameSize } from '../../actions';

export default class GridSizeSelectorController {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(
			this.mapStateToThis, { setGameSize }
		)(this);

		$scope.$on('$destroy', unsubscribe);

		this.gameSizes = gameSizes;
	}

	mapStateToThis(state) {
		return {
			currentGameSize: state.currentGameSize
		};
	}
}
