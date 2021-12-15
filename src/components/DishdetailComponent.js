import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


  function RenderDish({dish}){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle >{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}){
        if(comments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((element)=>{
                            return(
                                <li key = {element.id}>
                                    <p>{element.comment}</p> 
                                    <p>-- {element.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(element.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        const dish = props.selectedDish;
        if(dish != null){
            const dishComments = dish.comments;
            return(
                <div className='container'>
                    <div className='row'>
                        <RenderDish dish={dish} />
                        <RenderComments comments={dishComments}/>
                    </div>
                </div>
            );
        }else {
            return (
                <div></div>
            );
        }
    }

export default DishDetail ;