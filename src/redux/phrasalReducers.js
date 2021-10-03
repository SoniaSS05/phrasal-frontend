import { GET_VERBS } from "./actiontypes";
import { setVerbs } from "./action";

const BASE_URL = "http://127.0.0.1:3000/"
const initialState = {
    names:''
}
console.log("aca en PHRASALREDUCERS")

export const phrasalReducers = (state= initialState, action) => {
    switch (action.type){
        case GET_VERBS:
            return { ...state, names: action.payload}
        default: 
            return state
    }
}

export const getVerbs = () => async (dispatch, getState) =>{
    const url = BASE_URL + 'verbs'
    console.log('URL')
    console.log(url)
    const config = {
        method: "GET",
        headers: {
          "Content-type":  "application/json",
        },
      }
    const verbs = await fetch(url,config).then(res => res.json())
    console.log(verbs)
    dispatch(setVerbs(verbs))
}




