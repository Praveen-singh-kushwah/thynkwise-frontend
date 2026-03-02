import SlideUp from "@/components/Common/Animations/SlideUp";
import style from "./AboutSection5.module.css";
import Section5Card from "./Section5Card";

export default function AboutSection5() {
  const data = [
    {
      id: 1,
      image: "/assets/images/thynkwise/founder1.jpeg",
      title: "Vipin Sharma",
      sub_title: "Founder",
      linked_href: "https://www.linkedin.com/in/bharat-modi-98a7b915/",
    },
    {
      id: 2,
      image: "/assets/images/thynkwise/founder2.jpg",
      title: "Bharath Modi",
      sub_title: "Co-Founder",
      linked_href: "https://www.linkedin.com/in/vipin-sharma-b567b8b/",
    },
  ];

  return (
    <div
      className={
        "edu-team-area bg-color-white " +
        style["eduvibe-about-three-team"] +
        " " +
        style["edu-section-gap"]
      }
    >
      <div className={"container " + style["eduvibe-animated-shape"]}>
        <div className="row">
          <SlideUp
            element="div"
            className={
              "text-center pb-40 " +
              style["consen-section-title"] +
              " " +
              style["mobile-center"]
            }
          >
            <h2>Team Members</h2>
          </SlideUp>
        </div>
        <div className="row gy-4 mt--20 gap-4 justify-content-center">
          {data.length > 0 ? (
            data.map((item) => (
              <SlideUp
                key={item.id}
                element="div"
                delay={0.15}
                duration={0.8}
                className="col-lg-4 col-md-4 col-sm-6 col-12"
              >
                <Section5Card item={item} />
              </SlideUp>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  );
}
