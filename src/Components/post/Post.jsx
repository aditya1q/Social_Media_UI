import "./post.css"
import { MoreVert } from '@mui/icons-material';
// import { FavoriteBorder, ThumbUpOffAlt} from '@mui/icons-material';
import { Users } from "../../Data";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [islike, issetLike] = useState(post.photo)

  const likeHandler = () => {
    setLike(islike ? like + 1 : like - 1)
    issetLike(!islike)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userid)[0].profilePicture} alt="" />
            <span className="postUserName">{Users.filter((u) => u.id === post?.userid)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRIght">
            <MoreVert />
          </div>
        </div>


        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* <FavoriteBorder className="likeIcon"/>
            <ThumbUpOffAlt className="likeIcon" /> */}
            <img className="likeIcon" src="/image/like.png" alt="" onClick={likeHandler} />
            <img className="likeIcon" src="/image/heart.png" alt="" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <img className="likeIcon" src="/image/comment.png" alt="" />
            <span className="postCommenttText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
