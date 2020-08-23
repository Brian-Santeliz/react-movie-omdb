import React from 'react';

const Error = ({error}) => {
    if(error === '') return null
    return (
        <>
        <div className="container">
            <div className="row px-5">
                <div className="col-md-8 mx-auto">
                    <div className="alert alert-danger p-3 mt-2 text-uppercase font-weight-bold">
                        <p className="text-center">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
     );
}

export default Error;