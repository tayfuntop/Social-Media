import './leftBar.scss';
import Friends from '../../assets/1.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Courses from '../../assets/12.png';
import Fund from '../../assets/13.png';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  const leftTopBarItems = [
    {
      icon: Friends,
      title: 'Friends'
    },
    {
      icon: Groups,
      title: 'Groups'
    },
    {
      icon: Market,
      title: 'Marketplace'
    },
    {
      icon: Watch,
      title: 'Watch'
    },
    {
      icon: Memories,
      title: 'Memories'
    }
  ];

  const leftShoutcutsBarItems = [
    {
      icon: Events,
      title: 'Events'
    },
    {
      icon: Gaming,
      title: 'Gaming'
    },
    {
      icon: Gallery,
      title: 'Gallery'
    },
    {
      icon: Videos,
      title: 'Videos'
    },
    {
      icon: Messages,
      title: 'Messages'
    }
  ];

  const leftOthersBarItems = [
    {
      icon: Fund,
      title: 'Fundraisers'
    },
    {
      icon: Tutorials,
      title: 'Tutorials'
    },
    {
      icon: Courses,
      title: 'Courses'
    },
  ];

  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          {
            leftTopBarItems.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.icon} alt="" />
                <span>{item.title}</span>
              </div>
            ))
          }
        </div>
        <hr />
        <div className="menu">
          <span>Your shoutcuts</span>
          {
            leftShoutcutsBarItems.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.icon} alt="" />
                <span>{item.title}</span>
              </div>
            ))
          }
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          {
            leftOthersBarItems.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.icon} alt="" />
                <span>{item.title}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LeftBar;