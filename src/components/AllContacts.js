import React from 'react'
import { api, setJwt } from '../api/init'

class AllContacts extends React.Component {
    state = { 
        allContacts: [] //filled by ajax request.
     }

    componentWillMount(){
        setJwt(localStorage.getItem('token'))
        let contactRequest = []
        api.get("/contact/all") //gets all contact
        .then((response) => {
            this.setState({ allContacts: response.data.reverse() }, () => console.log(this.state))
        })
        .catch((err) => { console.log(err) })
    }

    render() { 
        return ( 
            <div>
                <div className="allcontacts--holder">
                {
                    this.state.allContacts  ?  //only display if contacts exists, otherwise show laoding.
                    this.state.allContacts.map((contact) => {
                        return (
                            <div>
                                <div className="contact" key = {contact._id}>  
                                    <h1> name: {contact.name} </h1>
                                    <p> artist name: {contact.artist} </p>
                                    <p> email: {contact.email} </p>
                                    <p> phone: {contact.phone} </p>
                                    <p> comment: {contact.comment} </p>
                                </div>
                            </div>
                        )
                    })
                : <p> No contacts.. </p>
                }
                </div>
            </div>
         );
    }
}
 
export default AllContacts;