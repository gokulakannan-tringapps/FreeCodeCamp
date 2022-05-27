import React from 'react'
import axios from 'axios'

axios.defaults.baseURL = "https://opentdb.com/"

const ApiFetch = (url) => {
    const[response,setResponse]=React.useState(null);
    const[loading,setLoading]=React.useState(true);

    React.useState( () => {
        const fetchData = () => {
            axios
            .get(url)
            .then( getData => setResponse( getData.data))
            .finally( () => setLoading(false) )
        }
        fetchData()
    },[url])

    return{response,loading}
}

export default ApiFetch;