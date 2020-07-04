import React, { Component, Fragment } from 'react';
import Hero from '../layout/Hero';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getDiscussions } from '../../actions/discussions';
import { getPosts } from '../../actions/posts';
import { getUser, fetchToken } from '../../actions/user';
import Post from '../../components/posts/posts';


export  class Discussions extends Component {

    static propTypes = {
        discussions: PropTypes.array.isRequired,
        getDiscussions: PropTypes.func.isRequired,
       
      };
      

    componentWillMount(){
        //this.props.fetchToken('blockresna','Mu12345678.');
        
      }


    componentDidMount(){
       // this.props.getDiscussions(this.props.match.params.id);
       this.props.getPosts(this.props.match.params.id);
    }

    render = () => {
      if (this.props.discussions){
        //  const { discussion } = this.props.discussions ? this.props.discussions.filter((post) => post.discussionid == 1);
        const discussion = this.props.discussions.discussions.filter((disc) => disc.id == 1);
        
        console.log(discussion);
        
      }
      // const { discussion } = this.props.discussions;
//
        //console.log( this.props.posts.filter((post) => post.discussionid == 1));
       
        return <Fragment>
            <Hero />
            <div className="container row col-md-12">
            <div class="col-md-12 m-0">
            <div class="card card-default">
              <div class="card-header">
                
                
                {this.props.discussions ? 
                <h3 class="card-title">
                {this.props.discussions.discussions.filter((disc) => disc.id == this.props.match.params.id)[0].name}
                </h3>
                : null}
                
              </div>
              <div class="card-body">
              {this.props.posts ? this.props.posts.map((pst) => (

                <div class="callout callout-success">
                  <h5>##</h5>

                  <p><Post pst = {pst}/></p>
                </div>
                )) : null}
              </div>
            </div>
        
          </div>
            </div>
         
           

            
        </Fragment>
    }
}

const mapStateToProps = (state) => ({
    discussions: state.discussions.discussions,
    posts : state.posts.posts.posts,
})

export default connect(mapStateToProps,{getDiscussions,fetchToken, getPosts})(Discussions);