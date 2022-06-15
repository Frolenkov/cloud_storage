import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../actions/file";
import FileList from "./fileList/FileList";
import css from "./disk.module.css";
import Popup from "./Popup/Popup";
import { setCurrentDir, setPopupDisplay } from "../../reducers/fileReducer";

const Disk = () => {
    const dispatch = useDispatch();
    const { currentDir, dirStack } = useSelector((state) => state.files);
    useEffect(() => {
        dispatch(getFiles(currentDir));
    }, [currentDir]);

    const showPopupHandler = () => dispatch(setPopupDisplay(true));

    const backClickHandler = () => {
        const backDir = dirStack.pop();
        dispatch(setCurrentDir(backDir));
    };

    const fileUploadHandler = () => null;

    return (
        <div className={css.disk}>
            <div className={css.buttons}>
                <button className={css.back} onClick={() => backClickHandler()}>
                    Back
                </button>
                <button
                    className={css.create}
                    onClick={() => showPopupHandler()}
                >
                    Create directory
                </button>
                <div className={css.upload}>
                    <label className={css.label}>
                        Upload file
                        <input multiple={true} onChange={e => fileUploadHandler(e)} type="file" className={css.input} />
                    </label>
                </div>
            </div>
            <FileList />
            <Popup />
        </div>
    );
};

export default Disk;
