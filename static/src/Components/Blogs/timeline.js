import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import './timeline.css';
import HorizontalTimeline from 'react-horizontal-timeline';
import HorizontalTimelineConfigurator from 'react-horizontal-timeline';


export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      previous: 0,
      showConfigurator: false,

      // timelineConfig
      minEventPadding: 40,
      maxEventPadding: 120,
      linePadding: 100,
      labelWidth: 100,
      fillingMotionStiffness: 150,
      fillingMotionDamping: 25,
      slidingMotionStiffness: 150,
      slidingMotionDamping: 25,
      stylesBackground: '#f8f8f8',
      stylesForeground: '#7b9d6f',
      stylesOutline: '#dfdfdf',
      isTouchEnabled: true,
      isKeyboardEnabled:true,
      isOpenEnding:true,
      isOpenBeginning: true,
    };

    console.log(this.props);

  }


  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  componentWillMount() {
    this.dates = this.props.content.map((entry)=>entry.date);
  }

  componentWillReceiveProps(nextProps) {
    this.dates = nextProps.content.map((entry) => entry.date);
  }

  render() {
    const state = this.state;

    const views = this.props.content.map((entry, index) => {
      return (
        <div className='container' key={index}>
          { entry.component }
        </div>
      );
    });

    let configurator = (<div></div>);
    if (this.state.showConfigurator) {
      configurator = (
        <HorizontalTimelineConfigurator
          setConfig={(key, value) => {
            this.setState({ [key]: value });
          }}
          {...this.state}
        />
      );
    }

    return (
      <div className="test-box">
        <div style={{ width: '80%', height:'100px', margin: '0px auto', marginTop:'10rem', backgroundColor:"black" }}>
          <HorizontalTimeline
            fillingMotion={{ stiffness: state.fillingMotionStiffness, damping: state.fillingMotionDamping }}
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}

            isKeyboardEnabled={state.isKeyboardEnabled}
            isTouchEnabled={state.isTouchEnabled}
            labelWidth={state.labelWidth}
            linePadding={state.linePadding}
            maxEventPadding={state.maxEventPadding}
            minEventPadding={state.minEventPadding}
            slidingMotion={{ stiffness: state.slidingMotionStiffness, damping: state.slidingMotionDamping }}
            styles={{
              background: state.stylesBackground,
              foreground: state.stylesForeground,
              outline: state.stylesOutline
            }}
            values={ this.dates }
            isOpenEnding={state.isOpenEnding}
            isOpenBeginning={state.isOpenBeginning}
          />
        </div>
        <div className='text-center'>
          <SwipeableViews
            index={this.state.value}
            onChangeIndex={(value, previous) => {
              this.setState({ value: value, previous: previous });
            }}
            resistance>
            {views}
          </SwipeableViews>
        </div>
      </div>
    );
  }
}