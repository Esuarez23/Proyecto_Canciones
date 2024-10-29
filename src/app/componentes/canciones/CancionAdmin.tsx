export const CancionAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <td>No.</td>
                <th>Titulo cancion</th>
                <th>Cantante</th>
                <th>Duracion</th>
                <th>Género</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>La noche</td>
                <td>Joe arroyo</td>
                <td>4.5</td>
                <td>Salsa</td>
                <th>
                <a href="/canact/1">
                <i className="fa-solid fa-pen-to-square" style={{color: "#0346fb"}}></i>
                </a>
                &nbsp; &nbsp; 
                  <i className="fa-solid fa-trash-can" style={{color:"#ff3f33"}}></i>
                </th>
              </tr>
              <tr>
                <td>2</td>
                <td>Mi ex tenia razon</td>
                <td>Karol G</td>
                <td>4.5</td>
                <td>Reggaeton</td>
                <th>
                <a href="/canact/2">  
                <i className="fa-solid fa-pen-to-square" style={{color: "#0346fb"}}></i>
                </a>
                &nbsp; &nbsp;  
                  <i className="fa-solid fa-trash-can" style={{color:"#ff3f33"}}></i>
                </th>
              </tr>
              <tr>
                <td>3</td>
                <td>Sin medir distancia</td>
                <td>Diomedez diaz</td>
                <td>4.8</td>
                <td>Vallenato</td>
                <th>
                <a href="/canact/3"> 
                <i className="fa-solid fa-pen-to-square" style={{color: "#0346fb"}}></i>
                </a> 
                &nbsp; &nbsp;  
                  <i className="fa-solid fa-trash-can" style={{color:"#ff3f33"}}></i>
                </th>
              </tr>
              <tr>
                <td>4</td>
                <td>My inmortal</td>
                <td>Evanescense</td>
                <td>5.2</td>
                <td>Metal soft</td>
                <th>
                <a href="/canact/4"> 
                <i className="fa-solid fa-pen-to-square" style={{color: "#0346fb"}}></i>
                </a> 
                &nbsp; &nbsp;  
                  <i className="fa-solid fa-trash-can" style={{color:"#ff3f33"}}></i>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
