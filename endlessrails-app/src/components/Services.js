import { services } from "../data"
import Title from "./Title"

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="Services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { ìd, icon, text, title } = service
          return (
            <article className="service" key={ìd}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
