import { React, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getVerbs } from '../redux/phrasalReducers';
import { GET_VERBS } from '../../src/redux/action';

import store from "../redux/store";

export default function PhrasalContainer() {

   const names  = useSelector((state) => state.names);
   console.log("PHRASALCONTAINER")
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVerbs());
      },[])

      return(
          <div>
              data={names}
              renderItem = {({item}) => (
                  <div>
                      <p>{item.name}</p>
                  </div>
              )
              }
          </div>
      )
}