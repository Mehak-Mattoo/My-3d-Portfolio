import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="flex-1 text-2xl md:text-3xl lg:text-4xl font-bold ">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link to="/contact" className="btn">
        Contact Me
      </Link>
    </section>
  );
};

export default CTA;
