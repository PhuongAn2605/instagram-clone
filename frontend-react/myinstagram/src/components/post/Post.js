import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import './Post.css';

import postImg from '../../images/post.jpg';
import love from '../../images/love.svg';
import loved from '../../images/love-pink.svg';

import comment from '../../images/comment.svg';
import share from '../../images/share.svg';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import FavoriteIcon from '@material-ui/icons/Favorite';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            current_comment: null,
            display_comment: [],
            showMore: false,
            isLiked: false,
            numLikes: this.props.likes
        }
    }

    componentDidMount() {
        this.getComments();
    }
    getComments = () => {

        // let data = [
        //     {
        //         "username": "ABC",
        //         "commentId": "1234",
        //         "timeStamp": "123456",
        //         "description": "Comment 1"
        //     },
        //     {
        //         "username": "ABC",
        //         "commentId": "1234",
        //         "timeStamp": "123456",
        //         "description": "Comment 2"
        //     },
        //     {
        //         "username": "ABC",
        //         "commentId": "1234",
        //         "timeStamp": "123456",
        //         "description": "Comment 3"
        //     }
        // ];
        // this.setState({ commentList: data });
        fetch('http://localhost:8080/comments/' + this.props.id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    commentList: data,
                    display_comment: data.slice(-5)
                });
            });
    }

    changeComment = (event) => {
        this.setState({
            ...this.state,
            current_comment: event.currentTarget.value
        })
    }

    submitComments = (event) => {
        if (event.key == "Enter") {

            let comment = event.currentTarget.value;
            this.setState({ current_comment: comment });

            if (comment != null || comment != undefined) {
                let payload = {
                    "commentId": Math.floor(Math.random() * 1000000).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).uid,
                    "postId": this.props.id,
                    "timeStamp": new Date().getTime(),
                    "comment": comment
                }

                const requestOptions = {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                }

                fetch("http://localhost:8080/comments", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        this.getComments();
                    })
                    .catch(error => {

                    })

            }
            this.setState({
                ...this.state,
                current_comment: ""
            })
        }
    }

    onClickShowMore = () => {
        if (!this.state.showMore) {
            this.setState({
                ...this.state,
                display_comment: this.state.commentList,
                showMore: !this.state.showMore

            })
        } else {
            this.setState({
                ...this.state,
                display_comment: this.state.commentList.slice(-5),
                showMore: !this.state.showMore

            })
        }


    }

    onClickLike = () => {
        if(!this.state.isLiked){
            this.setState({
                ...this.state,
                numLikes: this.state.numLikes + 1,
                isLiked: !this.state.isLiked
            })
        }else{
            if(this.state.numLikes > 0){
                this.setState({
                    ...this.state,
                    numLikes: this.state.numLikes - 1,
                    isLiked: !this.state.isLiked
                })
            }
            
        }


    }

    render() {
        return (
            <div className="post__container">
                {/* Header */}
                <div className="post__header">
                    <Avatar className="post__image" src="" />
                    <div className="post__username">{this.props.userName}</div>
                </div>

                {/* Image */}
                <div>
                    <img src={this.props.postImage} width="614px"></img>
                </div>

                {/* Analytics */}
                <div style={{ "marginLeft": "10px" }}>
                    {
                    this.state.isLiked ? <FavoriteIcon onClick={this.onClickLike} color="secondary" style={{ fontSize: 40 }}/> : <FavoriteIcon onClick={this.onClickLike} color="action" style={{ fontSize: 40 }}/>
                    }
                    <img src={comment} className="post__reactImg"></img>
                    <img src={share} className="post__reactImg"></img>

                    <div style={{ "fontWeight": "bold", "marginLeft": "10px" }}>
                        {this.state.numLikes} likes
                        </div>
                    <div className="post__showmore">
                        {
                            this.state.showMore ? <span onClick={this.onClickShowMore}>Show less <ArrowDropUpIcon /></span> : <span onClick={this.onClickShowMore}>Show more <ArrowDropDownIcon /></span>
                        }
                    </div>

                </div>

                {/* Comment Section */}
                <div style={{ "marginLeft": "10px" }}>
                    {
                        this.state.display_comment.map((item, index) => (
                            <div className="post__comment"><span className="post__username">{item.userName} :</span> {item.comment}</div>
                        ))
                    }
                    {/* <div className="post__showmore">
                        {
                            this.state.showMore ? <span onClick={this.onClickShowMore}>Show more <ArrowDropUpIcon /></span> : <span onClick={this.onClickShowMore}>Show more <ArrowDropDownIcon /></span>
                        }
                    </div> */}
                    <input type="text" name="comment" value={this.state.current_comment} onChange={this.changeComment} onKeyPress={this.submitComments} className="post__commentbox" placeholder="Add a comment ..."></input>
                </div>
            </div>
        );
    }
}

export default Post;