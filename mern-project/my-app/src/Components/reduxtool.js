import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { increase,decrease } from '../actions';
function Redux(){
    const st = useSelector((state)=>state.Inc);
    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(increase());
    }
    const handleClick1=()=>{
        dispatch(decrease());
    }
    return(
        <>
        <input type='number' value = {st}></input>
        <br></br>
        <br></br>
        <button className='btn btn-primary' onClick={handleClick}>INCREMENT</button>
        <button className='btn btn-danger' onClick={handleClick1}>DECREMENT</button>
        </>
    )
}
export default Redux;