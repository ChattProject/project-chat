export const Greeting = () => {
  return (
    <>
      <div className="greeting">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <img className="d-block w-100" src="..." alt="First slide" /> тут писати код сторінки там де типу  привітання */}
            </div>
            <div className="carousel-item">
              {/* <img className="d-block w-100" src="..." alt="Second slide" /> тут писати код сторінки там де типу  привітання */}
            </div>
            <div className="carousel-item">
              {/* <img className="d-block w-100" src="..." alt="Third slide" />тут писати код сторінки там де типу  привітання */}
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};
