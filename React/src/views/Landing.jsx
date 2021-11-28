import React, { useEffect, useState } from 'react';
import './Landing.scss';
import axios from 'axios';
import Pageview from '../components/PageView';

const Landing = () => {

    const [all, setAll] = useState('active');
    const [individual, setIndividual] = useState('inactive');
    const [submit_button, setSB] = useState('inactive');
    const [data, setData] = useState([]);


    useEffect(() => {
        getTicketList();
    },[]);

    

    const getTicketList = () => {
        axios.get(global.config.uri + 'api/fetch')
            .then(res => {
                setData(res.data.tickets);
            })
            .catch(err => {
                console.log("Error: " + err);
            });
    }

    function handleAll(e) {
        e.preventDefault();
        setIndividual('inactive');
        setAll('active');
        setSB('inactive')
        document.getElementById('input-field').disabled = true;
    }

    function handleIndividual(e) {
        e.preventDefault();
        setAll('inactive');
        setIndividual('active');
        setSB('active');
        document.getElementById('input-field').disabled = false;
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
                            <input type="text" id="input-field" placeholder="Input Ticket Id" disabled></input>
                            <button className={submit_button} id="submit_button" disabled>Submit</button>
                         </div>
                    </div>
                    <div className="box2">
                        <Pageview data={data}/>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Landing;

