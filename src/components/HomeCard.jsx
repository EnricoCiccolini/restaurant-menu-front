


import { Link } from "react-router-dom"

function HomeCard({ plate }) {

    const { name, image, id, description } = plate;


    return (
        <>
            <div className="card col-4 " style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>


                </div>
                <Link to={`/detail/${plate.id}`} className="btn btn-primary">Dettagli</Link>
            </div>
        </>
    )
}

export default HomeCard





