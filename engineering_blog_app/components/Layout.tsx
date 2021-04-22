import styles from '../styles/Layout.module.css';
import Nav from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  return (
    <>
      <Nav />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      <Footer />
    </div>
    </>
  )
}

export default Layout