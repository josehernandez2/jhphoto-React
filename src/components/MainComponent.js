import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Photos from './PhotoComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {fetchItems, fetchLandscapes, fetchPortraits, fetchWildlife} from '../redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    landscapes: state.landscapes,
    portraits: state.portraits,
    wildlife: state.wildlife,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchItems: () => {
    dispatch(fetchItems());
  },
  fetchLandscapes: () => {
    dispatch(fetchLandscapes());
  },
  fetchPortraits: () => {
    dispatch(fetchPortraits());
  },
  fetchWildlife: () => {
    dispatch(fetchWildlife());
  },
});

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchLandscapes();
    this.props.fetchPortraits();
    this.props.fetchWildlife();
  }

  render() {
    const HomePage = () => {
      return (
        <Home items={this.props.items.items}
          carouselLoading={this.props.items.isLoading}
          carouselErrMess={this.props.items.errMess}/>
      );
    };
    return (
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key}
            timeout={300} classNames="page">
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/photos' component={() => <Photos />} />
              <Redirect to='/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
