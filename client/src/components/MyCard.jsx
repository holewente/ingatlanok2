import React from 'react'
import {Card,CardBody,CardText,CardTitle,Button} from 'reactstrap'

export const MyCard=(id,imageUrl,createdAt,name)=> {
  return (
    <Card className='m-1 d-flex flex-column justify-content-between'
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
</Card>
  )
}
