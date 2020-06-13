import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';
import LikeDetail from './LikeDetail';

const LikesList = ({idPhoto})=>{
  const [likes, setPhoto] = useState(null)
  useEffect(() => {
    const getPhoto = async () => {
		try{				
			const {data} = await
			axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getFavorites&api_key=e34701e412632cb9cc7263b310f6f5ae&photo_id=${idPhoto}&format=json&nojsoncallback=1`);
            console.log("**********************")
            console.log("**********************")
            console.log(data.photo.person)
            console.log("**********************")
            console.log("**********************")
			setPhoto(data.photo.person)
		}catch(err){
			console.log(err)
		}
		}
    getPhoto()
  }, [])

  if(!likes){
    return (
      <View style={{ flex: 1 }}>
        <Text>
          Loading...
        </Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
         <LikeDetail likesPerson={likes}/>
    </View>
  )  
}
export default LikesList;
