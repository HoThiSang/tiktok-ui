import classNames from "classnames";
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header(){
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}></div>
    </header>
}

export default Header
