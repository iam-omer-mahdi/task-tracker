import React from 'react';
import Btn from './Btn'

class Header extends React.Component {
  render () {
    return (
      <header className="bg-dark text-white py-1 px-5 d-flex justify-content-between">
        <h1 className='mb-0 fw-bold'>{this.props.title}</h1>
        <Btn onClick={clicked} className="btn btn-info rounded-0 shadow" text="Add Task" icon="bi bi-plus-circle mx-1" />
      </header>
    )
  }
};

function clicked() {
  alert('i was clicked');
}

Header.defaultProps = {
  title: 'Task Tracker'
}

export default Header;
