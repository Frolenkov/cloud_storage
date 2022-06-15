import css from "./fileList.module.css";
import { useSelector } from "react-redux";
import File from "./file/File";

const FileList = () => {
    const files = useSelector((state) => state.files.files);
    return (
        <div className={css.filelist}>
            <div className={css.header}>
                <div className={css.name}>Name</div>
                <div className={css.date}>Date</div>
                <div className={css.size}>Size</div>
            </div>
            {files.map((file) => (
                <File key={file._id} file={file} />
            ))}
        </div>
    );
};

export default FileList;
