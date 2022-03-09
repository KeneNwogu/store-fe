<template>
  <main class="main">
    <div class="intro-slide">
      <div class="container intro-content text-center">
          <h3 class="intro-subtitle text-white">Limited time only</h3><!-- End .h3 intro-subtitle -->
          <h1 class="intro-title text-white">Treat your self</h1><!-- End .intro-title -->
          <div class="intro-text text-white">Up to 50% off</div><!-- End .intro-text -->
          <router-link to="/products" class="btn btn-primary">Shop NOW</router-link>
          <!-- <img src="../assets/images/demos/demo-5/slider/slide-2.jpg" alt="" srcset=""> -->
      </div><!-- End .intro-content -->
    </div>
    <div class="container" style="margin-top: 30px">
      <div class="banner-group">
          <div class="row">
              <div class="col-md-6">
                  <div class="banner banner-border">
                      <router-link to="/products">
                          <img src="../assets/images/demo-5/banners/banner-1.jpg" alt="Banner">
                      </router-link>

                      <div class="banner-content">
                          <h4 class="banner-subtitle"><a href="#">Trending now</a></h4><!-- End .banner-subtitle -->
                          <h3 class="banner-title"><a href="#"><span>This Week's<br>Most Wanted</span></a></h3><!-- End .banner-title -->
                          <router-link to="/products" class="btn btn-outline-primary-2 banner-link">Discover Now<i class="icon-long-arrow-right"></i></router-link>
                      </div><!-- End .banner-content -->
                  </div><!-- End .banner -->
              </div><!-- End .col-md-6-->

              <div class="col-md-6">
                  <div class="banner banner-border-hover">
                      <router-link to="/products">
                          <img src="../assets/images/demo-5/banners/banner-2.jpg" alt="Banner">
                      </router-link>

                      <div class="banner-content">
                          <h4 class="banner-subtitle"><a href="#">Limited time only.</a></h4><!-- End .banner-subtitle -->
                          <h3 class="banner-title"><a href="#"><span>Trainers &amp; Sportwear<br>Sale Up to 70% off</span></a></h3><!-- End .banner-title -->
                          <router-link to="/products" class="btn btn-outline-primary-2 banner-link">Shop Now<i class="icon-long-arrow-right"></i></router-link>
                      </div><!-- End .banner-content -->
                  </div><!-- End .banner -->

                  <div class="banner banner-border-hover">
                      <a href="#">
                          <img src="../assets/images/demo-5/banners/banner-3.jpg" alt="Banner">
                      </a>

                      <div class="banner-content">
                          <h4 class="banner-subtitle"><a href="#">This week we love...</a></h4><!-- End .banner-subtitle -->
                          <h3 class="banner-title"><a href="#"><span>Womens <br>Holiday Clothes</span></a></h3><!-- End .banner-title -->
                          <router-link to="/products" class="btn btn-outline-primary-2 banner-link">Discover Now<i class="icon-long-arrow-right"></i></router-link>
                      </div><!-- End .banner-content -->
                  </div><!-- End .banner -->
              </div><!-- End .col-md-6 -->
          </div><!-- End .row -->
      </div><!-- End .banner-group -->
  </div>

  <div class="container">
    <div class="heading heading-center mb-3">
      <h2 class="title">Trendy Products</h2><!-- End .title -->

      <ul class="nav nav-pills justify-content-center" role="tablist">
          <li class="nav-item">
              <a class="nav-link active" id="trendy-all-link" data-toggle="tab" href="#trendy-all-tab" role="tab" aria-controls="trendy-all-tab" aria-selected="true">All</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" id="trendy-women-link" data-toggle="tab" href="#trendy-women-tab" role="tab" aria-controls="trendy-women-tab" aria-selected="false">Women</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" id="trendy-men-link" data-toggle="tab" href="#trendy-men-tab" role="tab" aria-controls="trendy-men-tab" aria-selected="false">Men</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" id="trendy-access-link" data-toggle="tab" href="#trendy-access-tab" role="tab" aria-controls="trendy-access-tab" aria-selected="false">Accessories</a>
          </li>
      </ul>
    </div><!-- End .heading -->
    <!-- carousel -->
    <div class="tab-content tab-content-carousel">
        <div class="tab-pane p-0 fade show active" id="trendy-all-tab" role="tabpanel" aria-labelledby="trendy-all-link">
            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow owl-loaded owl-drag" data-toggle="owl">
            <div class="owl-stage-outer">
                <div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0.8s ease 0s; width: 1619px;">
                    <div class="owl-item active" style="width: 303.667px; margin-right: 20px;" v-for="item in featured" :key="item._id">
                        <div class="product product-2">
                            <figure class="product-media">
                                <router-link :to="{ name: 'ProductDetails', params: { id: item._id }}">
                                    <img :src="item.images[0]" alt="Product image" class="product-image">
                                    <img :src="item.images[1]" alt="Product image" class="product-image-hover">
                                </router-link>

                                <div class="product-action-vertical">
                                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
                                </div><!-- End .product-action -->

                                <div class="product-action product-action-transparent">
                                    <a @click="addToCart(item)" class="btn-product btn-cart"><span>add to cart</span></a>
                                </div><!-- End .product-action -->
                            </figure><!-- End .product-media -->

                            <div class="product-body">
                                <div class="product-cat">
                                    <a href="#">Clothing</a>
                                </div><!-- End .product-cat -->
                                <h3 class="product-title"><router-link :to="{ name: 'ProductDetails', params: { id: item._id }}">{{ item.name }}</router-link></h3><!-- End .product-title -->
                                <div class="product-price">
                                    ₦{{ formatCurrency(item.price) }}
                                </div><!-- End .product-price -->
                            </div><!-- End .product-body -->
                    </div>
                </div>
            </div></div>
            <!-- <div class="owl-nav disabled">
                <button type="button" role="presentation" class="owl-prev">
                    <i class="icon-angle-left"></i>
                </button>
                <button type="button" role="presentation" class="owl-next">
                    <i class="icon-angle-right"></i>
                </button>
            </div>
            <div class="owl-dots">
                <button role="button" class="owl-dot active">
                    <span></span>
                </button>
                <button role="button" class="owl-dot">
                    <span></span>
                </button>
            </div> -->
                </div> 
                <!-- End .owl-carousel -->
        </div><!-- .End .tab-pane -->
        <div class="tab-pane p-0 fade" id="trendy-women-tab" role="tabpanel" aria-labelledby="trendy-women-link">
            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow owl-loaded owl-drag" data-toggle="owl">
            <div class="owl-stage-outer"><div class="owl-stage"></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i class="icon-angle-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="icon-angle-right"></i></button></div><div class="owl-dots disabled"></div></div><!-- End .owl-carousel -->
        </div><!-- .End .tab-pane -->
        <div class="tab-pane p-0 fade" id="trendy-men-tab" role="tabpanel" aria-labelledby="trendy-men-link">
            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow owl-loaded owl-drag" data-toggle="owl">
            <div class="owl-stage-outer"><div class="owl-stage"></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i class="icon-angle-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="icon-angle-right"></i></button></div><div class="owl-dots disabled"></div></div><!-- End .owl-carousel -->
        </div><!-- .End .tab-pane -->
        <div class="tab-pane p-0 fade" id="trendy-access-tab" role="tabpanel" aria-labelledby="trendy-access-link">
            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow owl-loaded owl-drag" data-toggle="owl">
            <div class="owl-stage-outer"><div class="owl-stage"></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i class="icon-angle-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="icon-angle-right"></i></button></div><div class="owl-dots disabled"></div></div><!-- End .owl-carousel -->
        </div><!-- .End .tab-pane -->
    </div><!-- End .tab-content -->
</div>
    <div class="container">
                <div class="cta cta-separator mb-5">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="cta-wrapper cta-text text-center">
                                <h3 class="cta-title">Shop Social</h3><!-- End .cta-title -->
                                <p class="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p><!-- End .cta-desc -->
                        
                                <div class="social-icons social-icons-colored justify-content-center">
                                    <a href="#" class="social-icon social-facebook" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                                    <a href="#" class="social-icon social-twitter" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                                    <a href="#" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                                    <a href="#" class="social-icon social-youtube" title="Youtube" target="_blank"><i class="icon-youtube"></i></a>
                                    <a href="#" class="social-icon social-pinterest" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
                                </div><!-- End .soial-icons -->
                            </div><!-- End .cta-wrapper -->
                        </div><!-- End .col-lg-6 -->

                        <div class="col-lg-6">
                            <div class="cta-wrapper text-center">
                                <h3 class="cta-title">Get the Latest Deals</h3><!-- End .cta-title -->
                                <p class="cta-desc">and <br>receive <span class="text-primary">$20 coupon</span> for first shopping</p><!-- End .cta-desc -->
                        
                                <form action="#">
                                    <div class="input-group">
                                        <input type="email" class="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required="">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary btn-rounded" type="submit"><i class="icon-long-arrow-right"></i></button>
                                        </div><!-- .End .input-group-append -->
                                    </div><!-- .End .input-group -->
                                </form>
                            </div><!-- End .cta-wrapper -->
                        </div><!-- End .col-lg-6 -->
                    </div><!-- End .row -->
                </div><!-- End .cta -->
            </div>

            <div class="bg-lighter pt-7 pb-4" style="background-color: #fafafa;">
                <div class="container">
                    <div class="instagram-feed-container">
                        <div class="row">
                            <div class="feed-col">
                                <div class="instagram-feed">
                                    <img src="../assets/images/demo-5/instagram/1.jpg" alt="img">

                                    <div class="instagram-feed-content">
                                        <a href="#"><i class="icon-heart-o"></i>387</a>
                                        <a href="#"><i class="icon-comments"></i>45</a>
                                    </div><!-- End .instagram-feed-content -->
                                </div><!-- End .instagram-feed -->
                            </div><!-- End .feed-col -->

                            <div class="feed-col">
                                <div class="instagram-feed">
                                    <img src="../assets/images/demo-5/instagram/2.jpg" alt="img">

                                    <div class="instagram-feed-content">
                                        <a href="#"><i class="icon-heart-o"></i>691</a>
                                        <a href="#"><i class="icon-comments"></i>87</a>
                                    </div><!-- End .instagram-feed-content -->
                                </div><!-- End .instagram-feed -->
                            </div><!-- End .feed-col -->

                            <div class="feed-col">
                                <div class="instagram-feed-title">
                                    <i class="icon-instagram"></i>
                                    <p>@the.gorana <br>on instagram</p>
                                    <a href="#">FOLLOW</a>
                                </div><!-- End .instagram-feed-title -->
                            </div><!-- End .feed-col -->

                            <div class="feed-col">
                                <div class="instagram-feed">
                                    <img src="../assets/images/demo-5/instagram/3.jpg" alt="img">

                                    <div class="instagram-feed-content">
                                        <a href="#"><i class="icon-heart-o"></i>321</a>
                                        <a href="#"><i class="icon-comments"></i>54</a>
                                    </div><!-- End .instagram-feed-content -->
                                </div><!-- End .instagram-feed -->
                            </div><!-- End .feed-col -->

                            <div class="feed-col">
                                <div class="instagram-feed">
                                    <img src="../assets/images/demo-5/instagram/4.jpg" alt="img">

                                    <div class="instagram-feed-content">
                                        <a href="#"><i class="icon-heart-o"></i>44</a>
                                        <a href="#"><i class="icon-comments"></i>55</a>
                                    </div><!-- End .instagram-feed-content -->
                                </div><!-- End .instagram-feed -->
                            </div><!-- End .feed-col -->

                            <div class="feed-col">
                                <div class="instagram-feed">
                                    <img src="../assets/images/demo-5/instagram/5.jpg" alt="img">

                                    <div class="instagram-feed-content">
                                        <a href="#"><i class="icon-heart-o"></i>128</a>
                                        <a href="#"><i class="icon-comments"></i>99</a>
                                    </div><!-- End .instagram-feed-content -->
                                </div><!-- End .instagram-feed -->
                            </div><!-- End .feed-col -->

                            <div class="feed-col">
                                <div class="instagram-feed">
                                    <img src="../assets/images/demo-5/instagram/6.jpg" alt="img">

                                    <div class="instagram-feed-content">
                                        <a href="#"><i class="icon-heart-o"></i>433</a>
                                        <a href="#"><i class="icon-comments"></i>25</a>
                                    </div><!-- End .instagram-feed-content -->
                                </div><!-- End .instagram-feed -->
                            </div><!-- End .feed-col -->

                            <div class="feed-col">
                                <div class="instagram-feed">
                                    <img src="../assets/images/demo-5/instagram/7.jpg" alt="img">

                                    <div class="instagram-feed-content">
                                        <a href="#"><i class="icon-heart-o"></i>588</a>
                                        <a href="#"><i class="icon-comments"></i>44</a>
                                    </div><!-- End .instagram-feed-content -->
                                </div><!-- End .instagram-feed -->
                            </div><!-- End .feed-col -->

                            <div class="feed-col">
                                <div class="instagram-feed">
                                    <img src="../assets/images/demo-5/instagram/8.jpg" alt="img">

                                    <div class="instagram-feed-content">
                                        <a href="#"><i class="icon-heart-o"></i>87</a>
                                        <a href="#"><i class="icon-comments"></i>23</a>
                                    </div><!-- End .instagram-feed-content -->
                                </div><!-- End .instagram-feed -->
                            </div><!-- End .feed-col -->

                            <div class="feed-col">
                                <div class="instagram-feed">
                                    <img src="../assets/images/demo-5/instagram/9.jpg" alt="img">

                                    <div class="instagram-feed-content">
                                        <a href="#"><i class="icon-heart-o"></i>87</a>
                                        <a href="#"><i class="icon-comments"></i>23</a>
                                    </div><!-- End .instagram-feed-content -->
                                </div><!-- End .instagram-feed -->
                            </div><!-- End .feed-col -->
                        </div><!-- End .row -->
                    </div><!-- End .instagra-feed-container -->

                    <div class="row justify-content-center">
                        <div class="col-sm-6 col-lg-4">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon text-dark">
                                    <i class="icon-rocket"></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Payment &amp; Delivery</h3><!-- End .icon-box-title -->
                                    <p>Free shipping for orders over $50</p>
                                </div><!-- End .icon-box-content -->
                            </div><!-- End .icon-box -->
                        </div><!-- End .col-sm-6 col-lg-4 -->
                        
                        <div class="col-sm-6 col-lg-4">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon text-dark">
                                    <i class="icon-refresh"></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Return &amp; Refund</h3><!-- End .icon-box-title -->
                                    <p>Free 100% money back guarantee</p>
                                </div><!-- End .icon-box-content -->
                            </div><!-- End .icon-box -->
                        </div><!-- End .col-sm-6 col-lg-4 -->

                        <div class="col-sm-6 col-lg-4">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon text-dark">
                                    <i class="icon-life-ring"></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Quality Support</h3><!-- End .icon-box-title -->
                                    <p>Always online feedback 24/7</p>
                                </div><!-- End .icon-box-content -->
                            </div><!-- End .icon-box -->
                        </div><!-- End .col-sm-6 col-lg-4 -->
                    </div><!-- End .row -->
                </div><!-- End .container -->
            </div>
  </main>
</template>

<style>
  .intro-slide{
    /* background-image: url(../assets/images/demos/demo-5/slider/slide-2.jpg); */
  }

  .tab-content{
      overflow: scroll;
   }

   .tab-content::-webkit-scrollbar{
       display: none;
   }
</style>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
      ...mapState([
          'featured'
      ])
  },
  methods: {
      ...mapActions([
          'addToCart'
      ]),
    formatCurrency: function (price){
        price = Math.round(price)
        return price.toLocaleString();
    }
  }
}
</script>
