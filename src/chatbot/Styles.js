import {Dimensions, StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
inputbox: {
    maxwidth: '80%',
    padding: 5,
    alignSelf: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: '#b8b8b8',
    borderRadius: 10,
    fontSize: 18,
    justifyContent: 'center',
    flexWrap: 'wrap',
},
outputbox: {
    maxwidth: '80%',
    padding: 5,
    alignSelf: 'flex-start',
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: '#b8b8b8',
    borderRadius: 10,
    fontSize: 18,
    justifyContent: 'center',
    flexWrap: 'wrap',
    'white-space': 'pre-wrap',
},
mainlayout:{
    backgroundColor: '#fffaf0',
    color:'black',
    flex: 1,
    padding: '1%',
    maxHeight: Dimensions.get('window').height,
    maxWidth: Dimensions.get('window').width,
},
chatArea:{
    flex: 9,
},
user:{
    flexDirection: 'row',
    fontSize: 18,
    flex: 0.1,
},
userIP:{
    flex: 1,
    padding: '1%',
    fontSize: 18,
    flexWrap: 'wrap',
},
userButton:{
    flex: 0.4,
},
userButtonText:{
    alignContent: 'center',
    padding: '5%',
    marginBottom: 'auto',
    marginTop: 'auto',
    margin: 'auto',
    fontSize: 18,
},
})

export default Styles