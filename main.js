// Main Application Entry Point - MODULAR VERSION
import { defineAllBlocks } from './blocks/index.js';
import { initializeWorkspace, initializeToolbox, createCategoryCircles, setupClickOutsideHandler } from './ui/toolbox.js';
import { defineAllGeneratoesBlocks } from './blocks/index.js';

// Main application initialization
window.addEventListener("load", () => {
  console.log('Page loaded, initializing Blockly...');

  // Wait a bit more to ensure Blockly is fully loaded
  setTimeout(() => {
    console.log('Defining blocks...');
    defineAllBlocks();

    console.log('Defining block generators...');
    defineAllGeneratoesBlocks(Blockly); 
    
    console.log('Initializing workspace...');
    const workspace = initializeWorkspace();
    
    console.log('Initializing toolbox...');
    const toolbox = initializeToolbox(workspace);
    
    console.log('Setting up click outside handler...');
    setupClickOutsideHandler();
    
    // Listen for toolbox ready event to create circles
    window.addEventListener('toolboxReady', () => {
      console.log('Creating category circles...');
      createCategoryCircles();
    });

   
    workspace.addChangeListener(() => {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      console.clear();
      console.log("Generated HTML Code:\n", code);
    });
    
    console.log('WebCraft Blockly application initialized successfully!');
  }, 100);
});
