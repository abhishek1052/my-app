import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/styles.css"
import data from "./data";
function Notes  (obj)  {
  return (
      <div className='container'>
          <h1 style={{wordWrap:"break-word"}} >
              {obj.Title}
          </h1>
          <p style={{paddingLeft:"20px",wordWrap:"break-word"}} >
              {obj.Content}
          </p>
      </div>
  )
}
function App() {
  return (
    <>
    <Header />
    <br />
    <div className="Notescontainer">
      {data.map(Notes)}
    </div>
    <Footer/>
    </>
  );
}
export default App;
