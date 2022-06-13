import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import Styles from './Styles'
import Message from './Message'
import Ml from './Ml'


const Index = () => {
  const [ip, setip] = useState('')
  const [data, setdata] = useState([<Message outputmsg={true} msg="I'm Banking Bot" />])
  const [reply, setreply] = useState('empty')
  const scrollViewRef = useRef();


  const keyHandler = (e) =>
  {
    if(e.key === 'Enter')
    {
      submitHandler()
    }
  }
  const submitHandler = () => 
  {
    let x = <Message inputmsg={true} msg={ip} />
    let y = <Ml data={ip} />
    for (let i = 0; i < 100000; i++)
    {
      i++
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
        <TextInput placeholder='Type here...' style={Styles.userIP} onChangeText={val => setip(val)} onKeyPress={e => keyHandler(e)} value = {ip}/>
        <TouchableOpacity style={Styles.userButton} onPress={() => submitHandler()}>
          <Text style={Styles.userButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Index

