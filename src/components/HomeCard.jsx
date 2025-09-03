


import { Link } from "react-router-dom"

function HomeCard({ plate }) {

    const { name, image, id, description } = plate;


    return (
        <>
            <div className="card col-3 m-2 bg-body-tertiary " style={{ width: "18rem" }}>
                <img src={image} className="card-img-top p-2 image-home" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>


                </div>
                <Link to={`/detail/${id}`} className="btn dettail-btn m-1">Dettail</Link>
            </div>
        </>
    )
}

export default HomeCard





