import style from "./Section1.module.css";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Sales Process",
    description:
      "Our Sales Process service is designed to optimize and streamline your sales operations. We develop a comprehensive, step-by-step sales process that ensures no lead is overlooked and every opportunity is maximized. From lead generation to closing deals, our tailored approach provides your sales team with a clear roadmap, reducing inefficiencies and improving conversion rates. We integrate proven strategies and best practices to create a repeatable and scalable process that aligns with your business goals. By implementing our sales process, your team will operate with precision, leading to consistent growth and increased revenue.",
    icon: "/assets/images/resource/service-icon8.png",
    number: "01",
    link: "service-details.html",
  },
  {
    id: 2,
    title: "Sales Platforms",
    description:
      "Our Platforms service focuses on integrating the best technology solutions to support your sales and business operations. We identify, customize, and implement CRM systems, marketing automation tools, and other essential platforms that fit your unique needs. By centralizing data and automating key processes, we help eliminate information silos, enhance team collaboration, and provide actionable insights through robust analytics. Our goal is to ensure that your technology stack works seamlessly together, driving efficiency, accuracy, and ultimately, better business outcomes.",
    icon: "/assets/images/resource/service-icon2.png",
    number: "02",
    link: "service-details.html",
  },
  {
    id: 3,
    title: "Mentorship Program",
    description:
      "Our Mentorship Programs for Sales are designed to accelerate the growth and effectiveness of your sales team. We pair your team members with experienced sales leaders who provide personalized coaching, guidance, and support. Our mentors focus on developing critical sales skills, strategic thinking, and effective communication, helping your team close more deals and achieve higher targets. These programs are tailored to meet the specific needs of your business, ensuring that your sales team is equipped with the knowledge and confidence to excel in today’s competitive market.",
    icon: "/assets/images/resource/service-icon3.png",
    number: "03",
    link: "service-details.html",
  },
];

export default function Section1() {
  return (
    <div className={style["service-area"]}>
      <div className="container">
        <div className="row gy-md-5 gy-sm-3 ">
          {services.map((service) => (
            <div key={service.id} className="col-lg-12 col-sm-6 p-0">
              <div className={style["dreamit-service-box"]}>
                <div className={style["service-box-inner"]}>
                  <div className={style["em-service-icon"]}>
                    <Image
                      src={service.icon}
                      width={40}
                      height={40}
                      alt={service.title}
                    />
                  </div>
                  <div className={style["em-service-title"]}>
                    <h2>{service.title}</h2>
                  </div>
                  {/* <div className={style["service-number"]}>
                    <h1>{service.number}</h1>
                  </div> */}
                  <div className={"text-justify " + style["em-service-text"]}>
                    <p>{service.description}</p>
                  </div>
                  {/* <div className={style["service-button"]}>
                    <a href={service.link}>
                      Read More <FaPlus />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
