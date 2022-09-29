import styles from './Header.module.css'

export function Header(){
    return(
        //ClassName seria a class do css, {styles.header} de onde o style está importando o css e .header é a class no css
        <header className={styles.header}>
            <strong>Projeto Ignite</strong>
        </header>
    )
}