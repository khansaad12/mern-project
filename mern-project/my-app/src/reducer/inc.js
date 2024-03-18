const instate = 10;
const Inc=(state = instate,action)=>{
    switch(action.type){
        case "INCREMENT":
            return state + 1;
            case "DECREMENT":
                return state -1;
                default:
                    return state;
    }
}
export default Inc;