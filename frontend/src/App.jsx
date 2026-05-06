
import './App.css'
// import { Createtodo } from './components/Createtodo';
import { Todocomponent } from './components/Todocomponent';
import { UseCallbackHook } from './components/useCallbackhook';
import { UseMemo } from './components/UseMemo';

function App() {

  return (
    <> 
        <div> Todo Application  </div>
        <div>
          {/* <Createtodo />  */}

          {/* ****** // React.Memo or memo */}
          {/* <Todocomponent />  */}

          {/* ******* // use callBackHook */}
          {/* <UseCallbackHook /> */}

          {/* ******** //  useMemo */}
          <UseMemo />

        </div>
    </>
  )
}

export default App
