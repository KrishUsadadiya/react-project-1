
import './App.css';
import Profile from './component/profile';

function App() {
  return (
    <div className="App">
  <Profile age={20} name="Hardik" gmail="hardik2000@gmail.com" gender="male" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s" education="Doctur"/>
  <Profile age={20} name="krish" gmail="krish@gmail.com" gender="male" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s" education="farmur"/>
  <Profile age={20} name="jay" gmail="jay2000@gmail.com" gender="male" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s" education="Doctur"/>
  <Profile age={20} name="yash" gmail="yash@gmail.com" gender="male" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s" education="Doctur"/>
    </div> 
     
  );
}

export default App;
