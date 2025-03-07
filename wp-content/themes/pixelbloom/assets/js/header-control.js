(function() {
  wp.domReady(function() {
    // Wait for the editor to be fully loaded
    setTimeout(function() {
      // Make sure all required components are loaded
      const { createHigherOrderComponent } = wp.compose;
      const { Fragment } = wp.element;
      const { InspectorControls } = wp.blockEditor;
      const { PanelBody, ToggleControl } = wp.components;
      const { addFilter } = wp.hooks;
      
      // Add toggle control to sidebar
      const withStickyHeaderControl = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
          // Check if it's a group block with header tagName
          if (props.name !== 'core/group' || props.attributes.tagName !== 'header') {
            return <BlockEdit {...props} />;
          }
          
          const { attributes, setAttributes } = props;
          const { className = '' } = attributes;
          
          // Check if sticky-header class is present
          const isStickyHeader = className.includes('sticky-header');
          
          return (
            <Fragment>
              <BlockEdit {...props} />
              <InspectorControls>
                <PanelBody
                  title="Header Options"
                  initialOpen={true}
                >
                  <ToggleControl
                    label="Sticky Header"
                    help={isStickyHeader ? 'Header sticks to the top when scrolling' : 'Header scrolls with the page'}
                    checked={isStickyHeader}
                    onChange={(value) => {
                      // Get current classes as array
                      const classesArray = className.split(' ').filter(cls => cls !== 'sticky-header');
                      
                      // Add sticky-header class if toggled on
                      if (value) {
                        classesArray.push('sticky-header');
                      }
                      
                      // Set the updated className
                      setAttributes({ className: classesArray.join(' ') });
                      
                      console.log('Sticky header toggled:', value);
                    }}
                  />
                </PanelBody>
              </InspectorControls>
            </Fragment>
          );
        };
      }, 'withStickyHeaderControl');
      
      // Add the filter
      addFilter(
        'editor.BlockEdit',
        'pixelbloom/sticky-header-control',
        withStickyHeaderControl
      );
      
      console.log('PixelBloom sticky header control loaded');
    }, 500); // Small delay to ensure editor is ready
  });
})();