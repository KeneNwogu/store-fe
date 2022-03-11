<template>
	<div class="cart" style="margin-top: 83.5px">
		<div class="container">
			<div class="row">
				<div class="col-lg-9">
					<table class="table table-cart table-mobile">
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
                            <!-- for item in cart -->
							<tr v-for="item in cart" :key="item._id">
								<td class="product-col">
									<div class="product">
										<figure class="product-media">
											<router-link :to="{ name: 'ProductDetails', params: { id: item._id }}">
												<img
													:src="item.images[0]"
													alt="Product image"
												/>
											</router-link>
										</figure>

										<h3 class="product-title">
											<router-link :to="{ name: 'ProductDetails', params: { id: item._id }}"
												>{{ item.name }}</router-link
											>
										</h3>
										<!-- End .product-title -->
									</div>
									<!-- End .product -->
								</td>
								<td class="price-col">₦{{ formatCurrency(item.price) }}</td>
								<td class="quantity-col">
									<div class="cart-product-quantity">
										<input
											type="number"
											class="form-control"
											value="1"
											min="1"
											max="10"
											step="1"
											data-decimals="0"
											required=""
											style="display: none"
										/>
										<div class="input-group input-spinner">
											<div class="input-group-prepend">
												<button
													style="min-width: 26px"
													class="
														btn
														btn-decrement
														btn-spinner
													"
													type="button"
                                                    @click="removeFromCart(item)"
												>
													<i class="icon-minus"></i>
												</button>
											</div>
											<input
												type="text"
												style="text-align: center"
												class="form-control"
												required=""
												:placeholder="item.quantity"
											/>
											<div class="input-group-append">
												<button
													style="min-width: 26px"
													class="
														btn
														btn-increment
														btn-spinner
													"
													type="button"
                                                    @click="addToCart(item)"
												>
													<i class="icon-plus"></i>
												</button>
											</div>
										</div>
									</div>
									<!-- End .cart-product-quantity -->
								</td>
								<td class="total-col">₦{{ formatCurrency(item.price * item.quantity) }}</td>
								<td class="remove-col">
									<button class="btn-remove">
										<i class="icon-close"></i>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- End .table table-wishlist -->

					<div class="cart-bottom">
						<div class="cart-discount">
							<form action="#">
								<div class="input-group">
									<input
										type="text"
										class="form-control"
										required=""
										placeholder="coupon code"
									/>
									<div class="input-group-append">
										<button
											class="btn btn-outline-primary-2"
											type="submit"
										>
											<i
												class="icon-long-arrow-right"
											></i>
										</button>
									</div>
									<!-- .End .input-group-append -->
								</div>
								<!-- End .input-group -->
							</form>
						</div>
						<!-- End .cart-discount -->

						<a href="#" class="btn btn-outline-dark-2"
							><span>UPDATE CART</span><i class="icon-refresh"></i
						></a>
					</div>
					<!-- End .cart-bottom -->
				</div>
				<!-- End .col-lg-9 -->
				<aside class="col-lg-3">
					<div class="summary summary-cart">
						<h3 class="summary-title">Cart Total</h3>
						<!-- End .summary-title -->

						<table class="table table-summary">
							<tbody>
								<tr class="summary-subtotal">
									<td>Subtotal:</td>
									<td>₦{{ formatCurrency(cartTotalPrice) }}</td>
								</tr>
								<!-- End .summary-subtotal -->
								<tr class="summary-shipping">
									<td>Shipping:</td>
									<td>&nbsp;</td>
								</tr>

								<tr class="summary-shipping-row">
									<td>
										<div
											class="custom-control custom-radio"
										>
											<input
												type="radio"
												id="free-shipping"
												name="shipping"
												class="custom-control-input"
                                                value="0"
                                                v-model="shippingFee"
											/>
											<label
												class="custom-control-label"
												for="free-shipping"
												>Free Shipping</label
											>
										</div>
										<!-- End .custom-control -->
									</td>
									<td>₦0.00</td>
								</tr>
								<!-- End .summary-shipping-row -->

								<tr class="summary-shipping-row">
									<td>
										<div
											class="custom-control custom-radio"
										>
											<input
												type="radio"
												id="standart-shipping"
												name="shipping"
												class="custom-control-input"
                                                value="1000"
                                                v-model="shippingFee"
											/>
											<label
												class="custom-control-label"
												for="standart-shipping"
												>Standart:</label
											>
										</div>
										<!-- End .custom-control -->
									</td>
									<td>₦1,000.00</td>
								</tr>
								<!-- End .summary-shipping-row -->

								<tr class="summary-shipping-row">
									<td>
										<div
											class="custom-control custom-radio"
										>
											<input
												type="radio"
												id="express-shipping"
												name="shipping"
												class="custom-control-input"
                                                value="2000"
                                                v-model="shippingFee"
											/>
											<label
												class="custom-control-label"
												for="express-shipping"
												>Express:</label
											>
										</div>
										<!-- End .custom-control -->
									</td>
									<td>₦2,000.00</td>
								</tr>
								<!-- End .summary-shipping-row -->

								<tr class="summary-shipping-estimate">
									<td>
										Estimate for Your Country<br />
										<a href="dashboard.html"
											>Change address</a
										>
									</td>
									<td>&nbsp;</td>
								</tr>
								<!-- End .summary-shipping-estimate -->

								<tr class="summary-total">
									<td>Total:</td>
									<td>₦ {{ formatCurrency(cartTotalPrice + Number(shippingFee)) }}</td>
								</tr>
								<!-- End .summary-total -->
							</tbody>
						</table>
						<!-- End .table table-summary -->

						<a
							href="checkout.html"
							class="
								btn btn-outline-primary-2 btn-order btn-block
							"
							>PROCEED TO CHECKOUT</a
						>
					</div>
					<!-- End .summary -->

					<a
						href="category.html"
						class="btn btn-outline-dark-2 btn-block mb-3"
						><span>CONTINUE SHOPPING</span
						><i class="icon-refresh"></i
					></a>
				</aside>
				<!-- End .col-lg-3 -->
			</div>
			<!-- End .row -->
		</div>
		<!-- End .container -->
	</div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
	export default {
        data(){
            return {
                shippingFee: 0
            }
        }, 
        computed: {
            ...mapState([
                'cart'
            ]),
            ...mapGetters([
                'cartTotalPrice'
            ])
        },
        methods: {
            ...mapActions([
                'addToCart',
                'removeFromCart'
            ]),

            formatCurrency: function (price){
                price = Math.round(price)
                return price.toLocaleString();
            }
        }
    };
</script>