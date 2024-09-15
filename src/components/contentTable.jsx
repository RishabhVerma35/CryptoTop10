import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../tablestyle.css';

const TableName_Style = {
    fontWeight: 'larger',
    color: "rgb(108, 117, 125)"
};




function MyContentTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

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

  return (
  
    <div className="table-responsive ml-2 mr-2">
      
      <table className="table table-border table-hover fw-bold table-dark">
        <thead>
          <tr>
            <th scope="col" style={TableName_Style}>#</th>
            <th scope="col" style={TableName_Style}>Platform</th>
            <th scope="col" style={TableName_Style}>Last Traded Price</th>
            <th scope="col" style={TableName_Style}>Buy Price</th>
            
            <th scope="col" style={TableName_Style}>Difference</th>
            <th scope="col" style={TableName_Style}>Savings</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.base_unit}</td>
              <td>₹{item.last}</td>
              <td>₹{item.buy}/₹{item.sell}</td>
              <td>{item.volume}</td>
              <td>{item.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MyContentTable;