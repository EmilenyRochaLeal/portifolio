import Link from 'next/link'
import style from '@/style/Header.module.css'
export default function Header(){
    return(
        <div className={style.logo}>
            <h1>Emileny Leal</h1>
           <div className={style.navLinks}>
                <Link href="/" className={style.link}>Home </Link>
                <Link href="about" className={style.link}>About me </Link>
                <Link href="projetos" className={style.link}> My projects</Link>
                <Link href="contato" className={style.link}> Contact-me</Link>
           </div>
        </div>
    )
}