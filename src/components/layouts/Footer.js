import {FaWhatsapp, FaLinkedin, FaInstagram} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return(
       <footer className={styles.footer}>
           <ul className={styles.social_list}>
               <li>
                <a href='https://api.whatsapp.com/send?phone=5598982573662&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Dev%20que%20fez%20esta%20aplica%C3%A7%C3%A3o%20%3A)' target='blank'><FaWhatsapp /></a>
               </li>

               <li>
                <a href='https://www.linkedin.com/in/nikolas-oliveira-960279172/' target='blank'><FaLinkedin/></a>
               </li>

               <li>
                <a><FaInstagram /></a>
               </li>
           </ul>
           <p className={styles.direito}><span>Costs</span> &copy;2022 Nikolas Oliveira</p>
       </footer>
    )
}

export default Footer