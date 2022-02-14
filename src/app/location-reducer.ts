import { Action } from "@ngrx/store";
/**reducer é responsavel por centralizar os dados obtidos na barra de pesquisa e fornece-los aos
 * services, os quais ficam responssaveis por pegar dados da API
 */
export const initialState = '';
export const SET_LOCATION = 'SET_LOCATION';

export function locationReducer(state = initialState, action: any){
  switch (action.type) {
    case SET_LOCATION:
      state = action.payload
      return state;
    default:
      return state;
  }
}
