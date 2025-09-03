import axios from "axios";
import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";

function MenuPage() {




    const [plates, setPLates] = useState([]);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [attualCourse, setAttualCourse] = useState(null);
    const [courseLoading, setCourseLoading] = useState(true);


    function getPlates() {
        setLoading(true);
        axios.get("http://localhost:8080/plates/api")
            .then(res => {

                setPLates(res.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }

    function getCourses() {
        setCourseLoading(true);
        axios.get("http://localhost:8080/courses/api")
            .then(res => {

                setCourses(res.data);
            })
            .catch(err => console.log(err))
            .finally(() => setCourseLoading(false));
    }



    useEffect(() => {
        getPlates();
        getCourses();

    }, []);

    return (
        <>

            <div className="container text-center text-white d-flex flex-column align-items-center justify-content-center m-3" >
                <img src="logo.png" alt="" style={{ maxWidth: "10rem" }} />
                <div>
                    {loading && courseLoading ? <p>Loading...</p> : courses.map(course => <button className="btn btn-outline-light m-2" key={course.id} onClick={() => setAttualCourse(course)}>{course.name}</button>

                    )}
                </div>
                <div className="container row g-3">
                    {attualCourse ? <>
                        <h2>{attualCourse.name}</h2>
                        {loading && courseLoading ? <p>Loading...</p> : plates.filter((plate) => attualCourse ? plate.course.id === parseInt(attualCourse.id) : true).map(plate => <HomeCard key={plate.id} plate={plate} />

                        )}
                    </> : <h3>choice a course</h3>}

                </div>
            </div>
        </>
    )
}

export default MenuPage