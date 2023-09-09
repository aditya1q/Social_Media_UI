import "./rightbar.css";
import { Users } from "../../Data";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/image/gift.png" alt="" />
          <span className="birthdayText">
            <b>Anubhav Purohit</b> and <b>3 others friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/image/ad2.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )

  }
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User infomation</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">City</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">From</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/image/11.jpg" alt="" />
            <span className="rightbarFollowingName">Larry</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/image/13.jpg" alt="" />
            <span className="rightbarFollowingName">Milly</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/image/14.jpg" alt="" />
            <span className="rightbarFollowingName">Jenny</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/image/9.jpg" alt="" />
            <span className="rightbarFollowingName">Otish</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/image/3.jpg" alt="" />
            <span className="rightbarFollowingName">Maze</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/image/12.jpg" alt="" />
            <span className="rightbarFollowingName">Leah</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/image/6.jpg" alt="" />
            <span className="rightbarFollowingName">Lathem</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/image/15.jpg" alt="" />
            <span className="rightbarFollowingName">Lily</span>
          </div>

        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
