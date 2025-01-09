export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Adam</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--colour">COMSCI</span>{" "}
                        <br />
                        Student
                    </h1>
                    <p className="hero--section--description">
                        Welcome to My Portfolio Website!
                        <br /> Currently Seeking Internship Opportunities
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.jpg" alt="Hero Section" />
            </div>
        </section>
    );
}
