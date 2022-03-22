import Icon from "../Icon";
import styles from "./Header.module.css";

import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => (
  <div className={styles.Header}>
    <div className={styles.Logo}>
      <Icon icon="package" size={30} /> SVGPS
    </div>
    <div className={styles.Menu}>
      <a
        href="https://github.com/aykutkardas/svgps-online"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className={styles.SocialLink}
      >
        <Icon icon="github" size={22} />
        Github
      </a>
      <a
        href="https://twitter.com/aykutkardas"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
        className={styles.SocialLink}
      >
        <Icon icon="twitter" size={20} />
        Twitter
      </a>
      <ThemeSwitcher />
    </div>
  </div>
);

export default Header;
