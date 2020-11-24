import './App.css';


function Card(props)
{
  return(
    <div className="container"> 
    <div className="card">
      <img src={props.image} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-title" > {props.genre}</p>
        <p className="card-title" > {props.description}</p>
        <a href="#" className="btn btn-primary">Go test</a>
      </div>
    </div>
  </div>

  );
}
export default Card;