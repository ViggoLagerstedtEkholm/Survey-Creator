import {useState} from "react";
import Pagination from "./Pagination";

function MultiPageForm (props) {
    const [step, setStep] = useState(1);
    const { components } = props;

    const nextStep = () =>{
        setStep(step + 1);
    }

    const previousStep = () =>{
        setStep(step - 1);
    }

    const Component = components[step - 1];
    const totalSteps = components.length;

    return(
        <div>
            <Pagination nextStep={nextStep} previousStep={previousStep} currentStep={step} totalSteps={totalSteps}/>
            <Component/>
        </div>
    );
}

export default MultiPageForm;
