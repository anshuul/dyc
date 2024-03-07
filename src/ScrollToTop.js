import { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate = prevProps => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      let divHeight = document.getElementsByClassName('root')[0];
      divHeight.scrollTop = 0;
    }
  };

  render = () => this.props.children;
}

export default withRouter(ScrollToTop);