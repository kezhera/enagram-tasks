import classnames from "./spellchecker.module.css"
import CopyIcon from "../../IconComponents/Copy"
import DeleteIcon from "../../IconComponents/Delete"
import CheckIcon from "../../IconComponents/Check"
import DropdownIcon from "../../IconComponents/Dropdown"

const SpellcheckerPage = () => {
    return ( <div>
        <div className={classnames.tools}>
            <button className={classnames.chechButton}>
                <div className={classnames.checkIconWrapper}>
                    <CheckIcon />
                </div>
                Check
            </button>
            <div className={classnames.toolsButtonWrapper}>
                <button className={`${classnames.toolsButton} ${classnames.copyButton}`}>
                    <CopyIcon />
                    Copy
                </button>
                <button className={classnames.toolsButton}>
                    <DeleteIcon />
                    Delete
                </button>
            </div>
            <div className={classnames.changeLanguageWrapper}>
                <div className={classnames.changeLanguageHead}>
                    <div className={classnames.changeLanguageImg}>
                        <img src="/images/united-kingdom.png" alt="UK" />
                    </div>
                    Language
                    <div className={classnames.changeLanguageIcon}>
                        <DropdownIcon />
                    </div>
                </div>
            </div>

        </div>
    </div> );
}
 
export default SpellcheckerPage;