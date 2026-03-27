import { styles } from '../styles/styles';
function Navbar() {
    return (
        <nav
            className={`${styles.paddingX} w-screen bg-primary flex items-center justify-between top-0 fixed left-0 right-0 z-20`}
        ></nav>
    );
}
export default Navbar;
