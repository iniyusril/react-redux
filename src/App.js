import './App.css';
import Counter from './components/counter'
import Datalist from './components/datalist'
import Main from './components/main'
import {createStore} from 'redux'

// //actions

// const increment = () => {
//   return {type: 'INCREMENT'}
// }

// const decrement = () =>{
//   return {type: 'DECREMENT'}
// }

// //reducer
// const reducerCounter = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT' :
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

// //store
// let store = createStore(reducerCounter)

// //display 
// store.subscribe(() => (console.log(store.getState())) )

// //dispatch
// store.dispatch(increment())
// store.dispatch(decrement())



function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Counter />
        </div>
        <div className="col-md-6">
          <Datalist />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Main />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
