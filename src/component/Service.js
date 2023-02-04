import React, { useState } from "react";
import './Service.css'
function Service() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "C++, Python",
      desc: "Intermediate level and completed few projects.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "React js",
      desc: "Beginer but taking training courses to build strong base.",
      active: true,
    },
    
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
           
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Service;