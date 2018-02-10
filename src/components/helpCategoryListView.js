import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Text, List, ListItem} from 'native-base';
import firebase from '../firebase';

export default class HelpCategoryListView extends React.Component {


  render() {
    var items = [
      {
        id: 0,
        title: "Ambulanse",
        desc: "Ikke akutt medisinks assistanse"
      },
      {
        id: 1,
        title: "Politi",
        desc: "Ikke akutt asistanse fra politi"
      },
      {
        id: 2,
        title: "Brann",
        desc: "Ikke akutt assistanse fra Brannvesen"
      },
      {
        id: 3,
        title: "Kommune",
        desc: "Varsle om skade, feil, mangler ved offentlig eiendom/objekter"
      }
  ]
    return(
      <Container>
          <Content>
            <List dataArray={items}
              renderRow={(item) =>
              <ListItem>
                <View style={styles.title}>
                <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 16}}> {item.title}
                  {"\n"} </Text>
                </View>
                <Text> {item.desc} </Text>
              </ListItem>
            }>
            </List>

          </Content>

      </Container>

    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 100,
    flex: 1,
    paddingBottom: 20
  },
});
