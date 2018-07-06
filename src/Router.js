
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ExcerptList from './components/ExcerptList';
import ExcerptCreate from './components/ExcerptCreate';
import ExcerptEdit from './components/ExcerptEdit';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" hideNavBar component={LoginForm} title="Ghost Writer v2" initial />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.excerptCreate()}
            key="employeeHub"
            component={ExcerptList}
            title="Library"
            initial
          />
        <Scene key="excerptCreate" component={ExcerptCreate} title="Create Excerpt" />
        <Scene key="excerptEdit" component={ExcerptEdit} title="Edit Excerpt" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
