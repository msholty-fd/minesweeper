import * as actions from '../../actions';
import { GAME_STATE } from '../../store/reducers';

export default class GameController {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(
			this.mapStateToThis, actions
		)(this);

		$scope.$on('$destroy', unsubscribe);

		this.cellClickHandler = this.cellClickHandler.bind(this);
	}

	cellClickHandler(cell) {
		if (this.gameState === GAME_STATE.Lost || this.gameState === GAME_STATE.Won) {
			return;
		}

		return this.revealCell(cell);
	}

	mapStateToThis(state) {
		return {
			gameState: state.gameState,
			currentGameSize: state.currentGameSize,
			cells: state.cells,
			rows: _.chunk(state.cells, state.currentGameSize.width)
		};
	}
}
