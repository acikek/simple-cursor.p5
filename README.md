# Simple Cursor for p5.js
A simple cursor with a trail for p5.js.

## Setup
Add a script tag with the source being `index.js`.
```html
<script src="https://cdn.jsdelivr.net/gh/acikek/simple-cursor.p5/index.js"></script>
```

## Example
```js
const cur = new Cursor({
  thick: true,
  fancy: true
});

function setup() {
  createCanvas(500, 500);
  cur.set("color", color(0, 255, 0));
}

function draw() {
  background(255);
  cur.draw();
}
```

## Documentation

### `new Cursor(options)`
The Cursor object.

**Params**
- **Object** `options`: An object containing the following fields:
  - `color` (Color): The color of the cursor.
  - `weight` (Number): The stroke weight of the cursor components.
  - `interval` (Number): How much opacity is lost per component every frame.
  - `thick` (Boolean): If the components should disappear rather than fade.
  - `fancy` (Boolean): If the environment cursor should be hidden.

### `Cursor.set(attr, val)`
Inherited from the `Base` class. Sets an attribute.

**Params**
- **String** `attr`: The attribute to set.
- **Any** `val`: The value to assign.

### `Cursor.get(attr)`
Inherited from the `Base` class. Gets an attribute.

**Params**
- **String** `attr`: The attribute to get.

**Return**
- **Any**: The attribute's value.

### `Cursor.draw()`
Draws the Cursor to the canvas.

### `Cursor.reset()`
Reset's the Cursor's components and environment cursor.
