import styles from '../styles/Layout.module.css';
import Nav from '../components/Navbar';
import Header from '../components/Header'

const Layout = ({children}) => {
  return (
    <>
      <Nav />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
    </div>
    </>
  )
}

export default Layout