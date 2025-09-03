import { Link } from "react-router-dom"



function HomePage() {


    return (
        <>
            <div className="container text-center text-white d-flex flex-column align-items-center justify-content-center m-3" >
                <img src="https://resizer.otstatic.com/v3/photos/76291428-2?width=1280&height=720&webp=true" alt="restorant-inside" />
                <h1>welcome to my restaurant </h1>
                <h2>click on menu to see our dishes</h2>
                <Link className="btn btn-outline-light home-btn" to="/menu">menu</Link>




            </div>
        </>
    )
}

export default HomePage