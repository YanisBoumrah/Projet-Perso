import React,{useState,useEffect} from 'react';
import Navigation from '../components/navigation';
import axios from 'axios'
const Home = () => {
    
    const [data,setData]=useState([])

    useEffect( ()=> {
        

    },[])

    return (
        <div className="home">
            
            <Navigation></Navigation>

            Home
        </div>
    );
};

export default Home;