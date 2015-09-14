
var CreateCharacter = React.createClass({

  propTypes:{
    current_user: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      character: new Character,
      name: ''
    };
  },

  adjustAttack: function(delta){
    this.state.character.changeAttack(delta);
    this.forceUpdate();
  },

  adjustDefense: function(delta){
    this.state.character.changeDefense(delta);
    this.forceUpdate();
  },

  setName: function(name){
    this.setState({name: name});
  },

  onSubmit: function(event) {
    //
    // Post AJAX? How can I save to db without ajax?
    event.preventDefault();
    // $(this.getDOMNode()).serialize();

    // $.ajax({
    //   data: this.state.character
    // })
  },

  render: function() {
    return (
      <div>
        <input></input>

        <div>
          Available Points: {this.state.character.unassigned}
        </div>

        <div>
          ATK:{this.state.character.attack}
          <AttackUp adjustAttack={this.adjustAttack} />
          <AttackDown adjustAttack={this.adjustAttack} />
        </div>

        <div>
          DEF: {this.state.character.defense}
          <DefenseUp adjustDefense={this.adjustDefense} />
          <DefenseDown adjustDefense={this.adjustDefense} />
        </div>

        <form onSubmit={this.onSubmit} className="hidden">
          <input name="Attack" value={this.state.attack} />
          <input name="Defense" value={this.state.defense} />
        </form>
      </div>
    );
  }
});


var AttackUp = React.createClass({
  _handleClick: function() {
    this.props.adjustAttack(1)
  },

  render: function() {
    return (
      <button onClick={this._handleClick}>UP</button>
    );
  }
});

var AttackDown = React.createClass({
  _handleClick: function() {
    this.props.adjustAttack(-1)
  },

  render: function() {
    return (
      <button onClick={this._handleClick}>DOWN</button>
    );
  }
});


var DefenseUp = React.createClass({
  _handleClick: function() {
    this.props.adjustDefense(1)
  },

  render: function() {
    return (
      <button onClick={this._handleClick}>UP</button>
    );
  }
});

var DefenseDown = React.createClass({
  _handleClick: function() {
    this.props.adjustDefense(-1)
  },

  render: function() {
    return (
      <button onClick={this._handleClick}>DOWN</button>
    );
  }
});
