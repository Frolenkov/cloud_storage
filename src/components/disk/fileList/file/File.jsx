import css from "./file.module.css";
import DirIcon from "./DirIcon";
import FileIcon from "./FileIcon";
import { useDispatch, useSelector } from "react-redux";
import { pushToStack, setCurrentDir } from "../../../../reducers/fileReducer";

const File = ({ file }) => {

    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);

    const openDirHandler = () => {
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir(file._id))
    };

    return (
        <div className={css.file} onClick={file.type === 'dir' ? ()=>openDirHandler() : null}>
            <div className={css.img}>
                {file.type === "dir" ? <DirIcon /> : <FileIcon />}
            </div>
            <div className={css.name}>{file.name}</div>
            <div className={css.date}>{file.date?.slice(0, 10)}</div>
            {file.type !== "dir" && <div className={css.size}>{file.size}</div>}
        </div>
    );
};

export default File;
