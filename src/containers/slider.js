import { connect } from 'react-redux';
import SliderxComponent from '../components/slider';


const mapStateToProps = state =>{
    return{
        profile: state.profile,
        repos: state.repos,

    };
} 



const Slider = connect(
    mapStateToProps,
    )(SliderxComponent);

export default Slider