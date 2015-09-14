

var CreateCharacter = React.createClass({
  getInitialState: function() {
    return {
      unassigned: 20,
      atk: 0,
      def: 0,
      name: ''
    }
  },

  _updateAtk: function(a_val, u_val) {
    this.setState({
      atk: this.state.atk + a_val,
      unassigned: this.state.unassigned + u_val
    })
  },

  _updateDef: function(d_val, u_val) {
    this.setState({
      def: this.state.def + d_val,
      unassigned: this.state.unassigned + u_val
    })
  },

  _updateName: function(name) {
    this.setState({
      name: name
    })
  },

  render: function() {
    return (
      <div>
        <div>Available Points: {this.state.unassigned}</div>
        <p>
          <AtkUp
            unassigned={this.state.unassigned}
            atk={this.state.atk}
            _updateAtk={this._updateAtk}
          />
          <AtkDown
            unassigned={this.state.unassigned}
            atk={this.state.atk}
            _updateAtk={this._updateAtk}
          />
        </p>
        <p>
          <DefUp
            unassigned={this.state.unassigned}
            def={this.state.def}
            _updateDef={this._updateDef}
          />
          <DefDown
            unassigned={this.state.unassigned}
            def={this.state.def}
            _updateDef={this._updateDef}
          />
        </p>
      </div>
    );
  }
});



var AtkUp = React.createClass({
  _handleClick: function() {
    if (this.props.unassigned >= 1) {
      this.props._updateAtk(1, -1)
    } else {
      this.props._updateAtk(0, 0)
    };
  },

  render: function() {
    return (
      <button onClick={this._handleClick}>UP</button>
    );
  }
});

var AtkDown = React.createClass({
  _handleClick: function() {
    if (this.props.atk >= 1) {
      this.props._updateAtk(-1, 1)
    } else {
      this.props._updateAtk(0, 0)
    };
  },

  render: function() {
    return (
      <button onClick={this._handleClick}>DOWN</button>
    );
  }
});






var DefUp = React.createClass({
  _handleClick: function() {
    if (this.props.unassigned >= 1) {
      this.props._updateDef(1, -1)
    } else {
      this.props._updateDef(0, 0)
    };
  },

  render: function() {
    return (
      <button onClick={this._handleClick}>UP</button>
    );
  }
});

var DefDown = React.createClass({
  _handleClick: function() {
    if (this.props.def >= 1) {
      this.props._updateDef(-1, 1)
    } else {
      this.props._updateDef(0, 0)
    };
  },

  render: function() {
    return (
      <button onClick={this._handleClick}>DOWN</button>
    );
  }
});



React.render(<CreateCharacter />, document.getElementById('create-character'));
