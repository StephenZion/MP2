import {useEffect,useState} from 'react'
import axios from 'axios'

const Comment = () => {
    //initialize the card/api data
        const [cardInfo, setCardInfo] = useState('');
        //get the api url
        const apiReqURL = "http://localhost:3000/user/1";
        //perform asynchronous async/await inside useEffect
        useEffect(()=>{
            //http request using axios
            const fetchData=async()=>{
                const response =await axios.get(apiReqURL);
                //console.log(response.data);
                setCardInfo({...response.data});
            };
            fetchData();
        },[])
        return (
            <div className="card" style={{width: '18rem'}}>
                    <img src='' className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{cardInfo.name}</h5>
                    <p className="card-text">{cardInfo.body}</p>
                    <h5 className="card-text">${cardInfo.id}</h5>
                    <button href="#" className="btn btn-primary">ADD to cart</button>
                </div>
            </div>
        )
    }
    
    export default Comment