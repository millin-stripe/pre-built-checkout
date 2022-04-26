import React from 'react';

const Checkout = () => {
  return (
    <div className="sr-root">
      <div className="sr-main">
        <section className="container">
          <div>
            <h1>Taylor Made P790 Irons</h1>
            <h4>$ 1059.00</h4>
            <div className="pasha-image">
              <img
                alt="Taylor Made P790 Irons - 1059.00"
                src="https://www.taylormadegolf.com/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1650916125539/zoom/TA228_zoom_D.jpg?sw=900&sh=900&sm=fit"
                width="140"
                height="160"
              />
            </div>
          </div>

          <form action="https://3lc8dzu1vb.execute-api.us-east-1.amazonaws.com/checkout?price_id=price_1Kr7MpHTpuTBmw2oR0Nnnile" method="GET">
            <button id="submit" role="link">Buy</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
