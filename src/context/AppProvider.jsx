import { useReducer, createContext } from "react"

const DispatchContext = createContext();
const StateContext    = createContext();

const AppProvider =  ({children})=>{
    // console.log("appProvider",props);

    const initialState = {
        cartItems:[]
    }

    const reducer = (state,action)=>{
        // console.log("action.payload",action.payload)
        switch(action.type){
            case "add-to-cart":
                return{
                    ...state,cartItems:[...state.cartItems,action.payload ]
                }
            default:{ 
                return state
            }
        }

    }

    let [state , dispatch] = useReducer(reducer,initialState)
    // console.log("this is the state", state)

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}> {children}</StateContext.Provider>
        </DispatchContext.Provider>
    )
}
export  {AppProvider,DispatchContext,StateContext};