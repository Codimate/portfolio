import './portfolio.scss'

export const Portfolio = () => {
  return (
    <div className='portfolio' id = "portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>ML Apps</li>
        <li>PowerBi</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/chat_app.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/chat_app.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/chat_app.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/chat_app.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/chat_app.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/chat_app.png" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}

