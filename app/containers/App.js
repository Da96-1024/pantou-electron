import * as React from 'react';
import styles from './index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.nowTime = Date.now();
    this.startTime = new Date(this.nowTime).setHours(10);
    this.endTime = new Date(this.nowTime).setHours(18);
    if (this.nowTime < this.startTime || this.nowTime > this.endTime) {
      this.state = {
        progress: 100
      };
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      const progress =
        ((Date.now() - this.startTime) / (this.endTime - this.startTime)) * 100;
      if (progress > 100) {
        clearInterval(this.timerId);
      }
      this.setState({ progress });
    }, 1000);
  }

  render() {
    const { progress } = this.state;
    return (
      <div className={styles.bgView}>
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </div>
    );
  }
}
