export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Gowtham</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack MERN</span>{" "}
              <br />
              Developer
            </h1>
            <p style={{fontWeight:"500"}} className="hero--section-description">
            I specialize in building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). With a strong background in both front-end and back-end development. 
             
            </p>
          </div>
          <button  style={{color:"black",backgroundColor:"orange",border:"none"}} className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img  src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
  