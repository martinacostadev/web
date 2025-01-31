import Styles from "./styles.module.scss";

function Nav() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.navContent}>
        <a className={Styles.logolink} href="/" alt="Inicio">
          <div className={Styles.monogram}>MA</div>
        </a>
        <a className={Styles.link} href="/experiencia" alt="Experiencia">
          Experiencia
        </a>
        <a className={Styles.link} href="/proyectos" alt="Proyectos">
          Proyectos
        </a>
        <a className={Styles.link} href="/blog" alt="Blog">
          Blog
        </a>
        <a className={Styles.link} href="/acerca-de" alt="Acerca de mí">
          Acerca de mí
        </a>
        <div className={Styles.socials}>
          <a
            className={Styles.social}
            target="_blank"
            href="https://x.com/martinacostadev"
            rel="noopener nofollow"
            aria-label="Sígueme en X"
          >
            <svg className={Styles.socialicon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 310 310">
              <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" fill="#fafafa" />
            </svg>
          </a>

          <a
            className={Styles.social}
            target="_blank"
            href="https://www.youtube.com/martinacostadev"
            rel="noopener nofollow"
            aria-label="Suscríbete al canal de martinacostadev"
          >
            <svg
              className={Styles.socialicon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 310 310"
            >
              <path
                d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z"
                fill="#FF0000"
              />
            </svg>
          </a>

          <a
            className={Styles.social}
            target="_blank"
            href="https://www.twitch.tv/martinacostadev"
            rel="noopener nofollow"
            aria-label="Twitch de @martinacostadev"
          >
            <svg
              className={Styles.socialicon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 268"
            >
              <path
                d="M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z"
                fill="#5A3E85"
              />
            </svg>
          </a>

          <a
            className={Styles.social}
            target="_blank"
            href="https://github.com/martinacostadev"
            rel="noopener nofollow"
            aria-label="Github de @martinacostadev"
          >
            <svg
              className={Styles.socialicon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                fill="#fafafa"
              />
            </svg>
          </a>

          <a
            className={Styles.social}
            target="_blank"
            href="https://www.linkedin.com/in/martinacostadev/"
            rel="noopener nofollow"
            aria-label="Github de @martinacostadev"
          >
            <svg className={Styles.socialicon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2" /></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
