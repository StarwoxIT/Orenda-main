import React, { useEffect, useState } from 'react';
import { fetchCustomData } from '../../APIS/ProviderApi';

const ConsumerTest = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchCustomData();
                setData(result);
               
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        console.log(data)
    }, []);


  return (
    <div>
        <p>love</p>
    </div>
  )
}

export default ConsumerTest