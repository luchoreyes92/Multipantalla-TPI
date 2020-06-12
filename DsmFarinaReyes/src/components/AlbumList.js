import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const AlbumList = ()=>{
  const [photoset, setPhotoset] = useState(null)
  useEffect(() => {
    const buscarPhotosets = async () => {
			try{				
				const {data} = await
				axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=e34701e412632cb9cc7263b310f6f5ae&user_id=188867561%40N04&format=json&nojsoncallback=1');
				console.log(data)
				setPhotoset(data.photosets.photoset)
			}catch(err){
				console.log(err)
			}
		}
    buscarPhotosets()
  }, [])
  
  if(!photoset){
    return ()=>{
      <Text>
        Loading...
      </Text>
    }  
  }

  return (
   <View style={{ flex: 1 }}>      
      <FlatList
        data={photoset}
        renderItem={
          ({item}) =>
          <AlbumDetail title={item.title._content} photos={item.photos}
          description={item.description._content}  albumId={item.id}  />
        }
      />
    </View>
  )
  
}
export default AlbumList;
