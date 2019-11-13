<template>
	<section class="breakout-area">
		<div class="text">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 offset-lg-1 col spacer">
						<h3>{{ title }}</h3>
						<p>{{ text }}</p>
					</div>
				</div>
			</div>
		</div>
		<figure class="img-wrapper">
			<div class="bgd-img" style="background-image: url('http://placekitten.com/500/500');"></div>
		</figure>

	</section>
</template>

<script>
export default {
	name: "BreakoutArea",
	data() {
		return {
				title: "Breakout Area",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
				imgSrc: "",
				imgAlt: ""
		}
	}
}
</script>

<style lang="scss" scoped>
	@import './src/assets/sass/vue.scss';
	.breakout-area {
		.img-wrapper {
			> .bgd-img {
				width: 100%;
				min-height: 22rem;
				background-repeat: no-repeat;
				background-position: 50% 50%;
				background-size: cover;
			}
		}
		@include media-breakpoint-down(md) {
			padding-top: 4rem;
		}
		@include media-breakpoint-up(lg) {

		
			background-color: $primary;
			color: $secondary;
			display: block;
			position: relative;
			padding-top: 2rem;
			width: 100%;
			h3 {
				padding-bottom: 1rem;
				margin-bottom: 2rem;

				&::after {
					content: "";
					background-color: $grey;
					height: 1px;
					width: 4rem;
					display: block;
					margin-top: 2rem;
				}
			}
			.text {
				position: relative;
			}
			.img-wrapper {
				left: auto;
				right: 0;
				position: absolute;
				width: 40%;
				top: 0;
				height: 100%;
				margin-top: 0;
				margin-bottom: 0;
				overflow: hidden;
				padding: 2rem auto 0;
				> .bgd-img {
					position: absolute;
					top: 0;
					width: 100%;
					height: 100%;
					margin-top: 4rem;
					&::before {
						background-color: transparent;
						content: "";
						height: 100%;
						left: 0;
						position: absolute;
						top: 0;
						width: 100%;
					}
				}
			}
		}
	}
</style>