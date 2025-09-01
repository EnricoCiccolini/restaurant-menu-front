

function DettailCard({ plate }) {

    const { name, image, id, description, allergens } = plate;

    return (
        <>
            <div className="card" style={{ maxWidth: "45rem" }}>
                <img src={image} class="card-img-top" alt={name} />
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
                {allergens.length > 0 ? <h4>allergens</h4> : <h4>No allergens</h4>}
                <ul className="list-group list-group-flush">
                    {allergens.map((allergen) => <li key={allergen.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <p>{allergen.name}</p>
                        <img className="allergen-logo" src={allergen.image} />
                    </li>)}

                </ul>

            </div>
        </>
    )
}

export default DettailCard