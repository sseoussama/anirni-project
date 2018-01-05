import {FETCH_USER} from '../actions/types';
const initialState={
	methode:'',
   local: {
    id:'',
    username:'',
    password:'' 
    },
    facebook: {
    id: '',
    token: '',
    email: '',
    name: ''
  },
  google: {
    id: '',
    token: '',
    email:'',
    name: ''
  }

}
export default  function (state=initialState,action )
{

	switch(action.type)
	{

		case FETCH_USER :{
            switch(action.payload.methode)
            {
            	case 'local':{return{...state,methode:action.payload.methode,local:{id:action.payload._id,username:action.payload.local.username,password:action.payload.local.password}};break;}
            	case 'facebook':{return{...state,methode:action.payload.methode,facebook:{id:action.payload._id,token:action.payload.facebook.token,email:action.payload.facebook.email,name:action.payload.facebook.name}};break;}
            	case 'google':{return{...state,methode:action.payload.methode,google:{id:action.payload._id,token:action.payload.google.token,email:action.payload.google.email,name:action.payload.google.name}};break;}
            	default :break;
            }
			
		}
		default :return state;
	}
}