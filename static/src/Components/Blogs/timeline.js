import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import './timeline.css';

const VALUES = [ "2010-12-05","2009-06-05","1998-06-05","2001-12-08","2010-12-05","2010-12-05"];

export default class App extends React.Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div className="timeline-box">
        {/* Bounding box for the Timeline */}
        <div style={{ width: '80%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={ VALUES } />
        </div>
        <div className='text-center'>
          {/* any arbitrary component can go here */}    
          {this.state.value}
        </div>
      </div>
    );
  }
}

