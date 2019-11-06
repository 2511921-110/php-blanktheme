<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title('｜',true,'right'); ?><?php bloginfo('name'); ?></title>
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

  <div class="container">
    <div class="row">
      <div class="col-lg-40 col-md-40 col-120 text-center">
        <p>test</p>
      </div>
    </div>
  </div>
