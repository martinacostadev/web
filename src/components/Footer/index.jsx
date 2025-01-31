import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; 2025 Martín Acosta
      <small className={Styles.byline}>🚀 Built with Astro</small>
    </footer>
  );
}
export default Footer;
