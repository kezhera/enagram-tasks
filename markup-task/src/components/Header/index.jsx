import Profile from "../Profile/index"
import classnames from "./header.module.css"

const Header = () => {
	return ( 
		<header className={classnames.headerWrapper}>
			<div className={classnames.headerButtonGroup}>
				<button className={`${classnames.headerButton} ${classnames.cromeButton}`}>
					<img src={"/images/crome-icon.png"} alt="crome icon" />
					Add to Chrome
				</button>
				<button className={`${classnames.headerButton} ${classnames.upgradeProButton}`}>
					Upgrade to Pro 
				</button>
			</div>
			<Profile />
		</header>
	);
}
 
export default Header;