<?php get_header(); ?>
<div class="blog_title">
<div class="ta-c"><h2 class="title01 line-h5">ブログ</h2></div>
</div>

<div class="body_wrap">
<div class="content_wrap">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<div class="post">
		<a href="<?php the_permalink(); ?>"><figure><?php the_post_thumbnail('medium'); ?></figure></a>
<div class="wrap">
		<h1 class="title"><a href="<?php the_permalink(); ?>">
		<?php
			//if(mb_strlen($post->post_title, 'UTF-8')>5){
			//	$title= mb_substr($post->post_title, 0, 5, 'UTF-8');
			//	echo $title.'……';
			//}else{
			//	echo $post->post_title;
			//}
		the_title(  );
		?>
		</a></h1>
		<p class="data"><?php echo get_the_date('Y-m-d'); ?></p>
</div>
		<div class="txt">
			<?php
				if(mb_strlen($post->post_content, 'UTF-8')>100){
					$content= mb_substr($post->post_content, 0, 100, 'UTF-8');
					echo $content.'……';
				}else{
					echo $post->post_content;
				}
			?>
		</div>
		<?php //the_content(); ?>
	</div>
<?php endwhile; else : ?>
                <p>記事がありません</p>
<?php endif; ?>

<?php
if ($post->max_num_pages > 1) {
	echo paginate_links(array(
		'base' => get_pagenum_link(1) . '%_%',
		'format' => 'page/%#%/',
		'current' => max(1, $paged),
		'total' => $the_query->max_num_pages
	));
}
?>

<?php wp_reset_postdata(); ?>

	</div>
<?php //get_sidebar(); ?>
</div>
<?php get_footer(); ?>