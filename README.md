# WebCraft Blockly - Adding Simple Blocks with Real-Time Preview

## Overview
This guide explains how to add simple blocks to your Blockly application that generate HTML, CSS, and JavaScript code, and display a real-time preview using an iframe.

## What You'll Create
- **Simple blocks** that generate code (HTML, CSS, JS)
- **Real-time preview** using an iframe
- **Code output area** to see the generated code
- **Live preview** that updates as you modify blocks

## Step-by-Step Implementation

### 1. Create a New Block Definition File
Create `blocks/simple-blocks.js` in your `blocks/` directory:

```javascript
import { categoryColors } from '../config/colors.js';

export function defineSimpleBlocks() {
  // HTML Block - Creates a simple HTML element
  Blockly.Blocks['simple_html'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Create")
          .appendField(new Blockly.FieldTextInput("div"), "TAG")
          .appendField("with text")
          .appendField(new Blockly.FieldTextInput("Hello World"), "TEXT");
      this.setColour(categoryColors.simple || '#FF6B6B');
      this.setTooltip("Creates a simple HTML element");
      this.setHelpUrl("");
    }
  };

  // CSS Block - Adds styling
  Blockly.Blocks['simple_css'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Style")
          .appendField(new Blockly.FieldTextInput("div"), "SELECTOR")
          .appendField("with")
          .appendField(new Blockly.FieldDropdown([
            ["color", "color"],
            ["background-color", "background-color"],
            ["font-size", "font-size"],
            ["padding", "padding"],
            ["margin", "margin"]
          ]), "PROPERTY")
          .appendField("=")
          .appendField(new Blockly.FieldTextInput("red"), "VALUE");
      this.setColour(categoryColors.simple || '#4ECDC4');
      this.setTooltip("Adds CSS styling");
      this.setHelpUrl("");
    }
  };

  // JavaScript Block - Adds interactivity
  Blockly.Blocks['simple_js'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("When")
          .appendField(new Blockly.FieldTextInput("button"), "ELEMENT")
          .appendField("is clicked")
          .appendField("do")
          .appendField(new Blockly.FieldTextInput("alert('Hello!')"), "ACTION");
      this.setColour(categoryColors.simple || '#45B7D1');
      this.setTooltip("Adds JavaScript functionality");
      this.setHelpUrl("");
    }
  };
}
```

### 2. Create JavaScript Generators
Add this to the same file or create `blocks/simple-generators.js`:

```javascript
// JavaScript generators for simple blocks
Blockly.JavaScript['simple_html'] = function(block) {
  const tag = block.getFieldValue('TAG');
  const text = block.getFieldValue('TEXT');
  return `document.body.innerHTML += '<${tag}>${text}</${tag}>';\n`;
};

Blockly.JavaScript['simple_css'] = function(block) {
  const selector = block.getFieldValue('SELECTOR');
  const property = block.getFieldValue('PROPERTY');
  const value = block.getFieldValue('VALUE');
  return `document.querySelector('${selector}').style.${property} = '${value}';\n`;
};

Blockly.JavaScript['simple_js'] = function(block) {
  const element = block.getFieldValue('ELEMENT');
  const action = block.getFieldValue('ACTION');
  return `document.querySelector('${element}').addEventListener('click', function() { ${action} });\n`;
};
```

### 3. Update Your Main Blocks Index
Add to `blocks/index.js`:

```javascript
import { defineSimpleBlocks } from './simple-blocks.js';

export function defineAllBlocks() {
  defineHtmlBlocks();
  defineLayoutBlocks();
  defineTextBlocks();
  defineListBlocks();
  defineMediaBlocks();
  defineFormBlocks();
  defineTableBlocks();
  defineStyleBlocks();
  defineScriptBlocks();
  defineSimpleBlocks(); // Add this line
}
```

### 4. Add Simple Blocks to Toolbox
Update your `index.html` toolbox section:

```xml
<category name="Simple" colour="%{BKY_LOOPS_HUE}">
  <block type="simple_html"></block>
  <block type="simple_css"></block>
  <block type="simple_js"></block>
</category>
```

### 5. Create the Preview System
Create `ui/preview.js`:

```javascript
export function createPreviewSystem() {
  // Create preview container
  const previewContainer = document.createElement('div');
  previewContainer.id = 'previewContainer';
  previewContainer.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    width: 400px;
    height: 500px;
    background: white;
    border: 2px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1000;
    display: flex;
    flex-direction: column;
  `;

  // Create header
  const header = document.createElement('div');
  header.innerHTML = `
    <div style="padding: 10px; background: #f0f0f0; border-bottom: 1px solid #ccc; display: flex; justify-content: space-between; align-items: center;">
      <strong>Live Preview</strong>
      <button id="runCode" style="background: #4CAF50; color: white; border: none; padding: 5px 15px; border-radius: 4px; cursor: pointer;">Run Code</button>
    </div>
  `;

  // Create iframe for preview
  const previewFrame = document.createElement('iframe');
  previewFrame.id = 'previewFrame';
  previewFrame.style.cssText = `
    flex: 1;
    border: none;
    background: white;
  `;

  // Create code output area
  const codeOutput = document.createElement('div');
  codeOutput.id = 'codeOutput';
  codeOutput.style.cssText = `
    height: 150px;
    background: #f8f8f8;
    border-top: 1px solid #ccc;
    padding: 10px;
    font-family: monospace;
    font-size: 12px;
    overflow-y: auto;
    white-space: pre-wrap;
  `;

  // Assemble preview container
  previewContainer.appendChild(header);
  previewContainer.appendChild(previewFrame);
  previewContainer.appendChild(codeOutput);

  // Add to page
  document.body.appendChild(previewContainer);

  // Setup run button functionality
  document.getElementById('runCode').addEventListener('click', runGeneratedCode);

  return previewContainer;
}

function runGeneratedCode() {
  const workspace = Blockly.getMainWorkspace();
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  
  // Display generated code
  document.getElementById('codeOutput').textContent = code;
  
  // Create HTML document for iframe
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Blockly Preview</title>
      <style>
        body { margin: 20px; font-family: Arial, sans-serif; }
        button { padding: 10px 20px; margin: 5px; cursor: pointer; }
        div { margin: 10px 0; }
      </style>
    </head>
    <body>
      <h2>Blockly Generated Preview</h2>
      <div id="output"></div>
      <script>
        // Override document.body.innerHTML to capture output
        const originalInnerHTML = Object.getPropertyDescriptor(Element.prototype, 'innerHTML');
        Object.defineProperty(document.body, 'innerHTML', {
          set: function(value) {
            document.getElementById('output').innerHTML = value;
          },
          get: function() {
            return document.getElementById('output').innerHTML;
          }
        });
        
        // Run the generated code
        try {
          ${code}
        } catch (error) {
          console.error('Error in generated code:', error);
          document.getElementById('output').innerHTML += '<p style="color: red;">Error: ' + error.message + '</p>';
        }
      </script>
    </body>
    </html>
  `;
  
  // Update iframe
  const iframe = document.getElementById('previewFrame');
  iframe.srcdoc = htmlContent;
}
```

### 6. Integrate Preview System
Update your `main.js`:

```javascript
import { createPreviewSystem } from './ui/preview.js';

// In your window.addEventListener("load") callback, add:
const previewSystem = createPreviewSystem();
```

### 7. Add CSS Styling
Add to your `style.css`:

```css
/* Preview system styles */
#previewContainer {
  resize: both;
  overflow: hidden;
}

#previewContainer:hover {
  border-color: #999;
}

#runCode:hover {
  background: #45a049 !important;
}

/* Make sure preview doesn't interfere with Blockly */
.blocklyMainBackground {
  z-index: 1;
}
```

## How It Works

1. **Simple Blocks**: Create basic blocks for HTML, CSS, and JavaScript
2. **Code Generation**: Each block generates appropriate code when connected
3. **Preview System**: 
   - Creates an iframe with a clean HTML document
   - Captures generated code and runs it in the iframe
   - Shows real-time results as you modify blocks
4. **Code Output**: Displays the generated JavaScript code for debugging

## Usage Example

1. Drag and drop simple blocks from the "Simple" category
2. Connect them to create a program
3. Click "Run Code" to see the preview
4. Modify blocks and run again to see changes
5. The iframe shows exactly what your generated code produces

## Customization

- **Add more block types** by extending the block definitions
- **Modify the preview styling** by changing the HTML template
- **Add error handling** for invalid code generation
- **Include external libraries** in the preview iframe
- **Add save/load functionality** for generated code

## Troubleshooting

- **Preview not showing**: Check if iframe is being blocked by browser security
- **Code not running**: Verify JavaScript generators are properly defined
- **Styling issues**: Ensure CSS is being applied to the preview iframe
- **Performance**: Consider debouncing the run button for complex programs

This system gives you a complete development environment where you can visually program and immediately see the results!
