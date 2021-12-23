import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";


export default function Avatar(){
    return (
        <IconContext.Provider value={{ color: "white", size: "1.55em" }}>
            <div>
                <CgProfile />
            </div>
        </IconContext.Provider>
    )
}