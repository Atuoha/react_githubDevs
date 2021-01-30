import { connect } from 'react-redux';
import Profiles from '../components/profiles';
import { fetchedProfile } from '../actions/index'
import { fetchedRepo } from '../actions/index'
import { saveProfile } from '../actions/index'




const mapStateToProps = state =>{
    return{
        profile: state.profile,
        repos: state.repos,

    };
} 

const mapDispatchToProps = (dispatch, ownProps)=>{
    return{
        fetchedProfile: (searched) =>{
            dispatch(fetchedProfile(searched))
        },

        fetchedRepo: (searched) =>{
            dispatch(fetchedRepo(searched))
        },

        saveProfile: (profile) =>{
            dispatch(saveProfile(profile))
        },
    }
}




const Profile = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Profiles);

export default Profile
