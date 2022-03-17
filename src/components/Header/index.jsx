import Icon from "../Icon";
import styles from "./Header.module.css";

import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => (
  <div className={styles.Header}>
    <div className={styles.Logo}>
      <img className={styles.LightLogo} src="/svgps-logo.png" alt="" />
      <img className={styles.DarkLogo} src="/svgps-logo-dark.png" alt="" />
    </div>
    <div className={styles.Menu}>
      <a
        href="https://github.com/aykutkardas/svgps-online"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className={styles.SocialLink}
      >
        <Icon icon="Github" size={22} />
        Github
      </a>
      <a
        href="https://twitter.com/aykutkardas"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
        className={styles.SocialLink}
      >
        <Icon icon="Twitter" size={20} />
        Twitter
      </a>
      <ThemeSwitcher />
    </div>
  </div>
);

export default Header;
