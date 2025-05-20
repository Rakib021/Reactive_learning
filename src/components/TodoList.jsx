const person ={
  name:"Rakibul Islam",
  avatar :"https://i.imgur.com/7vQD0fPs.jpg",
  des:"anyone",
  theme:{
    backgroundColor:'black',
    color:'pink'
  }
};

export default function TodoList(){
  return (

    <div style={person.theme}>

      <img src={person.avatar} alt={person.des} />
      <ul>
        <li>This is Rakib</li>
        <li>This is Rafi</li>
        <li>This is Someone</li>
        <li>This is everyone</li>
      </ul>
      </div>
  );
}