import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "Tayfun Top",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      name: "Selin Akalan",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];

  return (
    <div className="posts">
      {
        posts.map((item) => (
          <Post key={item.id} post={item} />
        ))
      }
    </div>
  )
}

export default Posts