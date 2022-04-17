// Utils
import Link from 'next/link'

// Style
import styles from './MainNav.module.scss'



const MainNav = () => {
  return (
    <div className={ `${styles.mainNav}` }>

      <div className={ `${styles.mainNav__logoContainer}` }>LOGO</div>

      <div className={ `${styles.mainNav__right}` }>
        <div className={ `${styles.mainNav__phoneNumber}` }>+359 123123123</div>
        <Link href='/' className={ `${styles.mainNav__startProject}` }>Start a project</Link>
        <div className={ `${styles.mainNav__navContainer}` }>|||</div>
      </div>

    </div>
  );
}

export default MainNav;