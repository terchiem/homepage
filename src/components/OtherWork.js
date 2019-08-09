import React from 'react';

import drawings from '../page-resources/other-list';

class OtherWorks extends React.Component {
  constructor() {
    super();
    this.state = { 
      currentImg: '',
      open: false 
    };
  }

  componentDidMount() {
    this.props.setMenuActive({menuActive: true})
  }
  componentWillUnmount() {
    this.props.setMenuActive({menuActive: false})
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
    const drawItems = drawings.map((drawing, i) => (
      <div className="gallery-item" onClick={this.handleClick} key={i}>
        <img src={drawing.src} alt={drawing.description}/>
        <div className="gallery-item-overlay"></div>
      </div>
    ));

    return (
      <div className="other-works">
        <div className={`image-overlay ${this.state.open ? 'open' : ''}`}>
          <div className="image-overlay-inner">
            <img src={this.state.currentImg} alt=""/>
          </div>
        </div>

        <section id="animation">
          <h3>Animation</h3>
          <div className="demo-reel">
            <iframe 
              title="Animation Demo Reel"
              src="https://player.vimeo.com/video/169491739?color=e85a4f" 
              width="640" 
              height="564">
            </iframe>
          </div>
        </section>

        <section id="drawing">
          <h3>Drawing</h3>

          <div className="art-container">
            {drawItems}
          </div>
        </section>
      </div>
    )
  }
}

export default OtherWorks;