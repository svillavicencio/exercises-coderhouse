import DownloadButton from "./DownloadButton"


export default function Item (props) {
    return <div className="bg-gray-50 mx-5 my-3 rounded-md shadow-md flex justify-between items-center px-8 py-2 font-mono">
        <div>
            <p className="text-2xl font-bold">Titulo</p>
            <p className="text-lg font-semibold">subtitulo</p>
            <p className="font-light">fecha de subida</p>
            <p className="underline capitalize">autor</p>
        </div>
        <div>
            <DownloadButton iconSize= '2em'/>
        </div>
    </div>
}