import "../style/NotFound.css"

export const NotFound = () => {
    return (
      <div style={{margin:"300px 0", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <h1 style={{fontFamily:"sans-serif", fontSize:"100px", fontWeight:"bolder"}}>Error 404</h1>
          <p style={{fontFamily:"sans-serif", fontSize:"50px"}}>Pagina non trovata, ricontrolla il link</p>
      </div>
    );
  };
  