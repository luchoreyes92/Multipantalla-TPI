import React, { useState, useEffect } from 'react';
import { Text, View, Image, Linking, FlatList } from 'react-native';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import CommentList from './CommentList';



const PhotoDetail = ({ title, imageUrl, idPhoto}) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    secondText
  } = styles;

  const [comments, setComments] = useState(null)
useEffect(() => {
  const getComments = async () => {
		try{				
			const {data} = await
			axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=e34701e412632cb9cc7263b310f6f5ae&photo_id=${idPhoto}&format=json&nojsoncallback=1`);
      console.log(data.comments.comment)
      setComments(data.comments.comment)
      if(comments){

      }
		}catch(err){
			console.log(err)
		}
	}
  getComments()
}, []);

if(!comments){
  return (
    <View style={{ flex: 1 }}>
      <Text>
        CARGANDOOOOOOOOOOOOOO...
      </Text>
    </View>
  )
}


  return (
    
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: imageUrl }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
        <View style={thumbnailContainerStyle}>
          <Button onPress={() => Linking.openURL(imageUrl)}>
            <Image style={ styles.image } source={{ uri: 'https://img1.freepng.es/20181107/btj/kisspng-computer-icons-portable-network-graphics-internet-5be28adac1af28.0472967415415733387933.jpg' }} />
          </Button>
        </View>
      </CardSection>
      

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: imageUrl }}
        />
      </CardSection>

      <CardSection>
        <View style={headerContentStyle}>
        <Text>{"Comentarios"}</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data= {comments}
            renderItem={
              (item) =>{
                <CommentList comment={item._content}/>
              }
            }
          />
          </View>
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
  },
  secondText:{
    fontSize: 10,
    justifyContent:"center",
    alignItems:"center"
  },
};

export default PhotoDetail;