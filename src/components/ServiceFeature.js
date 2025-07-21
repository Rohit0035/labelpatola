import React from "react";

const services = [
  // {
  //   icon: 'bi-arrow-return-left',
  //   title: '30-Day Return Policy',
  //   description: 'Shop worry-free with hassle-free returns',
  // },
  {
    icon: "bi-truck",
    title: "Complimentary Shipping",
    description: "What you see is what you pay—no hidden fees"
  },
  // {
  //   icon: "bi-headset",
  //   title: "24/7 Support",
  //   description: "Round-the-clock support, always here for you"
  // },
  {
    icon: "bi-people",
    title: "Exclusive Member",
    description: "Exclusive deals for our valued customers"
  }
];

const ServiceFeature = () => {
  return (
    <section className="services py-5">
      <div className="container px-3">
        <div className="row row-cols-1 row-cols-lg-4">
          {services.map((service, index) =>
            <div className="col" key={index}>
              <div className="card rounded-3 border-0">
                <div className="card-body">
                  <div className="text-center">
                    <div className="fs-2 mb-4">
                      <i className={`bi ${service.icon}`} />
                    </div>
                    <h5>
                      {service.title}
                    </h5>
                    <p>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;
