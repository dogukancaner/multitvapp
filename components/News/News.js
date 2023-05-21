import { NewsData } from "../../data/news/News";

const News = () => {
  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0 mt-24 ">
        {NewsData.map((news, index) => (
          <div key={index}>
            <div>
              <p className="text-xl font-semibold text-center text-gray-800">
                {news.title}
              </p>
              <iframe
                width="560"
                height="315"
                src={news.URL}
                title={news.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              {/* <iframe
                className="w-96 h-56"
                src={news.URL}
                title={news.title}
                allowFullScreen
                allow="autoplay"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
