import { Header } from './components/Header';
import { Post } from './Post';

import'./global.css';

export function App() {

  return (
   <div>
    <Header />
    {/* author e content são propriedades/objetos que adiciona conteudo no componete (Post) */}
    <Post 
      author="Diego Fernandes"
      content = "Um livro muito legal"  
    />
    <Post 
      author="Rafael Bacana"
      content = "Uma post muito legal"  
    />
   </div>
  )
}

