import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Content, Text, Card, CardItem, Separator, Body, Button, Thumbnail } from 'native-base';
import firebase from '../firebase';

export default class CategoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderImg: require('../../img/logo.png')
    };
  }

  handlePressCategory(item) {
    this.props.navigation.navigate('Submission', {Title: 'Hærverk'})
    console.log(item);
  }


  render() {
    console.log("categoryscreen", this.props.navigation.state.params.item.subcategories);
    return(

      <Container style={styles.container}>
        <Content>

          <Card
            dataArray={this.props.navigation.state.params.item.subcategories}

            renderRow={(categories) =>
            <Button transparent style={styles.row} onPress={() => this.handlePressCategory(categories)}>
            <CardItem >
              <Body>
            <Text style={{zIndex:1, fontWeight: 'bold', fontSize: 18}}>
              {categories.name}
              {"\n"}
            </Text>
              <Thumbnail style={styles.img} source={this.state.placeholderImg} />
            </Body>
            </CardItem>
          </Button>}
            />
        </Content>
      </Container>

    );
  }


}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
    height: 75
  }
});
