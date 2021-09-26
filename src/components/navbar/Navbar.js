import NavbarStyle from './Navbar.module.css'

const Navbar = ({scrolTo}) => {
    return (
        <div className={NavbarStyle.background}>
            <ul className={NavbarStyle.ul}>
                <li> <button onClick={() => scrolTo('home')}>Home</button></li>
                <li> <button onClick={() => scrolTo('about')}>About</button></li>
                <li> <button onClick={() => scrolTo('why me')}>Why me? </button></li>
                <li> <button onClick={() => scrolTo('projects')}>Projects</button></li>
                
            </ul>
        </div>
    );
}

export default Navbar;