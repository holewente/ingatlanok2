import React from 'react'
import {useQuery} from 'react-query'
import {getSeller} from './utils'
import {Card,CardBody,CardText,Button,CardTitle} from 'reactstrap'

export const SellerDetails=({id,setId})=>{
    console.log(id)
    const {data,status}=useQuery(['seller',id],getSeller)
    status=='success' && console.log(data.data[0])
        return (
            {status=='success && <Card className='m-1 d-flex flex-column justify-content-between'
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="name"
              src="{imageUrl}"
            />
            <CardBody>
              <CardTitle tag="h5">
                {name}
              </CardTitle>
              
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button id={id} onClick={(event)}>
                részletek...
              </Button>
            </CardBody>
          </Card>}
        )
}