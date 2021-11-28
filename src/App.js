import './App.css';

import MultiPageForm from "./Components/MultiStepForm";
import {Form1} from "./Components/Forms/Form1";
import {Form2} from "./Components/Forms/Form2";
import {Form3} from "./Components/Forms/Form3";
import {Form4} from "./Components/Forms/Form4";

const Forms = [Form1, Form2, Form3, Form4];

function App() {
  return (
    <div className="container">
        <MultiPageForm components={Forms}/>
    </div>
  );
}

export default App;
