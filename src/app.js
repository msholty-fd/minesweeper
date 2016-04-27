import angular from 'angular';
import ngRedux from 'ng-redux';
import createStore from './store';

import game from './components/game';
import gridSizeSelector from './components/grid_size_selector';
import grid from './components/grid';
import cell from './components/cell';
import gameStatus from './components/game_status';

const app = angular.module('app', [
	ngRedux
]);

app
	.run(($ngRedux, $rootScope) => {
		$ngRedux.subscribe(() => {
			setTimeout(() => $rootScope.$apply(), 100);
		});
	})
	.config(createStore)
	.component('game', game)
	.component('grid', grid)
	.component('cell', cell)
	.component('gridSizeSelector', gridSizeSelector)
	.component('gameStatus', gameStatus);
