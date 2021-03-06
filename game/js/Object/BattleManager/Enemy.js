class Enemy extends Phaser.Group {
  constructor(game, data, coords, pos) {
    super(game)

    this.frame = data.frame
    this.name = data.name
    this.EXP = data.EXP
    this.HP = data.HP
    this.coords = coords
    this.pos = pos

    this.attacks = data.attacks
  }

  draw() {
    const x = this.coords.x
    const y = this.coords.y

    // Draw sprite
    const enemySprite = this.create(x, y, 'enemy-animals', this.frame)
    enemySprite.scale.setTo(2, 2)
  }
}

module.exports = Enemy
