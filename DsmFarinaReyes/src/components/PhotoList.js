import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

const PhotoList = ({albumId})=>{
  const [photos, setPhotos] = useState(null)
  useEffect(() => {
    const buscarPhotos = async () => {
			try{				
				const {data} = await
				axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=e34701e412632cb9cc7263b310f6f5ae&photoset_id=${albumId}&user_id=188867561%40N04&format=json&nojsoncallback=1`);
				console.log(data)
				setPhotos(data.photoset.photo)
			}catch(err){
				console.log(err)
			}
		}
    buscarPhotos()
  }, [])

  if(!photos){
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
        <FlatList
          data={photos}
          renderItem={
            ({item}) =>
            <PhotoDetail idPhoto={item.id} title={item.title} imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} />
          }
        />
    </View>
  )  
}
export default PhotoList;
