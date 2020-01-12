import { CHANGE_SEARCH_FIELD } from './types';


export const setSearchFiels = ( text ) => ({

        type: CHANGE_SEARCH_FIELD,
        payload: text
        
})