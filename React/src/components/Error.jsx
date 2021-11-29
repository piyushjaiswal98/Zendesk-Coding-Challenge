import React, { useEffect, useState } from 'react';
import './Error.scss';

const Error = (props) => {

    const [data, setData] = useState();

    useEffect(() => {
        setData(props.error);
    },[props.error]);

    return(

        <div className="error">
            <p>Error: {data}</p>
        </div>
    )

}

export default Error;

