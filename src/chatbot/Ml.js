
import React,{useEffect, useState} from 'react'
import Message from './Message'

const Ml = (props) => {
    const [reply,setreply] = useState('....')
    useEffect(() => 
    {
      fetch("http://127.0.0.1:5000/main", {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({query:props.data}) } )
      .then( res => res.json() )
      .then( res => {
        setreply(res.reply)
        console.log(res.reply)
      }).catch( () => {
        setreply("Server is currrently busy try again later")
      })
    }, [])
  return (
    <Message outputmsg={true} msg={reply} />
  )
}

export default Ml