import React, { Component } from 'react';
import { FormControl, FormGroup, FormLabel, Table, Button} from 'react-bootstrap';




 
class Profiles extends Component{

 constructor(props){
     super(props);
     this.state = {
         userInfo: this.props.profile,
         search: '',
         repoInfo: [],
         response_error: ''
     }
 }   


 searchUser(type, event){
     let searched = event.target.value   
     this.setState({
         search: searched
     })
    this.componentDidMount(searched)
 }


 updateUser(type, event){
     let userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
     userInfoCopy[type] = event.target.value;
     this.setState({
         userInfo: userInfoCopy
     })
 }
 


UNSAFE_componentWillReceiveProps(nextProps){
    this.setState({
        userInfo: nextProps.profile
    })
}


saveProfileChanges(){
    console.log('changes clicked')
    let error = false;
    let propertyToCheck = ['name', 'email', 'blog', 'location', 'company'];
    propertyToCheck.forEach(property=>{
        if(this.state.userInfo[property] === ''){
            error = true;
        }else{
            this.props.saveProfile(this.state.userInfo)
        }
    })
    this.setState({
        response_error: error
    })
    console.log(this.state.response_error)

}

 componentDidMount(searched){
    console.log('mounted...')
    let headerx = new Headers({"Content-Type":"Application/json", "Authorization":"token 66e5da558b341e034174bb340f5e905090c70b87" })
    // fetch(`https://api.github.com/users/${searched}`, {
    //     method: 'GET',
    //     headers: headerx
    // })
    // .then(response=> response.json())
    // .then(user=>{
    //     console.log(user)    
    //     this.setState({
    //         userInfo: user
    //     })
    // })
    // .catch(err=>console.log(err))

    let repos_count = 5;
    let repos_sort = 'created: asc';
    fetch(` https://api.github.com/users/${searched}/repos?per_page=${repos_count}&sort=${repos_sort}`, {
        method: 'GET',
        headers: headerx
    })
    .then(response=> response.json())
    .then(repo=>{
        console.log(repo)    
        this.setState({
            repoInfo: repo
        })
    })
    .catch(err=>console.log(err))


    this.props.fetchedProfile(searched)
    // this.props.fetchedRepo(searched)

} 

  

  render(){

    // let repos = this.state.repoInfo
    return(
    <div>
        <h5 className=" text-center"> Github Profiles :) </h5>
            <div className="col-md-5 mx-auto">
                <FormGroup>
                    <FormLabel>...searching a name will start the magic</FormLabel>
                    <FormControl type="text" autoFocus="" value={this.state.search} placeholder="Enter Github username!" onChange={this.searchUser.bind(this, 'search')} />
                </FormGroup>  
            </div>

        {this.state.search ?
            <div>
                <div className="container">
                    <div className="card card-body mb-3">
                            <div className="row text-center">
                                    <div className="col-md-5 mx-auto">
                                        <p><b>Name:</b> {this.props.profile.name}</p>
                                        <img src={this.props.profile.avatar_url} width="100" alt="just a profile capture" className="rounded-circle img-fluid mb-2"/>
                                        <a href={this.props.profile.html_url} rel="noreferrer" target="_blank" className="btn btn-info btn-block mb-4"> View Profile</a>
                                    </div>

                                    <div className="col-md-9 mx-auto">
                                        <span className="badge badge-success"> <b>Public Gists:</b> {this.props.profile.public_gists}</span>
                                        <span className="badge badge-primary"> <b>Public Repos:</b> {this.props.profile.public_repos}</span>
                                        <span className="badge badge-danger"> <b>Followers:</b> {this.props.profile.followers}</span>
                                        <span className="badge badge-info"> <b>Following:</b> {this.props.profile.following}</span>
                                        <br /><br /><br />
                                    </div> 

                            </div>           

                            <div className="row text-center">
                                    <div className="col-md-6">
                                        <Table className="table table-striped table-bordered table-hover ">
                                            <tbody>
                                                <tr>
                                                    <th>Location:</th>
                                                    <td>{this.state.userInfo.location}</td>
                                                </tr>

                                                <tr>
                                                    <th> Website/Blog:</th>
                                                    <td>{this.state.userInfo.blog}</td>
                                                </tr>  

                                                <tr>
                                                    <th>Email:</th>
                                                    <td>{this.state.userInfo.email}</td>
                                                </tr>      


                                                <tr>
                                                    <th>Company:</th>
                                                    <td>{this.state.userInfo.company}</td>
                                                </tr>


                                                
                                                <tr>
                                                    <th>Member:</th>
                                                    <td>{this.state.userInfo.created_at}</td>
                                                </tr>

                                                <tr>
                                                    <th>Edit Profile</th>   
                                                    <td> 
                                                        <Button className="btn btn-info btn-block mb-4" onClick={ ()=> this.setState({editing: !this.state.editing}) }>Edit Profile</Button>
                                                    </td>
                                                </tr>    
                                            </tbody>
                                        </Table>
                                    </div>

                                    { this.state.editing ?
                                        <div className="col-md-6">
                                            <FormGroup>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl className={this.state.response_error === true && this.state.userInfo.name === '' ? 'red-border' : '' } type="text" value={this.state.userInfo.name} placeholder="Enter Name" onChange={this.updateUser.bind(this, 'name')} />
                                            </FormGroup> 


                                            <FormGroup>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl className={this.state.response_error === true && this.state.userInfo.name === '' ? 'red-border' : '' } type="text" value={this.state.userInfo.email} placeholder="Enter Email" onChange={this.updateUser.bind(this, 'email')} />
                                            </FormGroup> 


                                            <FormGroup>
                                                <FormLabel>Website</FormLabel>
                                                <FormControl className={this.state.response_error === true && this.state.userInfo.name === '' ? 'red-border' : '' } type="text" value={this.state.userInfo.blog} placeholder="Enter Website" onChange={this.updateUser.bind(this, 'blog')} />
                                            </FormGroup> 


                                            <FormGroup>
                                                <FormLabel>Company</FormLabel>
                                                <FormControl className={this.state.response_error === true && this.state.userInfo.name === '' ? 'red-border' : '' } type="text" value={this.state.userInfo.company} placeholder="Enter Company" onChange={this.updateUser.bind(this, 'company')} />
                                            </FormGroup> 

                                            <Button className="btn btn-success btn-block mb-4" onClick={this.saveProfileChanges.bind(this) }>Save Changes Profile</Button>

                                        </div>

                                    :
                                        <div className="m-5 mx-auto">
                                            <img  alt="random capture" src="%PUBLIC_URL%/../images/new_logo.png" />
                                            <p>Profiles with {this.state.userInfo.name}</p>
                                        </div>
                                    }
        
                            </div>

                    </div>
                </div>
                        <p className="text-center">Repositories</p>
                        {/* {this.state.repoInfo.map(repo => {
                            return(
                                <div className="card card-body mb-2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <a href={repo.html_url} rel="noreferrer" target="_blank">{repo.name}</a>
                                            <p>Description:{repo.description}</p>
                                            <p>Created:{repo.created_at}</p>
        
                                        </div>
                
                                        <div className="col-md-6">
                                            <span className="badge badge-danger"> Stars: {repo.stargazer_count}</span>
                                            <span className="badge badge-green"> Watchers: {repo.watchers_count}</span>
                                            <span className="badge badge-primary"> Folks: {repo.forks_count}</span>
                                        </div>
                
                                    </div>
                                </div>
                            )
                        })} */}
            </div>
    
        :
            <div className="col-md-5 mx-auto alert alert-info alert-dismissible">Search for a profile on Github</div>
        }   
       
    </div>
    );
  }

}



export default Profiles;
