/**
 * Simple Cursor p5.js
 * @author acikek
 */

class Coordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Base {
  set(attr, val) {
    this[attr] = val;
  }
  
  get(attr) {
    return this[attr] || undefined;
  }
}

class Component extends Base {
  constructor(start, end, options) {
    super();
    
    // Default
    if (!options) options = {};
    
    this.opacity = 255;
    this.coords = { start, end };
    
    // Options
    this.color = options.color || color(255, 0, 0);
    this.weight = options.weight || 10;
    this.interval = options.interval || 25;
    this.thick = options.thick || false;
  }
  
  draw() {
    // RGB Deconstruction
    const [r, g, b] = this.color.levels;
    
    // Line settings
    stroke(r, g, b, this.thick ? 255 : this.opacity);
    strokeWeight(this.weight);
    strokeCap(ROUND);
    
    // Draw
    line(this.coords.start.x,
         this.coords.start.y,
         this.coords.end.x,
         this.coords.end.y);
    
    // Decrement opacity
    this.opacity -= this.interval;
  }
}

class Cursor extends Base {
  constructor(options) {
    super();
    
    // Default
    let opts = options || {};
    
    // Assign
    Object.assign(this, opts);
    
    this.components = [];
    this.on = false;
  }
  
  __add__() {
    this.components.push(new Component(
      new Coordinates(pmouseX, pmouseY),
      new Coordinates(mouseX, mouseY),
      {
        color: this.color,
        weight: this.weight,
        interval: this.interval,
        thick: this.thick
      }
    ));
  }
  
  __prune__() {
    this.components = this.components.filter(component => {
      return component.get("opacity") > 0;
    });
  }
  
  draw() {
    if (!this.on) {
      this.on = true;
      if (this.fancy) noCursor();
    }
    
    this.__prune__();
    this.__add__();
    
    this.components.forEach(component => component.draw());
  }
  
  reset() {
    this.components = [];
    this.on = false;
    
    if (this.fancy) cursor(ARROW);
  }
}
