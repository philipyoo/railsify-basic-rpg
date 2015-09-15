
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

  render: function() {
    var form_url = "/users/" + this.props.current_user.id + "/characters"
    // var parseAttack = parseInt(this.state.attack)
    // var parseDefense = parseInt(this.state.defense)

    return (
      <form action={form_url} method="POST">
        <input name="name"></input>

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

        <div>
          <input name="attack" value={this.state.character.attack} className="hidden" />
          <input name="defense" value={this.state.character.defense} className="hidden" />
          <input name="unassigned" value={this.state.character.unassigned} className="hidden" />
          <input className="btn" type="submit" name="action" value="Create" />
        </div>
      </form>
    );
  }
});


var AttackUp = React.createClass({
  _handleClick: function() {
    this.props.adjustAttack(1)
  },

  render: function() {
    return (
      <button type="button" onClick={this._handleClick}>UP</button>
    );
  }
});

var AttackDown = React.createClass({
  _handleClick: function() {
    this.props.adjustAttack(-1)
  },

  render: function() {
    return (
      <button type="button" onClick={this._handleClick}>DOWN</button>
    );
  }
});


var DefenseUp = React.createClass({
  _handleClick: function() {
    this.props.adjustDefense(1)
  },

  render: function() {
    return (
      <button type="button" onClick={this._handleClick}>UP</button>
    );
  }
});

var DefenseDown = React.createClass({
  _handleClick: function() {
    this.props.adjustDefense(-1)
  },

  render: function() {
    return (
      <button type="button" onClick={this._handleClick}>DOWN</button>
    );
  }
});
