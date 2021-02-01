



import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search = ()=>{
    const [term, setTerm] = useState('')
    const [results, setResult] = useState([])
    console.log(results)

    useEffect(()=>{
        const search = async ()=>{
           const {data}= await axios.get('https://en.wikipedia.org/w/api.php', {
               params : {
                   action : 'query',
                   list : 'search',
                   format : 'json',
                   origin : '*',
                   srsearch : term
               }
           })
           setResult(data.query.search)
        }
        if(term){
            search()
        }
      
    }, [term])

    const renderedResult = results.map((result)=>{
        return(
                    <div key={result.pageid} className='item'>
                        <div className='right floated content'>
                            <a className='ui primary button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Read More</a>
                        </div>
                        <div className='content'>
                            <div className='header'> {result.title} </div>
                        <span dangerouslySetInnerHTML={{__html : result.snippet}} />
                        </div>
                    </div>
                    
            
        )
    })
    return(
        <div >
        <div className='ui center aligned grey inverted segment' >
       <div className='ui inverted transparent icon input'>
       <input type="text" placeholder="Search from Wikipedia..."
       value={term}
       onChange={(e)=> setTerm(e.target.value)}
       />
       <i className="search icon" />
   
       </div>

      

       </div>
       <div className='ui raised segment'>
       <div className='ui relaxed divided list'>
           {renderedResult}
       </div>
       </div>
       </div>
           
     
    )
}

export default Search


// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=YOURSEARCHTERM