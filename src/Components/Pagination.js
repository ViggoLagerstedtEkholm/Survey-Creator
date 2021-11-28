function Pagination (props) {
    const {nextStep, previousStep, currentStep, totalSteps} = props;

    return(
        <div className="content-pagination">
            <h1>{currentStep  + " / " + totalSteps}</h1>

            {totalSteps > 1 ?
                <div>
                    <div className="content-pagination-bar">
                        <div>
                            {currentStep > 1 ?
                                <button className="pagination-button" onClick={previousStep}>🡸</button>
                           : null}

                        </div>
                        <div>
                            {currentStep < totalSteps ?
                                <button className="pagination-button" onClick={nextStep}>🡺</button>
                                : null}
                        </div>
                    </div>
                </div>: null
            }
        </div>
    );
}

export default Pagination;
