// JavaScript Code Generators for Blockly blocks

// Text block generators
Blockly.JavaScript["heading_block"] = function (block) {
  var tag = block.getFieldValue("TAG");
  var content = block.getFieldValue("CONTENT");
  return `<${tag}>${content}</${tag}>\n`;
};

Blockly.JavaScript["br"] = function () {
  return `<br>\n`;
};

Blockly.JavaScript["paragraph"] = function (block) {
  var text = block.getFieldValue("TEXT");
  return `<p>${text}</p>\n`;
};

// Media block generators
Blockly.JavaScript["video"] = function (block) {
  const src = block.getFieldValue("SRC");
  return `<video controls>\n  <source src="${src}" type="video/mp4">\n</video>\n`;
};

Blockly.JavaScript["audio"] = function (block) {
  const src = block.getFieldValue("SRC");
  return `<audio controls>\n  <source src="${src}" type="audio/mpeg">\n</audio>\n`;
};

Blockly.JavaScript["img"] = function (block) {
  const src = block.getFieldValue("SRC");
  const alt = block.getFieldValue("ALT");
  return `<img src="${src}" alt="${alt}">\n`;
};

// Form block generators
Blockly.JavaScript["form_input"] = function (block) {
  const type = block.getFieldValue("TYPE");
  const name = block.getFieldValue("NAME");
  return `<input type="${type}" name="${name}">\n`;
};

// Style block generators
Blockly.JavaScript["font_properties"] = function (block) {
  const prop = block.getFieldValue("PROPERTY");
  const val = block.getFieldValue("VALUE");
  return `${prop}: ${val};\n`;
};

Blockly.JavaScript["text_appearance"] = function (block) {
  const prop = block.getFieldValue("PROPERTY");
  const val = block.getFieldValue("VALUE");
  return `${prop}: ${val};\n`;
};

Blockly.JavaScript["text_spacing"] = function (block) {
  const prop = block.getFieldValue("PROPERTY");
  const val = block.getFieldValue("VALUE");
  return `${prop}: ${val};\n`;
};

// Event block generators
Blockly.JavaScript["on_click"] = function (block) {
  const id = block.getFieldValue("ID");
  const statements = Blockly.JavaScript.statementToCode(block, "DO");
  return `document.getElementById("${id}").addEventListener("click", function() {\n${statements}});\n`;
};

Blockly.JavaScript["on_hover"] = function (block) {
  const id = block.getFieldValue("ID");
  const statements = Blockly.JavaScript.statementToCode(block, "DO");
  return `document.getElementById("${id}").addEventListener("mouseover", function() {\n${statements}});\n`;
};

Blockly.JavaScript["on_input"] = function (block) {
  const id = block.getFieldValue("ID");
  const statements = Blockly.JavaScript.statementToCode(block, "DO");
  return `document.getElementById("${id}").addEventListener("input", function() {\n${statements}});\n`;
};

Blockly.JavaScript["on_load"] = function (block) {
  const statements = Blockly.JavaScript.statementToCode(block, "DO");
  return `window.addEventListener("load", function() {\n${statements}});\n`;
};

Blockly.JavaScript["on_key_press"] = function (block) {
  const key = block.getFieldValue("KEY");
  const statements = Blockly.JavaScript.statementToCode(block, "DO");
  return `document.addEventListener("keydown", function(event) {
  if (event.key === "${key}") {
    ${statements}
  }
});\n`;
};
