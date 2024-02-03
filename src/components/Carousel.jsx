import React from 'react'

const Carousel = () => {
  return (
    <>
   <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://sg-test-11.slatic.net/other/roc/75a9d699aa07c92ca2876174b9ec93ef.jpg" className="d-block w-100" alt="..." width={100} height={500}/>
    </div>
    <div className="carousel-item">
      <img src="https://sg-test-11.slatic.net/other/roc/fb23953c471e6348c9cb20cafeb7d68c.jpg" className="d-block w-100" alt="..." width={100} height={500}/>
    </div>
    <div className="carousel-item">
      <img src="https://sg-test-11.slatic.net/other/roc/d3beed929a5edcaf0076404d1c9c2bfd.jpg" className="d-block w-100" alt="..." width={100} height={500} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Carousel