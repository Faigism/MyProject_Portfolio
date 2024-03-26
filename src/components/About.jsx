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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
