// EXAMPLE VALUES, NOT DEFAULT

Weglot.initialize({
    // Only mandatory value is api_key:
    api_key: "wg_939cf9b7e93e3b4277ed24ca60ede6",
    
    // Next are optionals, often editable on your Weglot dashboard.
    // Options written here are concatenated with dashboard options when it's possible, otherwise these one have priority
    
    // Manually design switcher
    switchers: [
      {
        style: {
          full_name: true,
          with_name: true,
          is_dropdown: false,
          with_flags: true,
          flag_type: "circle",
          invert_flags: false
        },
        // Move switcher somewhere in the page
        location: {
          target: ".below-footer-wrapper",
          sibling: null
        }
      }
    ],
    
    
    // Automatically redirect visitor by its navigator's language
    auto_switch: true,
    // If auto switch is true, but you don't have visitor's language, redirect on this language code, otherwise original language
    auto_switch_fallback: "en",
    
    // Don't display default switcher, nothing else change, translation works. Useful with Auto-switch feature!
    hide_switcher: false,
    // Use front cache between pages, speed up your page loading!
    cache: true,
    
  });