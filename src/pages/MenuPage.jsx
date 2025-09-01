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


            <h1>MenuPage</h1>
            {loading && courseLoading ? <p>Loading...</p> : courses.map(course => <button key={course.id} onClick={() => setAttualCourse(course)}>{course.name}</button>

            )}

            <div className="container row g-3">
                {attualCourse ? <>
                    <h2>{attualCourse.name}</h2>
                    {loading && courseLoading ? <p>Loading...</p> : plates.filter((plate) => attualCourse ? plate.course.id === parseInt(attualCourse.id) : true).map(plate => <HomeCard key={plate.id} plate={plate} />

                    )}
                </> : <h3>choice a course</h3>}


            </div>
        </>
    )
}

export default MenuPage