import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <a href="https://cafecito.app/martinacostadev" rel="noopener" target="_blank" className={Styles.cafecito}>
        <img
          srcSet="https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x"
          src="https://cdn.cafecito.app/imgs/buttons/button_1.png"
          alt="Invitame un café en cafecito.app"
        />
      </a>
      <div>&copy; 2026 Martín Acosta</div>
      <small className={Styles.byline}>🚀 Built with Astro</small>
    </footer>
  );
}
export default Footer;
