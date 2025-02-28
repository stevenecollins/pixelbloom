# CLAUDE.md - PixelBloom WordPress Project Guide

## Development Commands
- **Local server**: Access via Local by Flywheel UI at http://pixelbloom.local
- **Database**: `wp db export backup.sql` or access via Local's UI
- **Debug**: Set `define('WP_DEBUG', true);` in wp-config.php
- **WP-CLI**: `wp plugin install|activate|deactivate|update [plugin-name]`
- **Run tests**: `wp scaffold plugin-tests [plugin]` then `cd wp-content/plugins/[plugin] && ./bin/phpunit`
- **Theme dev**: `cd wp-content/themes/[theme]` (if using build tools like npm/gulp)
- **Lint PHP**: `wp phpcbf --standard=WordPress [file]` (requires phpcs installed)

## Code Style Guidelines
- **PHP**: Follow [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/)
- **Naming**: snake_case for functions/variables, PascalCase for classes
- **Prefix**: Use `pb_` or `pixelbloom_` prefix for functions, hooks, and globals
- **Indentation**: Tabs, not spaces (WordPress standard)
- **Theme**: Follow [WP template hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/)
- **Security**: Always sanitize inputs (`sanitize_*`), escape outputs (`esc_*`), validate nonces
- **Translation**: Make strings translatable with `__()`, `_e()`, `esc_html_e()` etc.
- **Versioning**: Include version numbers in enqueued assets for cache busting
- **JavaScript**: Use jQuery or vanilla JS, scope properly, comment complex logic
- **Error handling**: Use WP_Error objects; log errors with error_log() when appropriate