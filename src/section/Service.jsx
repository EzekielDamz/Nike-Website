import ServiceCard from "../Component/serviceCard";

import { services } from "../constants";
// import serviceCard from "../Component/serviceCard"

const Service = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={services.label} {...service} />
      ))}
    </section>
  );
};

export default Service;
