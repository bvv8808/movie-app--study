import React from "react";
import Layout from "../../components/Layout";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (!location.state) return null;
    return (
      <Layout>
        <img src={location.state.poster} alt="poster" className="mainPoster" />
        <span>{location.state.title}</span>
      </Layout>
    );
  }
}

export default Detail;
