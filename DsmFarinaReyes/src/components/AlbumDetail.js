import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

const AlbumDetail = ({ title,description,photos,view, albumId,idUser,apiKey }) => {
  const {
    headerContentStyle,
    secondText,
    AlternativeText,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text style={AlternativeText}>{view == 1 ? "Visto por "+ view + " persona." :"Visto por "+ view + " personas."}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={secondText}>{description}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Actions.photoList({albumId:albumId,idUser:idUser,apiKey:apiKey})}>
          {photos === 1?"Conoce su mejor estadio":"Conoce sus " + photos +" mejores estadios"}
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  AlternativeText: {
    fontSize: 10,
    justifyContent:"center",
    alignItems:"center"
  },
  secondText:{
    fontSize: 12,
    justifyContent:"center",
    alignItems:"center"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
