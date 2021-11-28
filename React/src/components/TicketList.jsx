import React, { useEffect, useState } from 'react';
import './TicketList.scss';

const TicketList = (props) => {

    const [data,setData] = useState([]);

    useEffect(() => {
        setData(props.ticketList);
    },[props.ticketList]);

    function handleExpand(id){
        var height = document.getElementById('ticket'+id).offsetHeight;
        if(height === 80)
        {
            document.getElementById('ticket'+id).style.height = "180px";
            document.getElementById('description'+id).style.visibility = "visible";
        }
        else
        {
            document.getElementById('ticket'+id).style.height = "80px";
            document.getElementById('description'+id).style.visibility = "hidden";
        }
    }

    function handleUrl(event){
        event.stopPropagation();
    }

    return(

        <div className="ticketList">
            {
                data.length>0 &&
                    data.map((d) => (
                        <div key={d.id} className={`ticket ticket${d.id}`} id={`ticket${d.id}`} onClick={e => handleExpand(d.id)}>
                            <div className="divbox">
                                <div className="divbox-1">
                                    <p>#{d.id}&nbsp;&nbsp;{d.subject}</p>
                                </div>
                                <div className="divbox-2">
                                    <div className={`status ${d.status}`}>{d.status}</div>
                                </div>
                            </div>
                            <div className="url" onClick={handleUrl}>
                                <p id="url">URL : <a target="_blank" rel="noreferrer" href={d.url}>Get Ticket JSON</a></p>
                            </div>

                            
                            <div className="description" id={`description${d.id}`}>
                                {d.description}
                            </div>
                            

                        </div>
                    ))
            }
        </div>
    )

}

export default TicketList;