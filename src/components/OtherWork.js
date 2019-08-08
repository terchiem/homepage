import React from 'react';

class OtherWorks extends React.Component {
  constructor() {
    super();
    this.state = { 
      currentImg: '',
      open: false 
    };
  }

  handleClick = (event) => {
    this.setState(
      {
        currentImg: event.currentTarget.querySelector('img').src,
        open: true
      }, () => document.addEventListener('click', this.closeOverlay)
    );
  }

  closeOverlay = () => {
    this.setState(
      {
        currentImg: '',
        open: false
      }, () => document.removeEventListener('click', this.closeOverlay)
    );
  }

  render() {
    return (
      <div className="page other-works">
        <div className={`image-overlay ${this.state.open ? 'open' : ''}`}>
          <div className="image-overlay-inner">
            <img src={this.state.currentImg} />
          </div>
        </div>

        <section id="animation">
          <h3>Animation</h3>
          <div className="demo-reel">
            <iframe 
              title="Animation Demo Reel"
              src="https://player.vimeo.com/video/169491739" 
              width="640" 
              height="564" 
              frameborder="0" 
              allowfullscreen>
            </iframe>
          </div>
        </section>

        <section id="drawing">
          <h3>Drawing</h3>

          <div className="art-container">
            <div className="gallery-item" onClick={this.handleClick}>
              <img src="https://via.placeholder.com/200" />
              <div className="gallery-item-overlay"></div>
            </div>
            <div className="gallery-item" onClick={this.handleClick}>
              <img src="https://via.placeholder.com/800x250" />
              <div className="gallery-item-overlay"></div>
            </div>
            <div className="gallery-item" onClick={this.handleClick}>
              <img src="https://via.placeholder.com/150x300" />
              <div className="gallery-item-overlay"></div>
            </div>
            <div className="gallery-item" onClick={this.handleClick}>
              <img src="https://via.placeholder.com/250" />
              <div className="gallery-item-overlay"></div>
            </div>
          </div>

        </section>

        <section id="painting">
          <h3>Painting</h3>
          <div className="art-container">
            <div className="gallery-item" onClick={this.handleClick}>
              <img src="https://via.placeholder.com/200" />
              <div className="gallery-item-overlay"></div>
            </div>
            <div className="gallery-item" onClick={this.handleClick}>
              <img src="https://via.placeholder.com/800x250" />
              <div className="gallery-item-overlay"></div>
            </div>
            <div className="gallery-item" onClick={this.handleClick}>
              <img src="https://via.placeholder.com/150x300" />
              <div className="gallery-item-overlay"></div>
            </div>
            <div className="gallery-item" onClick={this.handleClick}>
              <img src="https://via.placeholder.com/250" />
              <div className="gallery-item-overlay"></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default OtherWorks;