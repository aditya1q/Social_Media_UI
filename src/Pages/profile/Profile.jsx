import Topbar from '../../Components/topbar/Topbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Rightbar from '../../Components/rightbar/Rightbar';
import Feed from '../../Components/feed/Feed';
import "./profile.css";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="Profile">
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img className='profileCoverImg' src="/Image/ad2.png" alt="" />
                            <img className='profileUserImg' src="/Image/5.jpg" alt="" />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileinfoName'>jennifer lawrence</h4>
                            <h4 className='profileinfoDesc'>Hellow guys I'm American Actress</h4>
                            
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
