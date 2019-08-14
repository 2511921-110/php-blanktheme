<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title('｜',true,'right'); ?><?php bloginfo('name'); ?></title>
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/style.css" />
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/style.css" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<header id="header">
  	<?php
      $args = array( 'pagename' => 'home/header' );
      $the_query = new WP_Query( $args );
        while ( $the_query->have_posts() ) : $the_query->the_post();
      $post_id = get_the_ID();
      the_content();
      endwhile;
      wp_reset_postdata();
    ?>
		<div class="navwrap">
			<span class="spmenu_btn"><span></span></span>
			<nav class="globalNav">
				<?php wp_nav_menu( array( 'menu' => 'globalNav' ) ); ?>
			</nav>
		</div>
	</header><!-- /header -->