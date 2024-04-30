
import './App.css';


// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
      <Footer/>
    </div>
  );
}

export default App;
