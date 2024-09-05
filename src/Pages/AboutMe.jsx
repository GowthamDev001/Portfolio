export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/about-me.png" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    {/* <p className="section--title">About</p> */}
                    <h1 className="skills-section--heading">About Me</h1>
                    <p  style={{fontWeight:"400"}}  className="hero--section-description">
                        Hello!,<span style={{color:"orange",fontWeight:"700"}}> I'm Gowtham</span> a passionate Full Stack MERN Stack Developer with a solid foundation in building dynamic and responsive web applications. My journey in software development began with an internship as a Full Stack Developer, where I honed my skills in both front-end and back-end technologies.

                        Currently, I am working on a live project, where I am responsible for designing and implementing features, ensuring a seamless user experience, and solving complex technical challenges. My expertise spans the MERN stack (MongoDB, Express.js, React.js, Node.js), and I am committed to delivering high-quality, scalable solutions.
                    </p>
                    {/* <p className="hero--section-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              officiis sit debitis omnis harum sed veniam quasi dicta accusamus
              recusandae?
            </p> */}
                </div>
            </div>
        </section>
    );
}
