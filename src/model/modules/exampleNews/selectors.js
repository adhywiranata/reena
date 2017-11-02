// Place selectors here
export const getNewsTitlesSelector = state => state.data.map(d => d.title);
export const getNewsLoadingStatusSelector = state => state.isLoading;
