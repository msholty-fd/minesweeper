export default class GridController {
	constructor() {

	}

	cellClick(data) {
		console.log('cellClick', data);
		this.onCellClicked(data);
	}
}
