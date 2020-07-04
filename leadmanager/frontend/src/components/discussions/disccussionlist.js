import React, { Component, Fragment } from 'react';
import Hero from '../layout/Hero';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getDiscussions } from '../../actions/discussions';
import { getPosts } from '../../actions/posts';
import { getUser, fetchToken } from '../../actions/user';
import Post from '../../components/posts/posts';
import { Link } from 'react-router-dom';


export  class DiscussionList extends Component {

    static propTypes = {
        discussions: PropTypes.array.isRequired,
        getDiscussions: PropTypes.func.isRequired,
       
      };
      

    componentWillMount(){
        //this.props.fetchToken('blockresna','Mu12345678.');
        
      }


    componentDidMount(){
       // this.props.getDiscussions(this.props.match.params.id);
        
    }

    render = () => {

        //console.log( this.props.posts.filter((post) => post.discussionid == 1));
        this.props.getDiscussions(this.props.match.params.id);
        return <Fragment>
            <Hero />
            <div className="container row col-md-12">
           
                <div className="col-md-2 ">
                
                <ul class="list-group mb-4">
                <li class="list-group-item active">Discussions</li>
                {this.props.discussions.discussions ? this.props.discussions.discussions.map((discussion) => (

                <li class="list-group-item">{discussion.name}</li>
                )): null}
               
                </ul>
                </div>
                <div className="col-md-10 col-12">

                {this.props.discussions.discussions ? this.props.discussions.discussions.map((discussion) => (

                <div class="col-md-12 m-0">
            <div class="card card-default">
              <div class="card-header">
                <h3 class="card-title">
                
                {discussion.name}
                </h3>
              </div>
              <Link to={"/discussions/"+discussion.id}>
                <button class="btn btn-info btn-sm">Open</button>
            </Link>
            </div>


        
          </div>
           )): null}
       
       

               

                </div>
            </div>
         
           

            
        </Fragment>
    }
}

const mapStateToProps = (state) => ({
    discussions: state.discussions.discussions,
    posts : state.posts.posts.posts,
})

export default connect(mapStateToProps,{getDiscussions,fetchToken, getPosts})(DiscussionList);