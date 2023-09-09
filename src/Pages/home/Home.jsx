import Topbar from '../../Components/topbar/Topbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Rightbar from '../../Components/rightbar/Rightbar';
import Feed from '../../Components/feed/Feed';
// import Profile from '../profile/Profile';
import "./Home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        {/* <Profile /> */}
        <Feed />
        <Rightbar />
      </div>
    </>

  );
}