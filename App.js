import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './src/Reducers/Index';
import {Header} from './src/components/common';
import LibraryList from './src/components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(Reducers)}>
      <View style={{flex: 1}}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
