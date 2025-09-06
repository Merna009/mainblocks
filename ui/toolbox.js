// Function to initialize the workspace
export function initializeWorkspace() {
  console.log('Creating workspace...');
  
  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos',
    theme: Blockly.Themes.Zelos,
    trashcan: true,
    scrollbars: true
  });

  console.log('Workspace created, setting up toolbox...');
  
  // Close any open categories after injection
  setTimeout(() => {
    const toolbox = workspace.getToolbox();
    if (toolbox && toolbox.clearSelection) {
      toolbox.clearSelection();
    }
    
    // Close all categories by default
    const categories = toolbox.getToolboxItems();
    categories.forEach(cat => {
      if (typeof cat.setExpanded === "function") {
        cat.setExpanded(false);
      }
    });

    // Open first non-Style category
    const firstNonStyle = categories.find(cat => cat.getName() !== "Style");
    if (firstNonStyle && typeof firstNonStyle.setExpanded === "function") {
      firstNonStyle.setExpanded(true);
    }
    
    console.log('Toolbox setup complete!');
    
    // Create circles directly after toolbox setup
    createCategoryCircles();
  }, 100);

  return workspace;
}

// Function to initialize toolbox
export function initializeToolbox(workspace) {
  // This function can be expanded later for additional toolbox functionality
  return workspace.getToolbox();
}

// Function to create category circles
export function createCategoryCircles() {
  console.log('Creating category circles...');
  
  // Category colors and icons mapping
  const categoryData = {
    'Basics': { color: '#3b82f6', icon: 'fas fa-code' },
    'Layout': { color: '#10b981', icon: 'fas fa-th-large' }, 
    'Text': { color: '#f59e0b', icon: 'fas fa-font' },
    'Lists': { color: '#8b5cf6', icon: 'fas fa-list' },
    'Media': { color: '#ef4444', icon: 'fas fa-play' },
    'Forms': { color: '#06b6d4', icon: 'fas fa-wpforms' },
    'Tables': { color: '#84cc16', icon: 'fas fa-table' },
    'Style': { color: '#7c3aed', icon: 'fas fa-palette' },
    'Scripts': { color: '#dc2626', icon: 'fas fa-code' },
    'Events': { color: '#ea580c', icon: 'fas fa-bolt' },
    // Style subcategories
    'Selectors': { color: '#7c3aed', icon: 'fas fa-crosshairs' },
    'Links': { color: '#7c3aed', icon: 'fas fa-link' }, 
    'Effects': { color: '#7c3aed', icon: 'fas fa-magic' },
    'Box': { color: '#7c3aed', icon: 'fas fa-square' },
    'Border': { color: '#7c3aed', icon: 'fas fa-border-style' },
    'BG': { color: '#7c3aed', icon: 'fas fa-fill' },
    'Position': { color: '#7c3aed', icon: 'fas fa-arrows-alt' }
  };

  // Wait a bit for the toolbox to be fully rendered
  setTimeout(() => {
    const categories = document.querySelectorAll('.blocklyTreeRow');
    console.log(`Found ${categories.length} categories to process`);
    
    categories.forEach((category, index) => {
      const label = category.querySelector('.blocklyTreeLabel');
      if (!label) {
        console.log(`Category ${index}: No label found`);
        return;
      }
      
      const categoryName = label.textContent.trim();
      console.log(`Processing category: "${categoryName}"`);
      const data = categoryData[categoryName] || { color: '#6b7280', icon: 'fas fa-circle' };
      
      // Check if circle already exists
      if (category.querySelector('.scratch-circle')) {
        console.log(`Circle already exists for: ${categoryName}`);
        return;
      }
      
      // Create circle element
      const circle = document.createElement('div');
      circle.className = 'scratch-circle';
      circle.style.backgroundColor = data.color;
      circle.style.display = 'flex';
      circle.style.alignItems = 'center';
      circle.style.justifyContent = 'center';
      
      // Add icon to circle
      const icon = document.createElement('i');
      icon.className = data.icon;
      icon.style.color = 'white';
      icon.style.fontSize = '0.6rem';
      icon.style.textShadow = '0 1px 2px rgba(0,0,0,0.3)';
      circle.appendChild(icon);
      
      // Insert circle at the beginning of the category
      category.insertBefore(circle, category.firstChild);
      console.log(`Circle created for: ${categoryName}`);
      
      // Add click handler to the category
      category.addEventListener('click', function() {
        // Remove selected class from all circles
        document.querySelectorAll('.scratch-circle').forEach(c => {
          c.classList.remove('selected');
        });
        // Add selected class to clicked circle
        circle.classList.add('selected');
        
        // Update scrollbar colors based on active category
        const toolboxDiv = document.querySelector('.blocklyToolboxDiv');
        if (toolboxDiv) {
          toolboxDiv.setAttribute('data-active-category', categoryName);
        }
      });
    });
    
    console.log('Category circles created successfully!');
  }, 200);
}

// Function to setup click outside handler
export function setupClickOutsideHandler() {
  // This function can be expanded later for handling clicks outside the workspace
  console.log('Click outside handler setup complete');
}
