import jqueryPage from "../assets/projects/jqueryPage.jpeg";
import moviesLand from "../assets/projects/moviesLand.jpeg";
import pokemonCards from "../assets/projects/pokemonCards.jpeg";
import tipsCalc from "../assets/projects/tipsCalc.jpeg";
import weatherApp from "../assets/projects/weatherApp.jpeg";
import webDevTools from "../assets/projects/webDevTools.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Solo JQuery Clone",
      src: jqueryPage,
      link: "https://github.com/adnane84/Portfolio-project",
      website: "https://adnaneproject.netlify.app/",
    },
    {
      id: 2,
      title: "Movies Land",
      src: moviesLand,
      link: "https://github.com/adnane84/JS-website-with-API",
    },
    {
      id: 3,
      title: "Pokemon Cards",
      src: pokemonCards,
      link: "https://github.com/adnane84/Pokemon-cards-clone",
    },
    {
      id: 4,
      title: "Tips Calculator",
      src: tipsCalc,
      link: "https://github.com/adnane84/Tip-Calculator",
      website: "https://adnane-tips-calculator.netlify.app/",
    },
    {
      id: 5,
      title: "Weather App",
      src: weatherApp,
      link: "https://github.com/adnane84/Weather-app",
       website: "https://adn-weather-app.netlify.app/",
    },
    {
      id: 6,
      title: "Web Dev Tools",
      src: webDevTools,
      link: "https://github.com/adnane84/web-development-tools",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8  mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 m-10 text-gray-300">Explore my creative endeavors firsthand!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, link, website }) => (
            <div key={id} className="shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-64 object-cover"
              />
              <h3 className="text-center mt-6 text-blue-300 font-bold">{title}</h3>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(website, '_blank')}>
                  Demo
                </button>
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link, '_blank')}>
                 Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
