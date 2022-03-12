<template>
    <div class="container" style="margin-top: 83.5px">
        <div class="product-details-top">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-gallery product-gallery-vertical">
                        <div class="row">
                            <figure class="product-main-image">
                                <img id="product-zoom" :src="productData.images[0]" :data-zoom-image="productData.images[0]"  alt="product image">

                                <a href="#" id="btn-product-gallery" class="btn-product-gallery">
                                    <i class="icon-arrows"></i>
                                </a>
                            </figure><!-- End .product-main-image -->

                            <div id="product-zoom-gallery" class="product-image-gallery">
                                <a class="product-gallery-item" href="#" :data-zoom-image="image" v-for="(image, index) in productData.images" :key="index">
                                    <img :src="image" alt="product side" v-if="index < 4">
                                </a>
                            </div><!-- End .product-image-gallery -->
                        </div><!-- End .row -->
                    </div><!-- End .product-gallery -->
                </div><!-- End .col-md-6 -->

                <div class="col-md-6">
                    <div class="product-details">
                        <h1 class="product-title">{{ productData.name }}</h1><!-- End .product-title -->

                        <div class="ratings-container">
                            <div class="ratings">
                                <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                            </div><!-- End .ratings -->
                            <a class="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                        </div><!-- End .rating-container -->

                        <div class="product-price">
                            ${{ productData.price }}
                        </div><!-- End .product-price -->

                        <div class="product-content">
                            <p>{{ productData.description }} </p>
                        </div><!-- End .product-content -->

                        <div class="details-filter-row details-row-size">
                            <label>Color:</label>

                            <div class="product-nav product-nav-thumbs">
                                <a href="#" class="active">
                                    <img :src="productData.images[0]" alt="product desc">
                                </a>
                                <a href="#">
                                    <img :src="productData.images[1]" alt="product desc">
                                </a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .details-filter-row -->

                        <div class="details-filter-row details-row-size">
                            <label for="qty">Qty:</label>
                            <div class="product-details-quantity">
                                <input type="number" id="qty" class="form-control" :value="cartItem.quantity" min="1" max="10" step="1" data-decimals="0" required="" style="display: none;">
                                <div class="input-group  input-spinner">
                                    <div class="input-group-prepend">
                                        <button style="min-width: 26px" class="btn btn-decrement btn-spinner" type="button" @click="removeQuantity(cartItem)">
                                            <i class="icon-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" style="text-align: center" class="form-control " required="" :placeholder="cartItem.quantity ? cartItem.quantity : 0">
                                    <div class="input-group-append">
                                        <button style="min-width: 26px" class="btn btn-increment btn-spinner" type="button" @click="addQuantity(cartItem)">
                                            <i class="icon-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div><!-- End .product-details-quantity -->
                        </div><!-- End .details-filter-row -->

                        <div class="product-details-action">
                            <a @click="addToCart(cartItem)" class="btn-product btn-cart"><span>add to cart</span></a>

                            <div class="details-action-wrapper">
                                <a href="#" class="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                <!-- <a href="#" class="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a> -->
                            </div><!-- End .details-action-wrapper -->
                        </div><!-- End .product-details-action -->

                        <div class="product-details-footer">
                            <div class="product-cat">
                                <span>Category:</span>
                                <router-link :to="{ name: 'Products', query: { category: productData.gender }}">{{ productData.gender }}</router-link>,
                                <router-link :to="{ name: 'Products', query: { category: productData.brand }}">{{ productData.brand }}</router-link>,
                            </div><!-- End .product-cat -->

                            <div class="social-icons social-icons-sm">
                                <span class="social-label">Share:</span>
                                <a href="#" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                                <a href="#" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                                <a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                                <a href="#" class="social-icon" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
                            </div>
                        </div><!-- End .product-details-footer -->
                    </div><!-- End .product-details -->
                </div><!-- End .col-md-6 -->
            </div><!-- End .row -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data(){
        return {
            productData: {}
        }
    },
    created(){
        // fetch product data
        this.$watch(
            () => this.$route.params,
            () => this.fetchProductData(),
            { immediate: true }
        )
    }, 
    methods: {
        fetchProductData: function(){
            let id = this.$route.params.id 
            fetch(`http://thegorana.herokuapp.com/products/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    this.productData = data
                })
        },
        addQuantity: function(cartItem){
            if (cartItem.quantity) cartItem.quantity += 1;
            else{
                cartItem.quantity = 1
            }
        },
        removeQuantity: function(cartItem){
            if (cartItem.quantity && cartItem.quantity > 0) cartItem.quantity -= 1;
            else{
                cartItem.quantity = 0
            }
        },
        ...mapActions([
            'addToCart'
        ]),
    },
    computed: {
        ...mapState([
            'cart'
        ]),
        cartItem: function(){
            console.log(this.cart.filter((item) => item._id == this.$route.params.id))
            let item = this.cart.filter((item) => item._id == this.$route.params.id)[0]
            if (item) return item
            else{
                return this.productData
            }
        }
    }
}
</script>