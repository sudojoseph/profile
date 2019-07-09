import React, { Component } from 'react';
import '../css/IconSection.css';


class IconSection extends Component {

  createLogo = (fill,path) => {
  let logo = [];

  for (let i = 0; i < fill.length; i++) {
    logo.push(<path fill={fill[i]} d={path[i]}></path>);
  }
  return logo;

}

  render() {
    console.log();

    return (
      <div className="icon-section">

        <div className="icon-container">

          {this.props.langueges.map((languege) =>

            <svg viewBox="0 0 128 128" className={!languege.active ? 'inactive' : 'active'}>
               {this.createLogo(languege.fill,languege.path)}
            </svg>
          )}
        </div>

      </div>
    );
  }
}

export default IconSection;
