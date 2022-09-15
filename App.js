import { fetchData } from './AWSFunctions';
import './App.css';

function App() {
    const fetchDataFromDynamoDb = () => {
      fetchData('Tomatoes');
    }

    return <>
    <button onClick={()=> fetchDataFromDynamoDb()}> Fetch </button>
    </>
}

export default App;
