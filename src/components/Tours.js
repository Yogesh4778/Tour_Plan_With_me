import Card from "./Card";

function Tours({tours,removeTour}) {
 return(<div className="container">
            <div>
                <h2 className="heading">Plan With Yogesh</h2>
            </div>
            <div className="cards">
                {/* har 1 single tour k lie card create kiya using map function */}
                {tours.map( (tour) => {
                    // always use key when you run map fn over a list(Good rule of thumb)
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })}
            </div>
      </div>
        );
}

export default Tours;