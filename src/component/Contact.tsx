import './Contact.css'
export const Contact = () => {
    return (
        <>
            <div className="Contact">
                <div className="header-contact">
                    <p>แนะนำ Anime</p>
                    <p>manga</p>
                    <p>comunity</p>
                    <p>Industry</p>
                    <p>Watch</p>
                    <p>Read</p>
                 
                </div>
                <div className="Contact-info-content">
                    <div className="contact-info">
                        <p>Never forget what you've seen. Save what you want to watch next.
                            <h3>Start tracking your anime today.
                            </h3>
                        </p>
                            <div className="content-info-right">
                                Login
                                    <div className="gogle_login">
                                        🤫 Sign up with google
                                    </div>
                                    <div className="facebook_login">
                                        🤫 Sign up with google
                                    </div>
                                    <div className="apple_login">
                                        🤫 Sign up with google
                                    </div>
                                    <hr />
                                    <p style={{
                                        fontSize: '16px',
                                        padding: '10px 0px 0px ',
                                        textDecoration: 'underline'
                                    }}>Sing up witch Email</p>
                                {/* <p>Sing up witch Email</p> */}
                            </div>
                            <div className="contact-info-bottom">
                                <img src="https://myanimelist.net/images/top_signup/bubbles.png" alt="" />
                            </div>
                    </div>    
                </div>
            </div>
        </>
    );
}