import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import NoteCard from './NoteCard';

class NotesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        if(this.props.adding) {
            return <h3>Adding Note ...</h3>
        }
        if(this.props.fetching) {
            return <h3>Loading Notes ...</h3>
        }
        return (
            <div>
                <h3 className='notes-page-title'>Your Notes:</h3>
                <div className='noteList-card-container'>
                    {this.props.notes.map(note => {
                        return (
                            <div key={note._id}><NoteCard noteInfo={note}/></div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        notes: state.notes,
        fetching: state.fetching,
        adding: state.adding,
    };
}

export default connect(
    mapStateToProps,
    { fetchNotes }
) (NotesList);