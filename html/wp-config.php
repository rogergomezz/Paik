<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'paik');

/** MySQL database username */
define( 'DB_USER', 'paik');

/** MySQL database password */
define( 'DB_PASSWORD', 'adminpaik');

/** MySQL hostname */
define( 'DB_HOST', 'database:3306');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '211ea7f3f9e1e07496c10ab1bcb85337f8863c40');
define( 'SECURE_AUTH_KEY',  'fd8ce0af46a7d4abe41dadb46ebeb7f0c1c73f62');
define( 'LOGGED_IN_KEY',    '09e18da8e621efeb5e6f4b4c0c2ab1f8130c45b4');
define( 'NONCE_KEY',        'cb6e5595bb024623ac187d49acafd283bf2c0c56');
define( 'AUTH_SALT',        '384b36328b0a9aad107073132c085f06eac2e236');
define( 'SECURE_AUTH_SALT', 'f2b6123cb53795fd90db97b7ca7ec87be4709fcc');
define( 'LOGGED_IN_SALT',   '5fe9d09483f3f7a2ef02a2e0403dca5211c43b93');
define( 'NONCE_SALT',       '6a10fd93fd00ee639b239eb1a8c899de99836571');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

// If we're behind a proxy server and using HTTPS, we need to alert WordPress of that fact
// see also http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
