import { Link } from "react-router-dom";
import classnames from "./sidebar.module.css"
import SpellcheckerIcon from "../../IconComponents/Spellchecker"
import TextToSpeechIcon from "../../IconComponents/TextToSpeech"
import SpeechToTextIcon from "../../IconComponents/SpeechToText"

import SettingsIcon from "../../IconComponents/Settings"
import FacebookIcon from "../../IconComponents/Facebook"
import ContactSupportIcon from "../../IconComponents/ContactSupport"

import DayModeIcon from "../../IconComponents/IconFeatherSun"
import DarKModeIcon from "../../IconComponents/IconAwesomeMoon"

const Sidebar = () => {
    return (
        <div className={classnames.sidebarWrapper}>
            <nav className={`${classnames.navigationWrapper} ${classnames.mainNavigation}`}>
                <Link to={'/'} className={`${classnames.navigationLink} ${classnames.navigationActiveLink}`}>
                    <span className={`${classnames.navigationActiveLinkVisual} ${classnames.topVisual}`} />
                    <span className={`${classnames.navigationActiveLinkVisual} ${classnames.bottomVisual}`} />
                    <SpellcheckerIcon />
                    Spellchecker
                </Link>
                <Link to={'/text-to-speech'} className={classnames.navigationLink}>
                    <TextToSpeechIcon />
                    Text to speech
                </Link>
                <Link to={'/speech-to-text'} className={classnames.navigationLink}>
                    <SpeechToTextIcon />
                    Speech to text
                </Link>
            </nav>

            <div className={classnames.sidebarFooter}>
                <nav className={`${classnames.navigationWrapper} ${classnames.sidebarNavigation}`}>
                    <Link to={'/'} className={classnames.navigationLink}>
                        <SettingsIcon />
                        Settings
                    </Link>
                    <Link to={'/'} className={classnames.navigationLink}>
                        <FacebookIcon />
                        Facebook
                    </Link>
                    <Link to={'/'} className={classnames.navigationLink}>
                        <ContactSupportIcon />
                        Contact support
                    </Link>
                </nav>

                <button className={classnames.toggleThemeMode}>
                    <DayModeIcon className={classnames.dayMode}/>
                    <DarKModeIcon className={classnames.darkMode}/>
                </button>
            </div>
        </div>
    );
}
 
export default Sidebar;