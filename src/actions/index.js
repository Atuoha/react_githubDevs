export const INFO_FETCHED = 'INFO_FETCHED';
export const NEW_INFO = 'NEW_INFO';


export function fetchedProfile(searched){
    return(dispatch)=>{
    let headerx = new Headers({"Content-Type":"Application/json", "Authorization":"token 66e5da558b341e034174bb340f5e905090c70b87" })
        return fetch(`https://api.github.com/users/${searched}`,{
            method: 'GET',
            headers: headerx
        })
        .then(response=> response.json())
        .then(userInfo=>{
            console.log(userInfo)
            dispatch(loadProfile(userInfo))
        })
        .catch(err=>console.log(err))
    }
}



export function saveProfile(profile){
    return(dispatch)=>{
    let headerx = new Headers({"Content-Type":"Application/json", "Authorization":"token 66e5da558b341e034174bb340f5e905090c70b87" })
        return fetch(`https://api.github.com/user`,{
            method: 'PATCH',
            headers: headerx,
            body: JSON.stringify(profile)
        })
        .then(response=> response.json())
        .then(userInfo=>{
            console.log(userInfo)
            dispatch(loadProfile(userInfo))
        })
        .catch(err=>console.log(err))
    }
}

export function fetchedRepo(searched){
     let repos_count = 5;
    let repos_sort = 'created: asc';
    return(dispatch)=>{
    let headerx = new Headers({"Content-Type":"Application/json", "Authorization":"token 66e5da558b341e034174bb340f5e905090c70b87" })
        return fetch(`https://api.github.com/users/${searched}/repos?per_page=${repos_count}&sort=${repos_sort}`,{
            method: 'GET',
            headers: headerx
        })
        .then(response=> response.json())
        .then(userRepo=>{
            console.log(userRepo)
            dispatch(loadRepo(userRepo))
        })
        .catch(err=>console.log(err))
    }
}


export function loadProfile(users){
    return{
        type: INFO_FETCHED,
        payload: users
    }
   
}


export function loadRepo(repos){
    return{
        type: INFO_FETCHED,
        payload: repos
    }
   
}
