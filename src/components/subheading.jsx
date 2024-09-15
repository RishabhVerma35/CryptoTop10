import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumericHeading = {
    color: '#3dc6c1',
    fontWeight: "bolder",
    fontSize: '2rem'
};
const DescriptionStyle = {
    color: '#6c757d',
    fontSize: '0.7rem',
    marginTop: '0.5rem'
};

const CentreMainHeading = {
    fontSize: '3rem',
    color: '#FFFFFF',
    alignItems: 'center',  
    justifyContent: 'flex-start',
    fontWeight: "bolder"
}


const TopTextStyle = {
    marginBottom: '0.1rem',
    color: '#6c757d'
};



function SubHeading() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track error state

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Start loading
                const response = await axios.get('http://localhost:5432/data');
                setData(response.data);
                setLoading(false); // End loading
            } catch (error) {
                setError(error.message);
                setLoading(false); // End loading even if there's an error
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading data...</div>; // Show loading message
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message
    }

   
    const topItem = data[0] || {};
    const lastChangePercent = topItem.lastChangePercent || '0.96%';
    const bestPrice = topItem.last || '$50,00,00';
  

    return (
        <div className="row text-center mx-2 mt-5 mb-5">
            <div className="col-md-2 themed-grid-col">
                <div style={NumericHeading}>
                    {lastChangePercent}
                    <div style={DescriptionStyle}>5 min</div>
                </div>
            </div>

            <div className="col-md-2 themed-grid-col">
                <div style={NumericHeading}>
                    {lastChangePercent}
                    <div style={DescriptionStyle}>1 Hour</div>
                </div>
            </div>

            <div className="col-md-4 themed-grid-col">
                <div>
                    <div style={TopTextStyle}>Best Price to Trade</div>
                    <div style={CentreMainHeading}>{bestPrice}</div>
                    <div style={DescriptionStyle}>Average BTC/INR net price including commision</div>
                </div>
            </div>

            <div className="col-md-2 themed-grid-col">
                <div style={NumericHeading}>
                    {lastChangePercent}
                    <div style={DescriptionStyle}>1 Day</div>
                </div>
            </div>

            <div className="col-md-2 themed-grid-col">
                <div style={NumericHeading}>
                    {lastChangePercent}
                    <div style={DescriptionStyle}>7 Days</div>
                </div>
            </div>
        </div>
    );
}
export default SubHeading;