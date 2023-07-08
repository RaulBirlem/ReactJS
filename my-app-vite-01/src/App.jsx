// css
import './App.css'
import Events from './components/Events'

// components
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'




function App() {
 

  return (
    <>
      <h1> Hello World</h1>
      <FirstComponent/>
      <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App

