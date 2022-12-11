import DropdownIcon from "../../IconComponents/Dropdown"
import classnames from "./profile.module.css"

const Profile = () => {
    return ( 
        <div>
            <button className={classnames.profileWrapper}>
                <img src="/images/profile.png" alt="user name" className={classnames.profileImg}/>
                <div className={classnames.iconWrapper}>
                    <DropdownIcon />
                </div>
            </button>
        </div>
    );
}
 
export default Profile;