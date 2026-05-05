
import './App.css'
// import { Createtodo } from './components/Createtodo';
import { Todocomponent } from './components/Todocomponent';
import { UseCallbackHook } from './components/useCallbackhook';

function App() {

  return (
    <> 
        <div> Todo Application  </div>
        <div>
          {/* <Createtodo />  */}
          {/* <Todocomponent />  */}

          {/* ******* // use callBackHook */}
          <UseCallbackHook />

        </div>
    </>
  )
}

export default App
