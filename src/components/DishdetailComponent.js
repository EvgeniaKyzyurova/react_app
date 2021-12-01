import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail  extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }

    renderComments(comments){
        if(comments != null){
            return(
                <div className="col-12 m-1">
                    <Card>
                        <h4>Comments</h4>
                        
                        <CardText>
                            {comments.map((element)=>{
                                return(
                                    <div key={element.id} className="row">
                                        <div className="col-12 m-1">
                                            <ul className="list-unstyled">
                                                <li> {element.comment}</li>
                                                <li>-- {element.author} {element.date}</li>
                                            </ul>  
                                        </div>   
                                    </div>
                                );
                            })}
                        </CardText>
                    </Card>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){
        const dish = this.props.selectedDish;
        
        if(dish !== null){
            const dishComments = dish.comments;
            return(
                <div className="row">
                    {this.renderComments(dishComments)}
                </div>
            );
        }
        return (
            <div>
            </div>
        )
    }
}

export default DishDetail ;