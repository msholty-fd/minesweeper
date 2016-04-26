import angular from 'angular';
import ngRedux from 'ng-redux';
import createStore from './store';

import game from './components/game';
import gridSizeSelector from './components/grid_size_selector';
import grid from './components/grid';

const app = angular.module('app', [
	ngRedux
]);

app
	.config(createStore)
	.component('game', game)
	.component('grid', grid)
	.component('gridSizeSelector', gridSizeSelector);
