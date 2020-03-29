import React from 'react';
import axios from 'axios';
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';
import {Header} from '../components/Header';
import {Navbar} from '../components/Navbar';
import {Card} from '../components/common/card';
import {Button} from '../components/common/button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Global extends React.Component {
  state = {
    apiData: [],
  };
  async componentDidMount() {
    let {data} = await axios.get(
      'https://thevirustracker.com/free-api?global=stats',
    );
    if (data.stat == 'ok')
      this.setState({apiData: [...this.state.apiData, data.results[0]]});
  }

  render() {
    const data = [...this.state.apiData][0];

    return (
      <View style={styles.containerView}>
        <ScrollView>
          <Header title={'Global Stats'} />

          <Card
            title={'Total Patients globally'}
            counts={data && data.total_cases}
          />
          <Card
            title={'Total unsolved globally'}
            counts={data && data.total_unresolved}
          />
          <Card
            title={'Total Deaths globally'}
            counts={data && data.total_deaths}
          />
          <Card
            title={'Total Recoveries globally'}
            style={styles.recoveryStyles}
            counts={data && data.total_recovered}
          />
          <Card
            title={'New Deaths Today'}
            style={styles.deathStyles}
            counts={data && data.total_new_deaths_today}
          />
          <Card
            title={'Serious cases'}
            style={styles.seriousStyles}
            counts={data && data.total_serious_cases}
          />
        </ScrollView>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: windowWidth,
    height: windowHeight,
    color: '#fff',
    backgroundColor: '#000',
  },
  seriousStyles: {
    backgroundColor: 'red',
  },
  deathStyles: {
    backgroundColor: 'orange',
  },
  recoveryStyles: {
    backgroundColor: 'green',
  },
});
