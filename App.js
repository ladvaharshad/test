import React, { Component  } from 'react';
import { AsyncStorage, StyleSheet,ScrollView, View, Text, Button } from 'react-native';
import { Table, Row,TableWrapper, Rows } from 'react-native-table-component';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      tableHead: ['Title', 'URL', 'created_at', 'author'],
      tableData: [        
      ],
      widthArr: [25,25,25,25]
    };
    this.getFetchRequest();
  }

  componentDidMount() {
    // this.interval = setInterval(() => this.setState({ 
    //   page: page+1
    // }), 10000);
    this.getFetchRequest();
    // this.setState({
      // tableData: this.getFetchRequest()
    // });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  
 getFetchRequest = () => {
  fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.page}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json())
      .then((responseJson) => {
        
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Row data={state.tableHead} style={styles.header} textStyle={styles.text}/>
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {
                tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                    textStyle={styles.text}
                  />
                ))
              }
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});