export const CancionListar = () => {
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>La noche</td>
                <td>Joe arroyo</td>
                <td>4.5</td>
                <td>Salsa</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mi ex tenia razon</td>
                <td>Karol G</td>
                <td>4.5</td>
                <td>Reggaeton</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sin medir distancia</td>
                <td>Diomedez diaz</td>
                <td>4.8</td>
                <td>Vallenato</td>
              </tr>
              <tr>
                <td>4</td>
                <td>My inmortal</td>
                <td>Evanescense</td>
                <td>5.2</td>
                <td>Metal soft</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
