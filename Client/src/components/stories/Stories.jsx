import React, { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {

    const { currentUser } = useContext(AuthContext);

    console.log(currentUser);
    const stories = [
        {
            id: 1,
            name: "Tayfun Top",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=1"
        },
        {
            id: 2,
            name: "Tayfun Top",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=1"
        },
        {
            id: 3,
            name: "Tayfun Top",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=1"
        },
        {
            id: 4,
            name: "Tayfun Top",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=1"
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {
                stories.map((item) => (
                    <div className="story" key={item.id}>
                        <img src={item.img} alt="" />
                        <span>{item.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Stories