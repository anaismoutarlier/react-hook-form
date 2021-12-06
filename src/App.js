import './App.css';
import useInput from './hooks/useInput'

function App() {
  const { state: { name, age, email }, bind } = useInput({
    name: '',
    age: 0,
    email: '',
  })

  return (
    <div className="App">
      <input 
        name="name" 
        type="text" 
        value={ name } 
        { ...bind }/>
      <input 
        name="age"
        type="number" 
        value={ age } 
        { ...bind } />
      <input 
        name="email"
        type="email" 
        value={ email } 
        { ...bind }/>

      <p>{ name }</p>
      <p>{ age }</p>
      <p>{ email }</p>

    </div>
  );
}

export default App;
