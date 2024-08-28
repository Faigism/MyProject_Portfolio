import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = ({ text }) => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="h-80" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            I want to take my love of programming by writing code and taking
            every cup. I am constantly inspired by the development of new
            technologies, solving complex problems and developing new
            technologies. Programming is not only a job for me, but also a
            source of creativity, learning and development.
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
