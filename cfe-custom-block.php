<?php
/**
 * Plugin Name:       Cfe Custom Block
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cfe-custom-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */

if ( ! class_exists( 'WC_Session' ) ) {
     include_once( WP_PLUGIN_DIR . '/woocommerce/includes/abstracts/abstract-wc-session.php' );
}

function create_block_cfe_custom_block_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_cfe_custom_block_block_init' );
add_action('init', function(){
    

    $ab = WC()->checkout->get_checkout_fields();
    $a = json_encode($ab);
    //var_dump($a);
    //echo "<script> var field = ".$a." </script>";
    //echo "<script>  console.log('".$ab."')</script>";
});