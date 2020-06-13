import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

const LikeDetail = ({likesPerson}) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  function message(){
      if(likePerson){
          return likesPerson.length > 1 ? "A "+ likesPerson[0].username + " y a "+ likesPerson.length-1+" les gusta esto."  
                                        : "A "+ likesPerson[0].username+ " le gusta esto."
      }
  }

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{likesPerson.length > 1 ? "A "+ likesPerson[0].username + " y a "+ likesPerson.length-1+" les gusta esto."  
                       : "A "+ likesPerson[0].username+ " le gusta esto."}</Text>
        </View>
      </CardSection>    
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  image: {
    height:30,
    width: 30,
    borderRadius: 100
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default LikeDetail;
