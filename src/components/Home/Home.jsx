import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero/Hero'
import Network from '../Network/Network'
import Treat from '../../components/About/Treat/Treat'
import Meet from './Meet/Meet'
import Available from './Available/Available'
import Handle from './Handle/Handle'
import Journey from './Journey/Journey'
import Location from './Location/Location'
import Frequent from './Frequent/Frequent'
import Providers from '../OurTeam/Providers'
import Phead from './Phead/Phead'
// import Hear from './Hear/Hear'
import HearClients from './HearClients/HearClients'
import AppointmentScheduling from './AppointmentScheduling/AppointmentScheduling'
import FAQ from '../Contact Us/FAQ'



const Home = () => {
    return (
        <div className="home_container mx-auto">
            <div className="home_wrapper mx-auto">
                <Hero/>
                <Network/>
                <Phead/>
                <Providers itemsPerPage={10} numberOfColumns={5} forHome={true}/>
                <Meet/>
                <Treat/>
                <Handle/>
                <Available/> {/* <Hear/> */}
                <HearClients/>
                <Journey/>
                <Location/>
                {/* <Frequent/> */}
                <FAQ/>
            </div>
        </div>
    )
}

export default Home
