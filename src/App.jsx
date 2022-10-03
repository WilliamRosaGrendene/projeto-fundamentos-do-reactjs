import { Header } from './components/Header';
import { Post } from './components/Post';
import { Siderbar } from './components/Sidebar';

import styles from './App.module.css'
import'./global.css';


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

      <Siderbar />

      <main>
        {/* author e content são propriedades/objetos que adiciona conteudo no componete (Post) */}
        <Post/>
        
        <Post/>

      </main>
    </div>

   </div>
  )
}

