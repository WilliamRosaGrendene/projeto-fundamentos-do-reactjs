import Styles from './Avatar.module.css';

export function Avatar({hasBorder = true, src}){
    return(
        <img //estrutura do if e else, se o componente tiver (hasBorder) aplica a estilização com borda, caso não aplica a sem borda
        className={hasBorder ? Styles.avatarWithBorder : Styles.avatar}
        src={src}
        />
    )
}