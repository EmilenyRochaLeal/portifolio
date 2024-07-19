import Link from 'next/link'
import style from '@/style/Footer.module.css'
function Footer(){
    return(
        <footer className={style.foo}>
            <div className={style.fooContent}>
                <h3>Emileny Leal</h3>
                <p>Software developer é um portifólio de apresentação pessoal profissioanal</p>
                <p>copyright &copy; 2024 <a>E.R,Leal</a></p>
            </div>
        </footer>
    )
}
export default Footer;