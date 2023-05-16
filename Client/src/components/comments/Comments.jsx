import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () => {

    const { currentUser } = useContext(AuthContext);

    const comments = [
        {
            id: 1,
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            name: "Mehmet Koyuncu",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            name: "Elif Put",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
    ];

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {
                comments.map((item) => (
                    <div className="comment" key={item.id}>
                        <img src={item.profilePic} alt="" />
                        <div className="info">
                            <span>{item.name}</span>
                            <p>{item.desc}</p>
                        </div>
                        <span className="date">1 hour ago</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments