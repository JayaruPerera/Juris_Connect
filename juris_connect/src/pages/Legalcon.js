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
      <section>
        <form>
          <h2> Describe your situation</h2>
          <h3>Ready to submit your question? Here's what we need from you</h3>
          <div className='box'> 
              <div className='input-box'>
                <label>Heading</label>
                <input type='text' className='field' placeholder='Enter your name' required/>

              </div>
              <div className='input-box'>
                <label>Topic</label>
                <input type='text' className='field' placeholder='Choose one' required/>

              </div>
              <div className='input-box'>
                <label>Home town</label>
                <input type='text' className='field' placeholder='Nearest city belong to this question' required/>

              </div>
               <div className='input-box'>
                  <label>Description</label>
                  <input type='text' className='field mess' placeholder='Briefly describe your question/problem' required/>

              </div>
               <div className='button'>
               <button className='button-submit'>Submit</button>
               <button className='button-cancel'>Cancel</button>
              </div>
          </div>
        </form>
      </section>
    </div>
    )
}