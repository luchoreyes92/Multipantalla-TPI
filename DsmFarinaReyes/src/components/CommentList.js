import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const CommentList = ({ comment }) => {

  useEffect(() => {
    console.log(comment)
  }, [])
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
          <Text style={AlternativeText}>{"COMENTARIOOO:" +comment}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={secondText}>{console.log(comment+"ESTE ES EL CONSOLE")}</Text>
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

export default CommentList;
