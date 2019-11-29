import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Photos from './PhotoComponent';
import {PhotosCardColumn} from './PhotosColumnComponent';
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
    const PhotoPage = () => {
      return (
        <Photos portrait={this.props.portraits.portraits.filter(
            (portrait) => portrait.featured)[0]}
        portraitsLoading={this.props.portraits.isLoading}
        portraitsErrMess={this.props.portraits.errMess}
        landscape={this.props.landscapes.landscapes.filter(
            (landscape) => landscape.featured)[0]}
        landscapesLoading={this.props.landscapes.isLoading}
        landscapesErrMess={this.props.landscapes.errMess}
        wildlife={this.props.wildlife.wildlife.filter(
            (wildlife) => wildlife.featured)[0]}
        wildlifeLoading={this.props.wildlife.isLoading}
        wildlifeErrMess={this.props.wildlife.errMess} />
      );
    };
    const PhotosCategory = ({match}) => {
      return(
        <PhotosCardColumn
          portrait={this.props.portraits.portraits}
          isLoading={this.props.portraits.isLoading}
          errMess={this.props.portraits.errMess}/>
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
              <Route exact path='/photos' component={PhotoPage} />
              <Route path="/photos/:category" component={PhotosCategory} />
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
