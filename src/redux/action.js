export const GET_VERBS = "GET VERBS"

export const setVerbs = (verbs) => ({
  type: GET_VERBS,
  payload: verbs,
});



/*
export const getVerbs = () => {
    try{    
        return async dispatch => {
            const result = await fetch(BASE_URL + 'verbs', {
                method: 'GET',
                headers: {
                    "Content-type":  "application/json"
                }
            });
            const json = await result.json();
            if(json){
                dispatch({
                    type: GET_VERBS,
                    payload: json
                })
            }
            else{
                console.log("Unable to fetch");
            }
        }
    }
    catch (error){
        console.log(error)
    }
}
*/

