import './App.css'
import Header from './components/Header/Index';
import Content from './components/Content/Index';
import ContentFooter from './components/ContentFooter';
import Footer from './components/Footer';
import { TodoProvider } from './contexts/TodoContext';


function App() {
  
  return (
    <TodoProvider> 
      <section className="todoapp">
        <Header/>
        <Content/>
        <ContentFooter/>
      </section>
      <Footer/>
    </TodoProvider>
  )
}

export default App
