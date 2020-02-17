<?php
/**
 * Template Name: ブログ一覧ページ */
?>
<?php get_header(); ?>

<main>
	<article>
		<?php
			$paged = (int) get_query_var('paged');
			$args = array(
				'posts_per_page' => 10,
				'paged' => $paged,
				'orderby' => 'post_date',
				'order' => 'DESC',
				'post_type' => 'post',
				'post_status' => 'publish'
			);
			$the_query = new WP_Query($args);
			if ( $the_query->have_posts() ) :
		?>

			<?php	while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

				<section>
					<div class="post">
						<a href="<?php the_permalink(); ?>">
							<?php the_post_thumbnail('medium'); ?>
						</a>

						<h2 class="post__title">
							<a href="<?php the_permalink(); ?>">
								<?php
									// if(mb_strlen($post->post_title, 'UTF-8')>5){
									// 	$title= mb_substr($post->post_title, 0, 5, 'UTF-8');
									// 	echo $title.'……';
									// }else{
									// 	echo $post->post_title;
									// }
									the_title();
								?>
							</a>
						</h2>

						<time class="post__time" datetime="<?php the_time('Y-m-d'); ?>T<?php the_time('H:i:sP'); ?>"><?php the_time('Y.m.d'); ?></time>

						<div class="post__content">
							<?php
								// if(mb_strlen($post->post_content, 'UTF-8')>100){
								// 	$content= mb_substr($post->post_content, 0, 100, 'UTF-8');
								// 	echo $content.'……';
								// }else{
								// 	echo $post->post_content;
								// }
							?>
							<?php the_content(); ?>
						</div>
					</div>
				</section>

			<?php endwhile; ?>

			<?php wp_reset_postdata(); ?>

			<?php
				if ($the_query->max_num_pages > 1) {
					echo paginate_links(array(
						'base' => get_pagenum_link(1) . '%_%',
						'format' => 'page/%#%/',
						'current' => max(1, $paged),
						'total' => $the_query->max_num_pages
					));
				}
			?>

		<?php endif; ?>

	</article>
</main>

<?php //get_sidebar(); ?>

<?php get_footer(); ?>