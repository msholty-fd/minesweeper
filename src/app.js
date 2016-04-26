import angular from 'angular';
import ngRedux from 'ng-redux';
import createStore from './store';

import game from './components/game';

const app = angular.module('app', [
	ngRedux
]);

app
	.config(createStore)
	.component('game', game);
