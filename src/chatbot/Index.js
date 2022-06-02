import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useRef} from 'react'
import Styles from './Styles'
import Message from './Message'
import Intent from './Intent'


const Index = () => {
  const [ip, setip] = useState('')
  const [data, setdata] = useState([<Message outputmsg={true} msg="I'm Banking Bot" />])
  const scrollViewRef = useRef();

  const submitHandler = () => 
  {
    let x = <Message inputmsg={true} msg={ip} />
    let y = <Message outputmsg={true} msg="Can't understand" />

    const index = 0

    for( let i=0; i<Intent.length; i++ )
    {
      if ( Intent[i].query.includes(ip.toLowerCase()) )
      {
        y = <Message outputmsg={true} msg={Intent[i].reply.toString()} />
        break
      }
    }
    setdata([...data,x,y])
    setip('')
  }
  return (
    <SafeAreaView style={Styles.mainlayout} >
      <ScrollView style={Styles.chatArea} ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })} >
       {data}
      </ScrollView>
      <View style={Styles.user}>
        <TextInput placeholder='Type here...' style={Styles.userIP} onChangeText={val => setip(val)} value = {ip}/>
        <TouchableOpacity style={Styles.userButton} onPress={() => submitHandler()}>
          <Text style={Styles.userButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Index