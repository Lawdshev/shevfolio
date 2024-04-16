import React from 'react';
import "./portfolio.css";
import {Link} from 'react-router-dom';
import streetFood from "../../assets/streetfood.jpeg";
import university from '../../assets/examinator.jpeg'
import hq from '../../Projects/portfolio_img/moneyHq.jpeg'
import wardboard from '../../assets/wardboard.jpg'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={hq} alt="" />
          </div>
          <h3>MoneyHQ</h3>
          <div className="portfolio__item-cta flex justify-around">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dev.moneyhq.io/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={wardboard} alt="" />
          </div>
          <h3>Wardbord</h3>
          <div className="portfolio__item-cta flex justify-around">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://coach.wardbord.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={streetFood} alt="" />
          </div>
          <h3>Street Food</h3>
          <div className="portfolio__item-cta flex justify-around">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://street-food-eight.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
      <div className="w-full flex mt-2">
        {" "}
        <Link to="/projects" className="mx-auto text-xl md:text-2xl">
          See more <i class="fa-solid fa-right-long"></i>
        </Link>
      </div>
      <div className="container portfolio__container">
        {/* <div className="w-full flex mt-2"> <Link to='/backend-projects' className='mx-auto text-xl md:text-2xl'>See more backend projects <i class="fa-solid fa-right-long"></i></Link></div> */}
      </div>
    </section>
  );
}
export default portfolio
