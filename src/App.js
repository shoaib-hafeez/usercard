import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
// import userimage from './components/images/user.jpg';
import userimage from "../src/images/user.jpg";

function App() {
  const users = [
    {
      profile:  userimage ,
      // profile : "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      name : 'shoaib',
      city: "India",
      description: "FrontEnd developer And  Social app Manager",
    },
    {
      profile:  userimage ,
      // profile : "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      name : 'haris',
      city: "India",
      description: "FrontEnd developer And  Social app Manager",
    },
    {
      profile:  userimage ,
      // profile : "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      name : "jawed",
      city: "India",
      description: "FrontEnd developer And  Social app Manager",
    },
    {
      profile: userimage ,
      // profile : "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      name : 'ali',
      city: "India",
      description: "FrontEnd developer And  Social app Manager",
    },
    {
      profile:  userimage ,
      // profile : "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      name : 'wajid',
      city: "India",
      description: "FrontEnd developer And  Social app Manager",
    },
  ];

  return (
    <div className="App">
      {users.map((user, ind) => {
        return <Card post={user} key={ind} />;
      })}
    </div>
  );
}

export default App;
