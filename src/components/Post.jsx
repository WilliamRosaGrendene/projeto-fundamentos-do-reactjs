import { Avatar } from './Avatar';
import { Comment } from './Comment';
import Styles from './Post.module.css';

export function Post(){
    return(
        <article className={Styles.post}>
            <header>
                <div className={Styles.author}>
                    <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/114080002?v=4"/>
                    <div className={Styles.authorInfo}>
                        <strong>William Rosa</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <div>
                    <time title='30 de Setembro ás 11:51h' dataTime='2022-09-30 11:51:30'>Plublicado há 1h</time>
                </div>
            </header>

            <div className={Styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href="#">{' '}jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={Styles.commenForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentario'/>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            {/* Lista de comentarios importada */}
            <div className={Styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>


        </article>
    )
}