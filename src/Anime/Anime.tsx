import './Anime.css'
export const Anime = ({ title, image }) => {
  return (
    <div className="anime_Items">
      <p id='title_header_anime'>Title Header</p>
      <div className="header-anime-title">
        <div className="anime-date-time">
          <p>date-time</p>
        </div>
        <div className="anime-date-time">
          <p>date-time</p>
        </div>
      </div>
      <div className="anime_Image-info">
        <div className="anime_Image-info-detail">
          <img src={image} alt={title} />
        </div>
        <div className="scrollable-text">
          {title}
        </div>
      </div>
      <div className="footer_anime_detail">
        <div className="footer-contact-anime">fackbook</div>
        <div className="footer-contact-anime">twitter</div>
        <div className="footer-contact-anime">twitter</div>
      </div>
    </div>
  );
}
