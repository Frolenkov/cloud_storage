import AvatarIcon from "./AvatarIcon";
import "./avatar.less"

const Avatar = ({ url = null }) => (
    <div className="avatar">
        {url ? <img src={url} alt="avatar" /> : <AvatarIcon />}
    </div>
);

export default Avatar;
