
const FirstCardImage = (props) => {
    return (
        <div>
            <img src={props.img} className="katiePic" alt="KatiePicture"></img>
            <h1 className="starIcon"><i class="fa fa-star"></i>
            </h1><h2 className="h2">{props.rating}</h2><h3 className="h3Transparent">{props.reviewcount} . {props.country}</h3>
            <h1 className="KatieTitle">{props.title}</h1>
            <div className="KatiePriceCont">
                <h1 className="katiePrice">{props.price}</h1> <p className="person">/ person</p>
            </div>
        </div>
    )
}

export default FirstCardImage
