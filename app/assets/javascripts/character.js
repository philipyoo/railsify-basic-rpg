function Character() {
    MAX_POINTS = 20;
    this.unassigned = 20;
    this.attack = 0;
    this.defense = 0;
  }

  //where direction = -1 or 1
  Character.prototype.checkTotal = function(direction) {
    return (this.unassigned - direction <= MAX_POINTS && this.unassigned - direction >= 0);
  }

  Character.prototype.checkAttack = function(direction) {
    return (this.attack + direction <= MAX_POINTS && this.attack + direction >= 0);
  }

  Character.prototype.checkDefense = function(direction) {
    return (this.defense + direction <= MAX_POINTS && this.defense + direction >= 0);
  }


  Character.prototype.changeAttack = function(direction) {
    if (this.checkTotal(direction) && this.checkAttack(direction)) {
      this.attack += parseInt(direction);
      this.unassigned -= parseInt(direction);
    };
  }

  Character.prototype.changeDefense = function(direction) {
    if (this.checkTotal(direction) && this.checkDefense(direction)) {
      this.defense += parseInt(direction);
      this.unassigned -= parseInt(direction);
    };
  }
