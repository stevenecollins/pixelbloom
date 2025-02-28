# CLAUDE.md - PixelBloom WordPress Project Guide

## Development Commands
- **Start server**: `cd /Users/steven/Local Sites/pixelbloom/app/public`
- **Database**: Access via Local by Flywheel interface
- **Debug**: Enable WP_DEBUG in wp-config.php
- **Install plugins**: From WordPress admin or with WP-CLI `wp plugin install [plugin] --activate`
- **Run tests**: Use WP-CLI `wp scaffold plugin-tests [plugin]` for plugin tests

## Code Style Guidelines
- **PHP**: Follow WordPress Coding Standards (WPCS)
- **Naming**: snake_case for functions, CamelCase for classes
- **Indentation**: Tabs, not spaces
- **Comments**: DocBlocks for functions and classes
- **Hooks**: Prefix with `pixelbloom_`
- **File structure**: Follow WordPress template hierarchy
- **Security**: Sanitize inputs, escape outputs, and validate data
- **PHP Version**: Target WordPress minimum PHP version
- **Translation**: Make all user-facing strings translatable
- **Error handling**: Use WP_Error for WordPress-specific errors