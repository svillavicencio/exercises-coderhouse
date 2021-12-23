import { IconContext } from "react-icons";
import { BsDownload } from "react-icons/bs";

export default function DownloadButton(props){
    
    return <IconContext.Provider value={{ color: 'black', size: props.iconSize}}>
    <div className="bg-green-500 w-fit p-2 rounded-lg hover: cursor-pointer">
      <BsDownload />
    </div>
  </IconContext.Provider>
}