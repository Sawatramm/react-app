import profilePic from './assets/pictureCard.png'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Maneerat</h2>
            <p className="card-text">I am student</p>
        </div>
    );

}
export default Card