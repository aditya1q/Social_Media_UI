import "./share.css"
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/image/13.jpg" alt="" />
                    <input className="shareInput" placeholder="What's on your mind" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionTest">Photo or Videos</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Label htmlColor="Blue" className="shareIcon" />
                            <span className="shareOptionTest">Tag</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Room htmlColor="red" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="Goldenrod" className="shareIcon" />
                            <span className="shareOptionTest">Emojies</span>
                        </div>
                    </div>
                    <button className="shareButton">share</button>
                </div>
            </div>
        </div>
    )
}
