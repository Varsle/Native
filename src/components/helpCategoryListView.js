import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Content, Text, Card, CardItem, Separator, Body, Button, Thumbnail } from 'native-base';
import firebase from '../firebase';


export default class HelpCategoryListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      placeholderImg: require('../../img/logo.png'),
      loaded: false
    };
  }
  componentWillMount() {

    firebase.database().ref('/categories/').once('value')
      .then((snap) => {
        var cat = firebase.toArray(snap)
        this.setState({
          categories: cat,
          loaded: true
        });
        console.log("init", cat);
      })


      // Code for pushing a new object to db
      // Push generates a new unique ID
      /*firebase.database().ref().child('/categories/').push().set({
        body: 'Politi',
        location: {lat: 123123, lon: 1231312},
        phoneNumber: 12345678
      }) */
  }


  handleCardPress(item) {
    this.props.nav.navigate('Category', {
    item: item,
    nav: this.props.nav
    });


  }

  render() {
    while(!this.state.loaded) {
      return (
        <Text> Loading... </Text>
      )
    }
    console.log("helpCatRender", this.state.categories[0]);
    return(
      <Container style={styles.container}>
          <Content>
            <Card
              dataArray={this.state.categories}
              renderRow={(categories) =>
              <Button transparent style={styles.row} onPress={() => this.handleCardPress(categories)}>
              <CardItem >
                <Body>

              <Text style={{zIndex:1, fontWeight: 'bold', fontSize: 18}}>
                {categories.name}
                {"\n"}
              </Text>
              <Thumbnail style={styles.img} source={this.state.placeholderImg} />
              </Body>
                </CardItem>
              </Button>
            }>
          </Card>

        </Content>

      </Container>

    );


  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    textAlign: 'center',
    width: '100%',
    height: '50%',
    left: '45%',
  },
  img: {
    width: 75,
    height: 75,
  }
});
