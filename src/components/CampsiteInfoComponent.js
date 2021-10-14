import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCampsite({ campsite }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {this.props.campsite.comments.map(comment => {
                    return (
                        <div key={this.props.campsite.comments.id}>
                            <p> {comment.text} </p>
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </p>
                        </div>
                    )
                })}
            </div>
        );
    } else {
        return <div></div>
    }
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    {this.renderCampsite(props.campsite)}
                    {this.renderComments(props.campsite.comments)}
                </div>
            </div>
        );
    } else {
        return <div />;
    }
}


export default CampsiteInfo