import axios from 'axios';
import {FETCH_USER} from './types';
import {UPDATE_TOKEN} from './types';
export const fetchUser=(token)=>
{

	return function(dispatch)
	{
		        
               const api = axios.create({
                         headers: {
                         'Authorization': token,
                         'Content-Type': 'application/json',
                      }
                     }); 
                    api.get("http://localhost:5000/api/users/profile").then(function(response)
                    {
                    	
                       
                       dispatch({type:FETCH_USER,payload:response.data.user});
                        
                    }).catch(function(error)
                    {
                           console.log(error);
                    });

	} ;
}
export const updateToken=(token)=>
{
    
	return function(dispatch)
	{
	  localStorage.setItem("token",token);
      dispatch({type:UPDATE_TOKEN,payload:token});

	} ;
}