import './Container.css';
import { Anime } from '../Anime/Anime';
import { AnimeMangaNews } from '../Anime/Anime-Manga-News';
import { Image_animation } from '../Anime/image-animation';


export const Container = () => {

  return (
    <div className="Container">
      <div className="main">
        <h1>Welcome to My animolist</h1>
        <div className="Anime_Items">
          <Image_animation />
        </div>
        <div className="main-mini-0">
          <div className="main-mini">
            <div className="main-2">
              <h1>Summer 2024 Anime</h1>
              <div className="Anime_Items-2">
                <Anime title="Kazuma Satou, former NEET and current reincarnated adventurer, finally returns home after the incident at the Crimson Demon village. He is joined by his ever-reliable companions: self-absorbed goddess Aqua, one-trick pony arch-wizard Megumin, and masochistic crusader Lalatina Ford."
                  image={"https://cdn.myanimelist.net/images/anime/1779/143584.webp"} />
                <Anime title="Eiji Kitahama, a second year high school student, just wants to be popular. To help him realize this dream, Rin Nanakura, his junior in the drama club, uses her acting skills to create a harem of loving girls for him. Though the various girls all show fondness toward Eiji, the affection of the actress behind them is very real. Rin's colorful acting continuously delights Eiji, but will the starlet herself ever make her way into his heart? "
                  image={"https://cdn.myanimelist.net/images/anime/1607/143547.webp"} />
                <Anime title="Title 7"
                  image={"https://cdn.myanimelist.net/images/anime/1718/143481.webp"} />
                <Anime title="Title 8"
                  image={"https://cdn.myanimelist.net/images/anime/1038/143308.webp"} />
                <Anime title="Title 8" 
                image={"https://cdn.myanimelist.net/images/anime/1205/143723.webp"} />
                <Anime title="Title 8" 
                image={"https://cdn.myanimelist.net/images/anime/1501/143569.webp"} />
              </div>
            </div>
            <div className="main-3">
              <h1>Latest Updated Episode Videos</h1>
              <div className="Anime_Items-2">
                <Anime title="Title 7" 
                image={"https://cdn.myanimelist.net/images/anime/1406/143958.webp"} />
                <Anime title="Title 8" 
                image={"https://cdn.myanimelist.net/images/anime/1565/142711.webp"} />
              </div>
            </div>
            <div className="main-4">
              <h1>Most Popular Anime Trailers</h1>
              <div className="Anime_Items-2">
                <Anime title="Title 7" 
                image={"https://cdn.myanimelist.net/images/anime/1739/140995.webp"} />
                <Anime title="Title 8" 
                image={"https://cdn.myanimelist.net/images/anime/1833/141321.webp"} />
                <Anime title="Title 8"
                image={"https://cdn.myanimelist.net/images/anime/1833/141321.webp"} />
                <Anime title="Title 8" 
                image={"https://cdn.myanimelist.net/images/anime/1833/141321.webp"} />
                <Anime title="Title 7" 
                image={"https://cdn.myanimelist.net/images/anime/1739/140995.webp"} />
                <Anime title="Title 7" 
                image={"https://cdn.myanimelist.net/images/anime/1739/140995.webp"} />
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------- */}
          <div className="main-mini-2" style={{
            marginLeft: '10px',
            width: "326px",
            display: 'inline-block',
            position:'relative'
          }}>
            <div className="Header-top-Anime">
              <div className="header-top-anime">
                <p>Top Airing Anime</p>
              </div>
              <div className="header-top-anime-right ">More</div>
            </div>


            <div className="ranking-unit">
              <p>1</p>
              <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1332/143513.webp?s=e7a7e0c8b91f945d4fe0750bb4a72934" alt="" />
              <div className="ranking-unit-info">
                <p>Title 1</p>
                <p>Type: Manga</p>
              </div>
            </div>

            <div className="ranking-unit">
              <p>2</p>
              <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1332/143513.webp?s=e7a7e0c8b91f945d4fe0750bb4a72934" alt="" />
              <div className="ranking-unit-info">
                <p>Title 2</p>
                <p>Type: Manga</p>
              </div>
            </div>
            <div className="ranking-unit">
              <p>3</p>
              <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1332/143513.webp?s=e7a7e0c8b91f945d4fe0750bb4a72934" alt="" />
              <div className="ranking-unit-info">
                <p>Title 3</p>
                <p>Type: Manga</p>
              </div>
            </div>
            <div className="ranking-unit">
              <p>4</p>
              <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1332/143513.webp?s=e7a7e0c8b91f945d4fe0750bb4a72934" alt="" />
              <div className="ranking-unit-info">
                <p>Title 4</p>
                <p>Type: Manga</p>
              </div>
            </div>
            <div className="ranking-unit">
              <p>5</p>
              <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1332/143513.webp?s=e7a7e0c8b91f945d4fe0750bb4a72934" alt="" />
              <div className="ranking-unit-info">
                <p>Title 5</p>
                <p>Type: Manga</p>
              </div>
            </div>

            <div className="Top_Upcoming_Anime">
              <div className="Header-top-Anime">
                <div className="header-top-anime">
                  <p>Top Upcoming Anime</p>
                </div>
                <div className="header-top-anime-right ">More</div>
              </div>
              <div className="ranking-unit">
                <p>3</p>
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1332/143513.webp?s=e7a7e0c8b91f945d4fe0750bb4a72934" alt="" />
                <div className="ranking-unit-info">
                  <p>Title 3</p>
                  <p>Type: Manga</p>
                </div>
              </div>
              <div className="ranking-unit">
                <p>4</p>
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1332/143513.webp?s=e7a7e0c8b91f945d4fe0750bb4a72934" alt="" />
                <div className="ranking-unit-info">
                  <p>Title 4</p>
                  <p>Type: Manga</p>
                </div>
              </div>
              <div className="ranking-unit">
                <p>5</p>
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1332/143513.webp?s=e7a7e0c8b91f945d4fe0750bb4a72934" alt="" />
                <div className="ranking-unit-info">
                  <p>Title 5</p>
                  <p>Type: Manga</p>
                </div>
              </div>
              <div className="ranking-unit">
                <p>5</p>
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1332/143513.webp?s=e7a7e0c8b91f945d4fe0750bb4a72934" alt="" />
                <div className="ranking-unit-info">
                  <p>Title 5</p>
                  <p>Type: Manga</p>
                </div>
              </div>
              <div className="ranking-unit">
                <p>5</p>
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1332/143513.webp?s=e7a7e0c8b91f945d4fe0750bb4a72934" alt="" />
                <div className="ranking-unit-info">
                  <p>Title 5</p>
                  <p>Type: Manga</p>
                </div>
              </div>
              <br />
              <hr />
              <div className="chibi-right">
                <img src="https://nxm-clw-cdn.dn.nexoncdn.co.kr/bluearchive/img/events/2024/03/festival_3okew9/news/char2.png" alt="" />
                <p>
                  <span>CHIBI</span>
                  <br />
                  <span>Next Event: March 15th, 2024
                    Click Me!
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
        <AnimeMangaNews />
        
        <br />
      </div>
    </div>
  );
};
