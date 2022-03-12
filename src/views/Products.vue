<template>
	<div class="page-content" style="margin-top: 83.5px">
		<div class="container">
			<div class="row">
				<div class="col-lg-9">
					<!-- toolbox -->
					<div class="toolbox">
						<div class="toolbox-left">
							<div class="toolbox-info">
								Showing
								<span>{{ results }} of {{ count }}</span>
								Products
							</div>
							<!-- End .toolbox-info -->
						</div>
						<!-- End .toolbox-left -->

						<div class="toolbox-right">
							<div class="toolbox-sort">
								<label for="sortby">Sort by:</label>
								<div class="select-custom">
									<select
										name="sortby"
										id="sortby"
										class="form-control"
									>
										<option
											value="popularity"
											selected="selected"
										>
											Most Popular
										</option>
										<option value="rating">
											Most Rated
										</option>
										<option value="date">Date</option>
									</select>
								</div>
							</div>
							<!-- End .toolbox-sort -->
							<div class="toolbox-layout">
								<a href="category-list.html" class="btn-layout">
									<svg width="16" height="10">
										<rect
											x="0"
											y="0"
											width="4"
											height="4"
										></rect>
										<rect
											x="6"
											y="0"
											width="10"
											height="4"
										></rect>
										<rect
											x="0"
											y="6"
											width="4"
											height="4"
										></rect>
										<rect
											x="6"
											y="6"
											width="10"
											height="4"
										></rect>
									</svg>
								</a>

								<a
									href="category-2cols.html"
									class="btn-layout"
								>
									<svg width="10" height="10">
										<rect
											x="0"
											y="0"
											width="4"
											height="4"
										></rect>
										<rect
											x="6"
											y="0"
											width="4"
											height="4"
										></rect>
										<rect
											x="0"
											y="6"
											width="4"
											height="4"
										></rect>
										<rect
											x="6"
											y="6"
											width="4"
											height="4"
										></rect>
									</svg>
								</a>

								<a
									href="category.html"
									class="btn-layout active"
								>
									<svg width="16" height="10">
										<rect
											x="0"
											y="0"
											width="4"
											height="4"
										></rect>
										<rect
											x="6"
											y="0"
											width="4"
											height="4"
										></rect>
										<rect
											x="12"
											y="0"
											width="4"
											height="4"
										></rect>
										<rect
											x="0"
											y="6"
											width="4"
											height="4"
										></rect>
										<rect
											x="6"
											y="6"
											width="4"
											height="4"
										></rect>
										<rect
											x="12"
											y="6"
											width="4"
											height="4"
										></rect>
									</svg>
								</a>

								<a
									href="category-4cols.html"
									class="btn-layout"
								>
									<svg width="22" height="10">
										<rect
											x="0"
											y="0"
											width="4"
											height="4"
										></rect>
										<rect
											x="6"
											y="0"
											width="4"
											height="4"
										></rect>
										<rect
											x="12"
											y="0"
											width="4"
											height="4"
										></rect>
										<rect
											x="18"
											y="0"
											width="4"
											height="4"
										></rect>
										<rect
											x="0"
											y="6"
											width="4"
											height="4"
										></rect>
										<rect
											x="6"
											y="6"
											width="4"
											height="4"
										></rect>
										<rect
											x="12"
											y="6"
											width="4"
											height="4"
										></rect>
										<rect
											x="18"
											y="6"
											width="4"
											height="4"
										></rect>
									</svg>
								</a>
							</div>
							<!-- End .toolbox-layout -->
						</div>
						<!-- End .toolbox-right -->
					</div>
					<!-- End .toolbox -->

					<div class="products mb-3" v-if="products">
						<div class="row justify-content-center">
							<!-- for each product from api -->
							<div
								v-for="product in products"
								class="col-6 col-md-4 col-lg-4"
								:key="product._id"
							>
								<div class="product product-7 text-center">
									<figure class="product-media">
										<span class="product-label label-new"
											>New</span
										>
										<router-link
											:to="{
												name: 'ProductDetails',
												params: { id: product._id },
											}"
										>
											<img
												:src="product.images[0]"
												alt="Product image"
												class="product-image"
											/>
										</router-link>

										<div class="product-action-vertical">
											<a
												href="#"
												class="
													btn-product-icon
													btn-wishlist
													btn-expandable
												"
												><span>add to wishlist</span></a
											>
											<a
												href="popup/quickView.html"
												class="
													btn-product-icon
													btn-quickview
												"
												title="Quick view"
												><span>Quick view</span></a
											>
											<a
												href="#"
												class="
													btn-product-icon btn-compare
												"
												title="Compare"
												><span>Compare</span></a
											>
										</div>
										<!-- End .product-action-vertical -->

										<div class="product-action">
											<a
												href="#"
												class="btn-product btn-cart"
												@click="this.addToCart(product)"
												><span>add to cart</span></a
											>
										</div>
										<!-- End .product-action -->
									</figure>
									<!-- End .product-media -->

									<div class="product-body">
										<div class="product-cat">
											<a href="#">{{ product.gender }}</a>
										</div>
										<!-- End .product-cat -->
										<h3 class="product-title">
											<router-link
												:to="{
													name: 'ProductDetails',
													params: { id: product._id },
												}"
												>{{ product.name }}</router-link
											>
										</h3>
										<!-- End .product-title -->
										<div class="product-price">
											₦{{
												this.formatCurrency(
													product.price
												)
											}}
										</div>
										<!-- End .product-price -->
										<!-- <div class="ratings-container"> -->
										<!-- <div class="ratings">
												<div
													class="ratings-val"
													style="width: 20%"
												></div>
												End .ratings-val
											</div> -->
										<!-- End .ratings -->
										<!-- <span class="ratings-text"
												>( 2 Reviews )</span
											> -->
										<!-- </div> -->
										<!-- End .rating-container -->

										<div
											class="
												product-nav product-nav-thumbs
											"
										>
											<a href="#" class="active">
												<img
													:src="product.images[0]"
													alt="product desc"
													style="width: 100%; height: 100%"
												/>
											</a>
											<a href="#">
												<img
													:src="product.images[1]"
													alt="product desc"
													style="width: 100%; height: 100%"
												/>
											</a>

											<a href="#">
												<img
													:src="product.images[2]"
													alt="product desc"
													style="width: 100%; height: 100%"
												/>
											</a>
										</div>
										<!-- End .product-nav -->
									</div>
									<!-- End .product-body -->
								</div>
								<!-- End .product -->
							</div>
							<!-- End .col-sm-6 col-lg-4 -->
							<!-- end for -->
						</div>
						<!-- End .row -->
					</div>

					<div v-else class="products mb-3">
						<div class="lds-roller">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
					<!-- End .products -->

					<!-- Implement pagination here -->
					<!-- Pagination nav -->
					<nav aria-label="Page navigation">
						<ul class="pagination justify-content-center">
							<li
								:class="
									previous
										? 'page-item'
										: 'page-item disabled'
								"
							>
								<a
									class="page-link page-link-prev"
									href="#"
									aria-label="Previous"
									tabindex="-1"
									:aria-disabled="previous ? true : false"
									@click="fetchProductPage(previous)"
								>
									<span aria-hidden="true"
										><i
											class="icon-long-arrow-left"
										></i></span
									>Prev
								</a>
							</li>

							<li
								:class="
									next ? 'page-item' : 'page-item disabled'
								"
							>
								<a
									class="page-link page-link-next"
									href="#"
									aria-label="Next"
									:aria-disabled="next ? true : false"
									@click="fetchProductPage(next)"
								>
									Next
									<span aria-hidden="true"
										><i class="icon-long-arrow-right"></i
									></span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<!-- End .col-lg-9 -->

				<aside class="col-lg-3 order-lg-first">
					<div class="sidebar sidebar-shop">
						<div class="widget widget-clean">
							<label>Filters:</label>
							<a href="#" class="sidebar-filter-clear"
								>Clean All</a
							>
						</div>
						<!-- End .widget widget-clean -->

						<div class="widget widget-collapsible">
							<h3 class="widget-title">
								<a
									data-toggle="collapse"
									href="#widget-1"
									role="button"
									aria-expanded="true"
									aria-controls="widget-1"
								>
									Category
								</a>
							</h3>
							<!-- End .widget-title -->

							<div class="collapse show" id="widget-1">
								<div class="widget-body">
									<div
										class="filter-items filter-items-count"
									>
										<div
											class="filter-item"
											v-for="keyword in keywords"
											:key="keyword._id"
										>
											<div
												class="
													custom-control
													custom-checkbox
												"
											>
												<input
													type="checkbox"
													class="custom-control-input"
													:value="keyword.keyword"
													:id="keyword.keyword"
													v-model="
														keyword_search_params
													"
												/>
												<label
													class="custom-control-label"
													:for="keyword.keyword"
													>{{
														keyword.keyword
													}}</label
												>
											</div>
											<!-- End .custom-checkbox -->
											<span class="item-count">{{
												keyword.count
											}}</span>
										</div>
										<!-- End .filter-item -->
									</div>
									<!-- End .filter-items -->
								</div>
								<!-- End .widget-body -->
							</div>
							<!-- End .collapse -->
						</div>
						<!-- End .widget -->

						<div class="widget widget-collapsible">
							<h3 class="widget-title">
								<a
									data-toggle="collapse"
									href="#widget-4"
									role="button"
									aria-expanded="true"
									aria-controls="widget-4"
								>
									Brand
								</a>
							</h3>
							<!-- End .widget-title -->

							<div class="collapse show" id="widget-4">
								<div class="widget-body">
									<div class="filter-items">
										<div
											class="filter-item"
											v-for="(brand, index) in brands"
											:key="brand._id"
										>
											<div
												v-if="index < 7"
												class="
													custom-control custom-radio
												"
											>
												<input
													type="radio"
													class="custom-control-input"
													name="brand"
													:value="brand.brand"
													:id="brand.brand"
													v-model="
														brand_search_params
													"
												/>
												<label
													class="custom-control-label"
													:for="brand.brand"
													>{{ brand.brand }}</label
												>
											</div>
											<!-- End .custom-checkbox -->
										</div>
										<!-- End .filter-item -->
									</div>
									<!-- End .filter-items -->
								</div>
								<!-- End .widget-body -->
							</div>
							<!-- End .collapse -->
						</div>
						<!-- End .widget -->

						<div class="widget widget-collapsible">
							<h3 class="widget-title">
								<a
									data-toggle="collapse"
									href="#widget-5"
									role="button"
									aria-expanded="true"
									aria-controls="widget-5"
								>
									Price
								</a>
							</h3>
							<!-- End .widget-title -->

							<div class="collapse show" id="widget-5">
								<div class="widget-body">
									<div class="filter-price">
										<div class="filter-price-text">
											Price Range:
											<span id="filter-price-range"
												>$0 - $750</span
											>
										</div>
										<!-- End .filter-price-text -->

										<div
											id="price-slider"
											class="
												noUi-target
												noUi-ltr
												noUi-horizontal
											"
										>
											<div class="noUi-base">
												<div class="noUi-connects">
													<div
														class="noUi-connect"
														style="
															transform: translate(
																	0%,
																	0px
																)
																scale(0.75, 1);
														"
													></div>
												</div>
												<div
													class="noUi-origin"
													style="
														transform: translate(
															-100%,
															0px
														);
														z-index: 5;
													"
												>
													<div
														class="
															noUi-handle
															noUi-handle-lower
														"
														data-handle="0"
														tabindex="0"
														role="slider"
														aria-orientation="horizontal"
														aria-valuemin="0.0"
														aria-valuemax="550.0"
														aria-valuenow="0.0"
														aria-valuetext="$0"
													>
														<div
															class="
																noUi-touch-area
															"
														></div>
														<div
															class="noUi-tooltip"
														>
															$0
														</div>
													</div>
												</div>
												<div
													class="noUi-origin"
													style="
														transform: translate(
															-25%,
															0px
														);
														z-index: 4;
													"
												>
													<div
														class="
															noUi-handle
															noUi-handle-upper
														"
														data-handle="1"
														tabindex="0"
														role="slider"
														aria-orientation="horizontal"
														aria-valuemin="200.0"
														aria-valuemax="1000.0"
														aria-valuenow="750.0"
														aria-valuetext="$750"
													>
														<div
															class="
																noUi-touch-area
															"
														></div>
														<div
															class="noUi-tooltip"
														>
															$750
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- End #price-slider -->
									</div>
									<!-- End .filter-price -->
								</div>
								<!-- End .widget-body -->
							</div>
							<!-- End .collapse -->
						</div>
						<!-- End .widget -->
					</div>
					<!-- End .sidebar sidebar-shop -->
				</aside>
				<!-- End .col-lg-3 -->
			</div>
			<!-- End .row -->
		</div>
		<!-- End .container -->
	</div>
</template>

<style>
.header {
	margin-top: 0;
	background-color: black;
	margin-bottom: 50px;
}

.sticky-wrapper {
	/* position: absolute; */
	margin-top: -10px;
}
</style>

<script>
	import '../assets/css/preloader.css'
	import { mapActions, mapState } from "vuex";
	export default {
		name: "Products",
		data() {
			return {
				products: [],
				previous: "",
				next: "",
				count: 0,
				keyword_search_params: [],
				brand_search_params: [],
			};
		},
		beforeMount: function () {
			// fetch products from db (page 1)
			fetch("http://thegorana.herokuapp.com/products")
				.then((res) => res.json())
				.then((data) => {
					this.products = data.results;
					this.previous = data.previous;
					this.next = data.next;
					this.count = data.count;
					this.results = data.results.length;
				});
			fetch("http://thegorana.herokuapp.com/products/categories")
				.then((res) => res.json())
				.then((data) => {
					this.brands = data.filter((element) => element.type == "brand");
					this.keywords = data.filter(
						(element) => element.type == "keyword"
					);
				});
		},
		methods: {
			fetchProductPage: function (page) {
				fetch(page)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						this.products = data.results;
						this.previous = data.previous;
						this.next = data.next;
					});
			},
			filterProducts: async function (filter_link) {
				let results;
				await fetch(filter_link)
					.then((res) => res.json())
					.then((data) => {
						results = data;
					});
				return results
			},
			getFilterQueries: function (keywords, brand) {
				let parameters = [];
				if (keywords.length > 0) {
					for (let keyword of keywords) {
						if (brand != "") {
							let query_param = `?search=${keyword}&brand=${brand}`;
							parameters.push(query_param);
						} else {
							let query_param = `?search=${keyword}`;
							parameters.push(query_param);
						}
					}
				}
				else{
					let query_param = `?brand=${brand}`;
					parameters.push(query_param);
				}
				return parameters;
			},
			...mapActions(["addToCart", "removeFromCart"]),
			formatCurrency: function (price) {
				return price.toLocaleString();
			},
		},
		computed: {
			...mapState(["cart"]),
		},
		watch: {
			keyword_search_params: async function () {
				let queries = this.getFilterQueries(
					this.keyword_search_params,
					this.brand_search_params
				);
				console.log(queries);
				let results = [];
				let count = 0;
				let data;
				if (this.keyword_search_params.length > 0) {
					for (let query of queries) {
						data = await this.filterProducts(
							`http://thegorana.herokuapp.com/products${query}`
						);

						if (data) {
							console.log('data', data);
							count += data.count;
							results.push(...data.results);
							console.log('concat', results, data.results);
						}
						console.log(data)
					}
					if (data) {
						console.log("results", data);
						this.products = results;
						this.previous = data.previous;
						this.next = data.next;
						this.count = count;
						this.results = results.length;
					}
				}
			},
			brand_search_params: async function () {
				let queries = this.getFilterQueries(
					this.keyword_search_params,
					this.brand_search_params
				);
				console.log(queries)
				let results = [];
				let count = 0;
				let data;
				if (this.brand_search_params.length > 0) {
					for (let query of queries) {
						data = await this.filterProducts(
							`http://thegorana.herokuapp.com/products${query}`
						);

						if (data) {
							console.log('data', data);
							count += data.count;
							results.push(...data.results);
							console.log('concat', results, data.results);
						}
						console.log(data)
					}
					if (data) {
						console.log("results", data);
						this.products = results;
						this.previous = data.previous;
						this.next = data.next;
						this.count = count;
						this.results = results.length;
					}
				}
			},
		},
	};
</script>