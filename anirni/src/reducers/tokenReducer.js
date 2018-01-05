import {UPDATE_TOKEN} from '../actions/types';
function getInitialState()
{
	switch(localStorage.getItem("token"))
	{
		case null :{return {jwtToken:''};break}
		default : {return {jwtToken:localStorage.getItem("token")}; break;}
	}
}
const initialState =getInitialState();
export default  function (state=initialState,action )
{
	switch (action.type)
	{
		case UPDATE_TOKEN:
		{
			
			return{...state,jwtToken:action.payload};break;}
		
		default : return state;
	}
} 
