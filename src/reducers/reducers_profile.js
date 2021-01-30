import { INFO_FETCHED } from '../actions'
// import { NEW_INFO} from '../actions'


const profile  = (state = {}, action)=>{
    // switch(action.type){
        
    //     case NEW_INFO :
    //         return action.payload  
    //     case INFO_FETCHED:
    //             return action.payload      
    //     default:
    //         return state    
    // }

    if(action.type === INFO_FETCHED){
        return action.payload  
    }else{
        return state 
    }
}


export default profile