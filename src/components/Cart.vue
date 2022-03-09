<template>
	<div class="dropdown cart-dropdown">
		<a
			href="#"
			class="dropdown-toggle"
			role="button"
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
			data-display="static"
			><i class="icon-shopping-cart"></i
			><span class="cart-count" v-if="cart.length > 0">{{ this.cart.length }}</span></a
		>
		<div class="dropdown-menu dropdown-menu-right">
			<div class="dropdown-cart-products" v-if="cart.length > 0">
				<!-- for each product in cart -->
				<div class="product" v-for="item in cart" :key="item.id">
					<div class="product-cart-details">
						<h4 class="product-title">
							<a href="product.html"
								>{{ item.name }}</a
							>
						</h4>
						<span class="cart-product-info"
							><span class="cart-product-qty">{{ item.quantity }}</span> x ₦{{ item.price }}
						</span>
					</div>
					<!-- End .product-cart-details -->
					<figure class="product-image-container">
						<a href="product.html" class="product-image"
							><img
								:src="item.images[0]"
								alt="product"
						/></a>
					</figure>
					<a @click="removeFromCart(item)" class="btn-remove" title="Remove Product">
						<i class="icon-close"></i>
					</a>
				</div>
				<!-- End .product -->
			</div>
			<div class="dropdown-cart-products" v-else style="padding: 20px; text-align: center">
				<p>No items in cart</p>
			</div>
			<!-- End .cart-product -->
			<div class="dropdown-cart-total" v-if="cart.length > 0">
				<!-- get total price (getters) -->
				<span>Total</span><span class="cart-total-price">₦{{ formatCurrency(cartTotalPrice) }}</span>
			</div>
			<!-- End .dropdown-cart-total -->
			<div class="dropdown-cart-action">
				<router-link to="/cart" class="btn btn-primary">View Cart</router-link
				><a href="checkout.html" class="btn btn-outline-primary-2"
					><span>Checkout</span><i class="icon-long-arrow-right"></i
				></a>
			</div>
			<!-- End .dropdown-cart-total -->
		</div>
		<!-- End .dropdown-menu -->
	</div>
</template>


<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
	data(){
		return {

		}
	}, 
	methods: {
		...mapActions([
			'removeFromCart'
		]),
		formatCurrency: function (price){
			return price.toLocaleString();
		}
	},
	computed: {
		...mapState([
			'cart'
		]),
		...mapGetters([
			'cartTotalPrice'
		])
	}
}
</script>