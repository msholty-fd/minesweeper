import { createSelector } from 'reselect';
import { chunk } from 'lodash';

const getCellsFilter = (state) => state.cells;
const getCurrentGameSizeFilter = (state) => state.currentGameSize;

export const getCurrentRows = createSelector(
  [ getCellsFilter, getCurrentGameSizeFilter ],
  (cells, currentGameSize) => {
	  console.log('getCurrentRowsSelector', cells, currentGameSize);
	  return chunk(cells, currentGameSize.width);
  }
);
