import React from 'react'
import beatles from '../images/testimonies/beatles.jpg'
import tameImpala from '../images/testimonies/tame-impala.jpg'
import ladySong from '../images/testimonies/lady-songwriter.jpg'
import jimi from '../images/testimonies/jimi.jpg'
import doggo from '../images/testimonies/doggo.jpg'
import TestimonieSingle from './TestimonieSingle'
import guitar from '../images/guitar-pic.jpeg'
import { Testimonials, Title } from '../styles/cssInJs/Testimonials.styles';

const Testimonies = () => {
    return ( 
        <Testimonials>
        <Title> Testimonials </ Title>
            <div className="scrolling-wrapper">
                <TestimonieSingle // renders testomie signle format for all testimonies.
                    image= {beatles}
                    testimonie= "''Dunn was the guy most responsible for putting a face on (Manitoba Television Network’s) first on-air decade.'' "
                    author= "- The Beatles"
                />
                <TestimonieSingle 
                    image= {tameImpala}
                    testimonie= "''Kevin likes to be the centre of attention. He’s one of those guys that doesn’t demand the attention, but just falls into or earns the role of head attention getter.'' "
                    author= "- Jimi Hendrix"
                />
                <TestimonieSingle 
                    image= {ladySong}
                    testimonie= "''Kevin has the unique ability to communicate and project a positive approach in everything he does.  A a true people-person…with high level social skills like convincing, negotiating, selling, communicating ideas, telling stories,motivating…'' "
                    author= "- King"
                />
                <TestimonieSingle 
                    image= {jimi}
                    testimonie= "''He spits out these clever, poetic pieces of art faster then anyone else I have ever come across.' -Tony Wytinck, Senior Editor, MidCanada Production Services.''"
                    author= "- Nacho Man"
                />
                <TestimonieSingle 
                    image= {doggo}
                    testimonie= " ''He has used his entertainment skills to bring people together, network, celebrate special occasions, raise money for organizations and charities, market himself and his work, and to create great memories for all around him.''"
                    author= "- Dennis"
                />
                <TestimonieSingle 
                    image= {jimi}
                    testimonie= "''Kevin likes to be the centre of attention. He’s one of those guys that doesn’t demand the attention, but just falls into or earns the role of head attention getter.''"
                    author= "- Dr legend kid"
                />
            </div>
        </ Testimonials >
     )
}
 
export default Testimonies