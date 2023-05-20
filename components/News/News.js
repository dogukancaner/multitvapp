import { NewsData } from "../../data/news/News";

const News = () =>
  NewsData.map((news, index) => {
    return (
      <div key={index} className="flex items-center justify-center m-2">
        <div className="flex flex-col items-center justify-center">
          <iframe
            className="w-96 h-56"
            src={news.URL}
            title={news.title}
            allowFullScreen
            allow="autoplay"
          />
          <p className="text-xl font-semibold text-center text-gray-800">
            {news.title}
          </p>
        </div>
      </div>
    );
  });

export default News;
