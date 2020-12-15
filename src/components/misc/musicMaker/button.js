export default class Button {
  constructor(p, x, y, width, height, active, activeColor, inactiveColor) {
    this.p = p
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.active = active;
    this.activeColor = activeColor;
    this.inactiveColor = inactiveColor;
  }

  click() {
    this.active = !this.active;
  }

  fallingWidth() {
    return this.x + this.width;
  }

  fallingHeight() {
    return this.y + this.height;
  }

  clicked(mouseX, mouseY) {
    if (this.x <= mouseX && mouseX <= this.fallingWidth() && this.y <= mouseY && mouseY <= this.fallingHeight()) {
      this.click()
    }
  }

  color() {
    if (this.active) {
      return this.activeColor;
    }

    return this.inactiveColor;
  }

  draw() {
    this.p.fill(this.color())
    this.p.rect(this.x, this.y, this.fallingWidth(), this.fallingHeight());
  }
}
