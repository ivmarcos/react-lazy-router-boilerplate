import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NavLink from './NavLink';
import Button from 'react-md/lib/Buttons'
import Avatar from 'react-md/lib/Avatars';
import MenuButton from 'react-md/lib/Menus/MenuButton';

import ListItem from 'react-md/lib/Lists/ListItem';

import Home from './Home';
import loadHome from 'bundle-loader?lazy!./Home';
import loadPage1 from 'bundle-loader?lazy!./Page1';
import loadPage2 from 'bundle-loader?lazy!./Page2';
import loadPage3 from 'bundle-loader?lazy!./Page3';

function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {

    //static Component = null;
    
    state = { Component: AsyncComponent.Component };

    static load(cb){
      getComponent(Component => {
          console.log('Component', Component.default);

//        getComponent().then(Component => {
          AsyncComponent.Component = Component.default || Component;

          cb(AsyncComponent.Component);
          //this.setState({ Component : AsyncComponent.Component })
      })
    }

    componentWillMount() {
      if (!this.state.Component) {
        AsyncComponent.load(Component => this.setState({ Component }));
      }
    }

    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props}/> : null;
    }
  }
}

//const Home = asyncComponent(loadHome);
const Page1 = asyncComponent(loadPage1);
const Page2 = asyncComponent(loadPage2);
const Page3 = asyncComponent(loadPage3);

const pages = [Page1, Page2, Page3];


const navItems = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'Page 1',
  to: '/page-1',
  icon: 'bookmark',
}, {
  label: 'Page 2',
  to: '/page-2',
  icon: 'donut_large',
}, {
  label: 'Page 3',
  to: '/page-3',
  icon: 'flight_land',
}];

const actions = [
  <Button key="search" icon>search</Button>,
  <Button key="search" icon>search</Button>,
  <Button key="favorite" icon>favorite</Button>,
  <Avatar style={{ backgroundColor: 'blue' }}>M</Avatar>,
  <MenuButton
    id="vert-menu"
    icon
    buttonChildren="more_vert"
    className="menu-example"
    tooltipLabel="Open some menu"
  >
    <ListItem primaryText="Item One" />
    <ListItem primaryText="Item Two" />
    <ListItem primaryText="Item Three" />
    <ListItem primaryText="Item Four" />
  </MenuButton>
];

const titleMenu = <Button key="search" icon>search</Button>;

class App extends Component {

  componentWillMount(){
    console.log('pages', pages)
   pages.forEach(page => page.load(() => {}));
    //asyncComponent(loadPage3).load(() => {});
  }
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="react-md with CRA"
            toolbarTitle="Welcome to react-md1"
            toolbarChildren={<span>teste</span>}
            toolbarActions={actions}
            titleMenu={titleMenu}
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
            <Switch key={location.key}>
              <Route exact path="/" location={location} component={Home} />
              <Route path="/page-1" location={location} component={Page1} />
              <Route path="/page-2" location={location} component={Page2} />
              <Route path="/page-3" location={location} component={Page3} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default App;
