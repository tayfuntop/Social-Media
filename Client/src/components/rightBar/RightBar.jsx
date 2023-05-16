import "./rightBar.scss";

const RightBar = () => {

  const rightBarSuggestionsItems = [
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Tayfun Top"
    },
  ];

  const rightBarLatestActivitiesItems = [
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Tayfun Top",
      action: "changed their cover picture",
      time: "1 minutes ago"
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Sibel Top",
      action: "changed their cover picture",
      time: "1 minutes ago"
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yeşim Top",
      action: "changed their cover picture",
      time: "1 minutes ago"
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Aziz Top",
      action: "changed their cover picture",
      time: "1 minutes ago"
    },
  ];

  const rightBarOnlineFriendsItems = [
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Tayfun Top"
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Nuran Aslan"
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Tayfun Top"
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Nuran Aslan"
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Tayfun Top"
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Nuran Aslan"
    },
  ];

  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {
            rightBarSuggestionsItems.map((item, index) => (
              <div className="user" key={index}>
                <div className="userInfo">
                  <img src={item.img} alt="" />
                  <span>{item.name}</span>
                </div>
                <div className="buttons">
                  <button>follow</button>
                  <button>dismiss</button>
                </div>
              </div>
            ))
          }
        </div>
        <div className="item">
          <span>Latest Activities</span>
          {
            rightBarLatestActivitiesItems.map((item, index) => (
              <div className="user" key={index}>
                <div className="userInfo">
                  <img src={item.img} alt="" />
                  <p>
                    <span>{item.name}</span>
                    {item.action}
                  </p>
                </div>
                <span>{item.time}</span>
              </div>
            ))
          }
        </div>
        <div className="item">
          <span>Online Friends</span>
          {
            rightBarOnlineFriendsItems.map((item, index) => (
              <div className="user" key={index}>
                <div className="userInfo">
                  <img src={item.img} alt="" />
                  <div className="online" />
                  <span>{item.name}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RightBar;