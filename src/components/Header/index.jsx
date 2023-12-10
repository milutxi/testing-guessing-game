import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles["header__title"]}>Color Guessing Game</h1>
        </div>
    )
}

export default Header