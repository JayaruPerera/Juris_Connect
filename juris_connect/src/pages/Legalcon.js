import Navbar from '../components/Header/navbar'
import "./Legalcon.css"
import img1 from "../Assets/Legalcon.jpeg"


export default function Legalcon(){
    return(
        <div>
      <Navbar />
      <div className="content">
        <div className="left">
          <h1>Get the legal help <br/> you need</h1>
          <p>Every problem is unique, and we offer personalized <br />recomendations to suit your specific needs</p>
          <div className='buttons'>
          <button className='button-left'>Ask your legal question</button>
          <button className='button-right'>Free legal advice</button>
          </div>
        </div>
        <div className="right">
          <img src={img1} alt="Description" />
        </div>
      </div>
    </div>
    )
}