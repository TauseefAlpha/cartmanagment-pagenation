import React,{useState} from 'react'
import CardMap from './common/CardMap'

function Index1() {
  const pgs=6
  const [currentPage, setCurrentPage] = useState(1)
  
  return (
    <div>
        <CardMap 
        search='none'
        nameheading="shopping Store"
        bdcolor='rgb(179, 175, 175)'
        nameBtn='ShowProducts' 
        path='/showallproducts'
        currentPage={currentPage}
        pg={pgs}
        />
      
    </div>
  )
}

export default Index1
