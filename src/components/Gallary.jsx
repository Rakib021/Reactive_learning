const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
const  name = "hello"
  
export default function Gallary (){
  return (
    <div>
      <img src={avatar} alt={name} className="avatar" />
      <h1>This is scientist</h1>
    </div>
  );
}