import {RootState} from '../store';

const selectCandidatesData = (state: RootState) => state.card;

export default selectCandidatesData;
