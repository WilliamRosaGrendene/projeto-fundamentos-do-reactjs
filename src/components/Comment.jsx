import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import Styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={Styles.comment}>
            {/* Enviar uma propiedade(hasBorder) que não quero que tenha um determinado estilização, já que estou utilizando componte <Avatar/> */}
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/114080002?v=4"/>

            <div className={Styles.commentBox}>
                <div className={Styles.commentContent}>
                    <header>
                        <div className={Styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='30 de Setembro ás 11:51h' dataTime='2022-09-30 11:51:30'>Cerca 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'> <Trash size={24}/> </button>
                    </header>

                    <p> Muito bom Fulano, parabens</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}