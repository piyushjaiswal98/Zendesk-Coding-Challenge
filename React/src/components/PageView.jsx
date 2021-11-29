import React, { useEffect, useState } from 'react';
import './PageView.scss';
import TicketList from '../components/TicketList';
import ReactPaginate from 'react-paginate';

const Pageview = (props) => {

    const [data, setData] = useState([]);
    const [cdata, setCdata] = useState([]);

    const PER_PAGE = 25;
    const pageCount = Math.ceil(data.length / PER_PAGE);

    useEffect(() => {
        // console.log(props.data);
        setData(props.data);
        if(props.data && props.data.length>25)
        {
        var d = props.data
                .slice(0, PER_PAGE);
        setCdata(d); }
        else{
            setCdata(props.data);
        }
    },[props.data]);

    function handlePageClick({ selected: selectedPage }) {
        var d = data
                .slice(selectedPage*PER_PAGE, (selectedPage*PER_PAGE) + PER_PAGE);
        setCdata(d);
    }

    return(

        <div className="pageview">
                        
            <TicketList ticketList={cdata}/>
                        {/* <br/> */}
            <div className="page-class">
            <ReactPaginate
                            previousLabel={"← Previous"}
                            nextLabel={"Next →"}
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}        
            /> 
            </div>

        </div>
    )

}

export default Pageview;

