import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DettailCard from "../components/DettailCard";



function PlateDettail() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    function getData() {
        setLoading(true);
        axios.get("http://localhost:8080/plates/api/" + id)
            .then(res => {

                setData(res.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }
    useEffect(() => {
        getData();

    }, []);

    return (
        <>

            <div className="container text-center text-white d-flex flex-column align-items-center justify-content-center m-3" >
                <h1>{data.name}</h1>
                <div className="container row g-3  text-center  d-flex flex-column align-items-center justify-content-center ">
                    {loading ? <p>Loading...</p> : <DettailCard key={data.id} plate={data} />}
                </div>
            </div>
        </>
    )
}

export default PlateDettail