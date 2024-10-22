import './Header.css';

function Header() {
  return(
    <>
      <div>
        
               <div className="container-img">
                 <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="zomato-back-img"/> 
               </div>

               <div className="header-body-section">

                  <div className="zomato-name-content">
                    <div className="zomato-tag zomato-container-body">
                        <img className="zomato-name-img" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"     alt="white-name"/>

                        <p className="discover">Discover the best food & drinks in Pune</p>

                      <diV className="search-item">
                          <input type="text" placeholder="what You want to Taste"/>
                      </diV>

                   </div>
                  </div>

               </div>
      </div>
    </>
  )
};

export default Header;