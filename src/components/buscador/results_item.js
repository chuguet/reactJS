import React, { Component, PropTypes } from 'react';

class ResultsItem extends Component {
  render(){
    const { name, actor, seasons, alive } = this.props.item;
    return (
      <tr>
        <td>{ name }</td>
        <td>{ actor }</td>
        <td>{ seasons.join(', ') }</td>
        <td>{ alive ? 'Si' : 'No' }</td>
      </tr>
    )
  }
}

ResultsItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    seasons: PropTypes.arrayOf(PropTypes.number).isRequired,
    alive: PropTypes.bool.isRequired
  }).isRequired
}

export default ResultsItem;
