import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import './timeline.css';

const VALUES = ["2013-02-12","2013-02-12","2013-02-12","2013-02-12","2013-02-12"];

export default class Timeline extends React.Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div className="timeline_box">
        {/* Bounding box for the Timeline */}
        <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values= {VALUES} />
        </div>
        <div className='text-center'>
        <h1> Hello </h1>   
          {this.state.value}
        </div>
      </div>
    );
  }
}
