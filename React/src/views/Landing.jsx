import React, { useEffect, useState } from 'react';
import './Landing.scss';
import axios from 'axios';
import Pageview from '../components/PageView';
import Error from '../components/Error';

const Landing = () => {

    const [all, setAll] = useState('active');
    const [individual, setIndividual] = useState('inactive');
    const [submit_button, setSB] = useState('inactive');
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [errorval, setErrorval] = useState('');


    useEffect(() => {
        getTicketList();
    },[]);

    

    const getTicketList = () => {
        axios.get(global.config.uri + 'api/fetch')
            .then(res => {
                if(res.data.tickets !== undefined)
                {
                    setErrorval('');
                    setData(res.data.tickets);
                }
                else
                {
                    setData([]);
                    setErrorval(res.data.error);
                }
                
            })
            .catch(err => {
                setData([]);
                setErrorval("Network Error");
            });
    }

    function handleAll(e) {
        e.preventDefault();
        getTicketList();
        setIndividual('inactive');
        setAll('active');
        setSB('inactive');
        setValue('');
        document.getElementById('input-field').disabled = true;
    }

    function handleIndividual(e) {
        e.preventDefault();
        setAll('inactive');
        setIndividual('active');
        setSB('active');
        document.getElementById('input-field').disabled = false;
    }

    function handleSubmit() {
        if(submit_button === 'active')
        {
            axios.get(global.config.uri + 'api/fetch/ticket?ticket='+value)
            .then(res => {
                if(res.data.ticket !== undefined)
                {
                    setErrorval('');
                    setData([res.data.ticket]);
                }
                else
                {
                    setData([]);
                    setErrorval(res.data.error);
                }
            })
            .catch(err => {
                setData([]);
                setErrorval("Network Error");
            });
        }
    }

    return(

        <div className="landing">

            <div className="landing-header">
                <p>Ticket Viewer</p>
            </div>

            <div className="container">
                <div className="sub-container">
                    <div className="box1">
                        <div className="box1-1">
                            <div className="lensToggle">
                                <div className={`b ${all}`} onClick={handleAll}><p>All Tickets</p></div>
                                <div className={`b ${individual}`} onClick={handleIndividual}><p>Filter</p></div>
                            </div>
                         </div>
                         <div className="box1-2">
                            <input type="text" id="input-field" placeholder="Input Ticket Id" value={value} onChange={event => setValue(event.target.value)} disabled></input>
                            <button className={submit_button} id="submit_button" onClick={handleSubmit}>Submit</button>
                         </div>
                    </div>
                    <div className="box2">
                        {data!== undefined && data.length>0 &&
                        <Pageview data={data}/>
                        }
                        {
                            (data.length === 0 && errorval.length>0) &&
                            <Error error={errorval}/>
                        }
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Landing;

