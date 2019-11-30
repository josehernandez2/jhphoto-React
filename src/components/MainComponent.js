/* eslint-disable react/prop-types */
import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Photos from './PhotoComponent';
import Portraits from './PortraitsComponent';
import Landscapes from './LandscapesComponent';
import Wildlife from './WildlifeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {fetchItems, fetchLandscapes,
  fetchPortraits, fetchWildlife, postMessage} from '../redux/ActionCreators';

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
  postMessage: (
      firstname,
      lastname,
      telnum,
      email,
      agree,
      contactType,
      message) => {
    dispatch(postMessage(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message));
  },
  resetMessageForm: () => {
    dispatch(actions.reset('message'));
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
        <Home
          items={this.props.items.items}
          carouselLoading={this.props.items.isLoading}
          carouselErrMess={this.props.items.errMess}/>
      );
    };
    const PhotoPage = () => {
      return (
        <Photos
          portraitFeatured={this.props.portraits.portraits.filter(
              (portraits) => portraits.featured)[0]}
          portraitsLoading={this.props.portraits.isLoading}
          portraitsErrMess={this.props.portraits.errMess}
          landscapeFeatured={this.props.landscapes.landscapes.filter(
              (landscape) => landscape.featured)[0]}
          landscapesLoading={this.props.landscapes.isLoading}
          landscapesErrMess={this.props.landscapes.errMess}
          wildlifeFeatured={this.props.wildlife.wildlife.filter(
              (wildlife) => wildlife.featured)[0]}
          wildlifeLoading={this.props.wildlife.isLoading}
          wildlifeErrMess={this.props.wildlife.errMess} />
      );
    };
    return (
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key}
            timeout={500} classNames="page">
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/photos' component={PhotoPage} />
              <Route path="/photos/portraits" component={() =>
                <Portraits
                  portraits={this.props.portraits.portraits}
                  portraitsLoading={this.props.portraits.isLoading}
                  portraitsErrMess={this.props.portraits.errMess}/>} />
              <Route path="/photos/landscapes" component={() =>
                <Landscapes
                  landscapes={this.props.landscapes.landscapes}
                  landscapesLoading={this.props.landscapes.isLoading}
                  landscapesErrMess={this.props.landscapes.errMess}/>} />
              <Route path="/photos/wildlife" component={() =>
                <Wildlife
                  wildlife={this.props.wildlife.wildlife}
                  wildlifeLoading={this.props.wildlife.isLoading}
                  wildlifeErrMess={this.props.wildlife.errMess}/>} />
              <Route exact path="/contact" component={() =>
                <Contact
                  postMessage={this.props.postMessage}
                  resetMessageForm={this.props.resetMessageForm} />} />
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
