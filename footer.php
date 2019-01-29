</div>
	<footer>
		<?php
			$args = array( 'pagename' => 'home/footer' );
			$the_query = new WP_Query( $args );
			while ( $the_query->have_posts() ) : $the_query->the_post();
			$post_id = get_the_ID();
		?>
		<?php the_content(); ?>
		<div class="sp_btn">
			<?php $post_id = get_the_ID(); $spbtn = get_post_meta($post_id,'sp_btn',true); if($spbtn){ ?><div class="laft_phono"><?php echo $spbtn; ?></div><?php } ?>
		</div>
		<?php
			endwhile;
			wp_reset_postdata();
		?>
		<?php if(!is_mobile()): ?>
		<div class="cm_totop"><a href="#header"><span> ↑ </span>Page top</a></div>
		<?php endif; ?>
		<div class="footnav">
			<?php wp_nav_menu( array( 'menu' => 'globalNav' ) ); ?>
		</div>
<!-- <a href="<?php echo home_url(); ?>/contact/" class="fixed_btn"><img src="<?php echo get_template_directory_uri(); ?>/assets/fixed_btn.png" alt="" /></a> -->
	</footer>
	<script type="text/javascript" charset="utf-8">
jQuery(document).ready(function($){
			$(function(){
			    $(".spmenu_btn").on("click", function() {
			        $(this).next().slideToggle();
			        $(this).toggleClass("active");
			    });
			});
var pagetop = $('.cm_totop');
	$(window).scroll(function(){
		if($(this).scrollTop() > 200) {
			pagetop.fadeIn('slow');
		} else {
			pagetop.fadeOut('slow');
		}
	});

	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr('href');
		var target = $(href == '#' || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('html, body').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
				});
	</script>
	<?php wp_footer(); ?>
</body>
</html>