import Evento from "../../../assets/img/Evento.jpg"

export const Inicio = () => {
  return (
    <>
    <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src={Evento} alt="imagen de bienvenida" width="75" height="90"/>
    <h1 className="display-5 fw-bold text-body-emphasis">Bienvenidos a el Inicio</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">INICIO</button>
      </div>
    </div>
  </div>
    </>
  );
};
