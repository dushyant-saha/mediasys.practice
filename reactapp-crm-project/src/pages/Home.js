import './../App.css';

export const Home = () => {
    return (
        <section>
            <div className='hero'>
                <div className='custom-row'>
                    <h1 className='ps border-bottom border-3 border-dark opacity-75 fw-bolder d-inline-block border-opacity-50'>HOME</h1>
                </div>
            </div>
            <div className='custom-row'>
                <p className='fs-5 opacity-75 fw-bold' >Hi this is the new home page to the CRM project</p>
            </div>
            {/* <NewCounter/>
      <UserData/> */}
        </section>
    );
};