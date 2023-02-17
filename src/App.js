import './App.css';
import Picture from "./component/Picture";
import data from './helper/data';

function App() {

  console.log(data);
  return (
    <div className="App">
      {data.map((item,index) =>(
        <Picture key={index} photographer={item.photographer} src={item.src.large} />
      ))}
    </div>
  )
}

export default App;
