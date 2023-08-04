<template>
  <div class="wrapper">
    <div class="content">
      <!--Top Section-->
      <div class="top-section" v-if="$vssWidth > 900">
        <div class="top-section-item">
            <div class="detail-card">
                <div class="card-icon">
                    <svg width="24" height="24" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.7875 28.2461C23.9208 28.2461 21.1266 27.607 18.4048 26.3288C15.6822 25.0514 13.2711 23.3625 11.1715 21.2621C9.07106 19.1625 7.38217 16.7514 6.10483 14.0288C4.82661 11.307 4.1875 8.51276 4.1875 5.64609C4.1875 5.24609 4.32083 4.91276 4.5875 4.64609C4.85417 4.37943 5.1875 4.24609 5.5875 4.24609H10.9875C11.2986 4.24609 11.5764 4.34609 11.8208 4.54609C12.0653 4.74609 12.2097 5.00165 12.2542 5.31276L13.1208 9.97943C13.1653 10.2905 13.1599 10.5736 13.1048 10.8288C13.0488 11.0848 12.9208 11.3128 12.7208 11.5128L9.52083 14.7794C10.4542 16.3794 11.6208 17.8794 13.0208 19.2794C14.4208 20.6794 15.9653 21.8905 17.6542 22.9128L20.7875 19.7794C20.9875 19.5794 21.2488 19.4292 21.5715 19.3288C21.8933 19.2292 22.2097 19.2016 22.5208 19.2461L27.1208 20.1794C27.4319 20.2461 27.6875 20.3959 27.8875 20.6288C28.0875 20.8625 28.1875 21.135 28.1875 21.4461V26.8461C28.1875 27.2461 28.0542 27.5794 27.7875 27.8461C27.5208 28.1128 27.1875 28.2461 26.7875 28.2461Z" fill="#747474"/>
</svg>

                </div>
                <div class="card-detail">
                    <div class="card-arg">Phone Number</div>
                    <div class="card-val">+91 8220761220</div>
                </div>
            </div>
        </div>
        <div class="top-section-item">
            <div class="detail-card">
                <div class="card-icon">
                    <svg width="24" height="24" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.499 5.33398H6.16569C4.69902 5.33398 3.51236 6.53398 3.51236 8.00065L3.49902 24.0007C3.49902 25.4673 4.69902 26.6673 6.16569 26.6673H27.499C28.9657 26.6673 30.1657 25.4673 30.1657 24.0007V8.00065C30.1657 6.53398 28.9657 5.33398 27.499 5.33398ZM26.1657 24.0007H7.49902C6.76569 24.0007 6.16569 23.4007 6.16569 22.6673V10.6673L15.419 16.454C16.2857 17.0007 17.379 17.0007 18.2457 16.454L27.499 10.6673V22.6673C27.499 23.4007 26.899 24.0007 26.1657 24.0007ZM16.8324 14.6673L6.16569 8.00065H27.499L16.8324 14.6673Z" fill="#747474"/>
</svg>


                </div>
                <div class="card-detail">
                    <div class="card-arg">Email</div>
                    <div class="card-val">samchris@gmail.com</div>
                </div>
            </div>
        </div>
        <div class="top-section-item top-large">
                        <EmailTextField
         
          style="margin-right:10px;"
          ></EmailTextField>
        </div>
      </div>

      <!--Mid Section-->

      <div class="mid-flex">
        <div class="company-desc mid-padding">
          <div
            style="
              font-size: 16px;
              padding-bottom: 10px;
              font-family: 'Unbounded';
            "
          >
            Best Woods
          </div>
          <div>
            Best Woods Furniture specializes in crafting high-quality, custom
            furniture for a variety of clients including individuals, interior
            designers, and commercial properties.
          </div>
        </div>
        <div v-if="$vssWidth < 900">
          <div class="company-desc mid-padding">
            <div
              style="
                font-size: 16px;
                padding-bottom: 10px;
                font-family: 'Unbounded';
              "
            >
              Subscribe Now
            </div>
            <div>Join Best Woods Community</div>
          </div>
          <div class="email-field" >

            <EmailTextField
          
          style=
          "width: 100%;
          "
          ></EmailTextField>

          </div>
        </div>

        <ExpansionTile
          v-for="n in details"
          :key="n"
          class="mid-padding"
          :title="n[0]"
          :enabled="$vssWidth < 900"
          :options="n[1]"
          :expanded="n[2]"
          v-on:click="expandTile(details.indexOf(n))"
        >
        </ExpansionTile>
      </div>

      <!--Bottom Section-->
      <div class="bottom-flex">
        <div class="copyright">
          Copyright © 2023 Best Woods. All rights reserved.
        </div>
        <div class="b2t" v-on:click="scrollToTop()">
          <div>BACK TO TOP</div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4082 4.26028C12.1371 4.22574 11.8629 4.22574 11.5918 4.26028C10.9737 4.33907 10.4588 4.634 9.95146 5.04143C9.46359 5.43324 8.91604 5.98571 8.2461 6.66168L6.46731 8.45642C6.17573 8.75061 6.17784 9.22548 6.47204 9.51707C6.76624 9.80865 7.24111 9.80653 7.53269 9.51233L9.28 7.74936C9.98914 7.03387 10.4772 6.54307 10.8907 6.21097C11.0251 6.10304 11.1434 6.01883 11.25 5.95345L11.25 20.9844C11.25 21.3986 11.5858 21.7344 12 21.7344C12.4142 21.7344 12.75 21.3986 12.75 20.9844L12.75 5.95345C12.8566 6.01884 12.9749 6.10304 13.1093 6.21097C13.5228 6.54307 14.0109 7.03387 14.72 7.74936L16.4673 9.51233C16.7589 9.80653 17.2338 9.80865 17.528 9.51707C17.8222 9.22548 17.8243 8.75061 17.5327 8.45642L15.7539 6.66167C15.084 5.9857 14.5364 5.43324 14.0485 5.04143C13.5412 4.634 13.0263 4.33907 12.4082 4.26028Z"
              fill="white"
            />
          </svg>
        </div>
        <div class="social">
          <div class="text">Follow us</div>
          <div class="icons">
            <!--Facebook-->
            <svg
            v-on:click="gotoUrl('https://www.facebook.com/')"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_150_187)">
                <path
                  d="M21.5 0H3.5C1.8455 0 0.5 1.3455 0.5 3V21C0.5 22.6545 1.8455 24 3.5 24H21.5C23.1545 24 24.5 22.6545 24.5 21V3C24.5 1.3455 23.1545 0 21.5 0Z"
                  fill="#1976D2"
                />
                <path
                  d="M20.75 12H17V9C17 8.172 17.672 8.25 18.5 8.25H20V4.5H17C14.5145 4.5 12.5 6.5145 12.5 9V12H9.5V15.75H12.5V24H17V15.75H19.25L20.75 12Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_150_187">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <!--Instagram-->
            <svg
            v-on:click="gotoUrl('https://www.instagram.com/')"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_150_190)">
                <path
                  d="M1.99971 1.63231C0.113711 3.59131 0.499711 5.67231 0.499711 11.9943C0.499711 17.2443 -0.416289 22.5073 4.37771 23.7463C5.87471 24.1313 19.1387 24.1313 20.6337 23.7443C22.6297 23.2293 24.2537 21.6103 24.4757 18.7873C24.5067 18.3933 24.5067 5.60231 24.4747 5.20031C24.2387 2.19331 22.3877 0.460314 19.9487 0.109314C19.3897 0.028314 19.2777 0.00431398 16.4097 -0.000686023C6.23671 0.00431398 4.00671 -0.448686 1.99971 1.63231Z"
                  fill="url(#paint0_linear_150_190)"
                />
                <path
                  d="M12.4981 3.13941C8.86706 3.13941 5.41906 2.81641 4.10206 6.19641C3.55806 7.59241 3.63706 9.40541 3.63706 12.0014C3.63706 14.2794 3.56406 16.4204 4.10206 17.8054C5.41606 21.1874 8.89206 20.8634 12.4961 20.8634C15.9731 20.8634 19.5581 21.2254 20.8911 17.8054C21.4361 16.3954 21.3561 14.6094 21.3561 12.0014C21.3561 8.53941 21.5471 6.30441 19.8681 4.62641C18.1681 2.92641 15.8691 3.13941 12.4941 3.13941H12.4981ZM11.7041 4.73641C19.2781 4.72441 20.2421 3.88241 19.7101 15.5794C19.5211 19.7164 16.3711 19.2624 12.4991 19.2624C5.43906 19.2624 5.23606 19.0604 5.23606 11.9974C5.23606 4.85241 5.79606 4.74041 11.7041 4.73441V4.73641ZM17.2281 6.20741C16.6411 6.20741 16.1651 6.68341 16.1651 7.27041C16.1651 7.85741 16.6411 8.33341 17.2281 8.33341C17.8151 8.33341 18.2911 7.85741 18.2911 7.27041C18.2911 6.68341 17.8151 6.20741 17.2281 6.20741ZM12.4981 7.45041C9.98506 7.45041 7.94806 9.48841 7.94806 12.0014C7.94806 14.5144 9.98506 16.5514 12.4981 16.5514C15.0111 16.5514 17.0471 14.5144 17.0471 12.0014C17.0471 9.48841 15.0111 7.45041 12.4981 7.45041ZM12.4981 9.04741C16.4031 9.04741 16.4081 14.9554 12.4981 14.9554C8.59406 14.9554 8.58806 9.04741 12.4981 9.04741Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_150_190"
                  x1="2.04573"
                  y1="22.4664"
                  x2="24.3512"
                  y2="3.16129"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFDD55" />
                  <stop offset="0.5" stop-color="#FF543E" />
                  <stop offset="1" stop-color="#C837AB" />
                </linearGradient>
                <clipPath id="clip0_150_190">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <!--Twitter-->
            <svg
            v-on:click="gotoUrl('https://twitter.com/login')"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_150_193)">
                <path
                  d="M22.6053 0H2.39474C1.3483 0 0.5 0.848303 0.5 1.89474V22.1053C0.5 23.1517 1.3483 24 2.39474 24H22.6053C23.6517 24 24.5 23.1517 24.5 22.1053V1.89474C24.5 0.848303 23.6517 0 22.6053 0Z"
                  fill="#03A9F4"
                />
                <path
                  d="M20.2733 7.17902C19.6886 7.43438 19.0701 7.60402 18.437 7.68271C19.1044 7.28692 19.6033 6.65989 19.8391 5.9206C19.2144 6.2914 18.5308 6.55253 17.818 6.69271C17.3812 6.22558 16.814 5.9007 16.19 5.76032C15.5661 5.61995 14.9143 5.67058 14.3196 5.90562C13.7248 6.14067 13.2145 6.54926 12.8551 7.07824C12.4957 7.60723 12.3038 8.23212 12.3043 8.87165C12.3021 9.11576 12.327 9.35936 12.3785 9.59797C11.1106 9.53569 9.87006 9.20663 8.73795 8.63228C7.60584 8.05793 6.60764 7.25121 5.80853 6.26481C5.39778 6.96651 5.27053 7.79859 5.45278 8.59098C5.63503 9.38336 6.11302 10.0762 6.78906 10.528C6.28446 10.5144 5.79056 10.3795 5.34906 10.1348V10.1696C5.35048 10.9051 5.60506 11.6177 6.07002 12.1876C6.53498 12.7575 7.18196 13.15 7.90222 13.299C7.62965 13.3706 7.34876 13.4057 7.06695 13.4032C6.86404 13.407 6.6613 13.389 6.46222 13.3496C6.66856 13.9821 7.06583 14.5352 7.59938 14.9327C8.13292 15.3303 8.77654 15.5528 9.44169 15.5695C8.31452 16.4506 6.92496 16.9291 5.49432 16.929C5.23941 16.9312 4.98464 16.9164 4.73169 16.8848C6.19043 17.8253 7.89078 18.3223 9.62643 18.3153C15.4922 18.3153 18.6991 13.4569 18.6991 9.24587C18.6991 9.10534 18.6991 8.96955 18.688 8.83376C19.3125 8.38303 19.8497 7.8223 20.2733 7.17902Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_150_193">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <!--YouTube-->

            <svg
            v-on:click="gotoUrl('https://www.youtube.com/')"
              width="25"
              height="24"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.984375" width="32" height="32" rx="4" fill="white" />
              <path
                d="M26.979 11.4759C26.715 10.4948 25.9415 9.72145 24.9606 9.45726C23.1684 8.9668 15.9996 8.9668 15.9996 8.9668C15.9996 8.9668 8.83107 8.9668 7.03888 9.43856C6.07683 9.70258 5.28443 10.495 5.02042 11.4759C4.54883 13.2679 4.54883 16.9844 4.54883 16.9844C4.54883 16.9844 4.54883 20.7195 5.02042 22.4929C5.28461 23.4738 6.05796 24.2473 7.03905 24.5115C8.84994 25.002 15.9998 25.002 15.9998 25.002C15.9998 25.002 23.1684 25.002 24.9606 24.5302C25.9417 24.2662 26.715 23.4927 26.9792 22.5117C27.4508 20.7195 27.4508 17.0032 27.4508 17.0032C27.4508 17.0032 27.4697 13.2679 26.979 11.4759Z"
                fill="#FF0000"
              />
              <path
                d="M12.8125 21.3403L20.375 16.9846L12.8125 12.6289V21.3403Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import ExpansionTile from "../widgets/ExpansionTile.vue";
import { VueScreenSizeMixin } from "vue-screen-size";
import EmailTextField from "../widgets/EmailTextField.vue";

export default {
  name: "FavoritesSection",
  data: function () {
    return {
      details: [
        [
          "Company",
          ["About us", "Inspiration for you", "Blogs", "Contact us"],
          false,
        ],
        [
          "Rooms",
          ["Bed Room", "Living Room", "Study Room", "Store Room"],
          false,
        ],
        [
          "Important Links",
          ["FAQ", "Terms & Condition", "Privacy Policy", "Cookies Policy"],
          false,
        ],
      ],
    };
  },
  methods: {
    expandTile(index) {
      this.details[index][2] = !this.details[index][2];
    },
    gotoUrl(url) {
      window.open(url);
    },
    scrollToTop() {
    window.scrollTo(0,0);
  }
  },
  mixins: [VueScreenSizeMixin],
  components: { ExpansionTile, EmailTextField },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
.wrapper {
  color: white;
  font-family: "Open Sans", sans-serif;
  margin-top: 80px;
  background: black;
  padding: 40px;
}
.bottom-flex {
  display: flex;
  flex-direction: row;
}

.email-field {
    display:flex;
    
}

.card-arg{
    color:#777777;
    font-weight: 400;
    font-family: 'Open Sans';
    font-size: 14px;
    margin-bottom: 10px;
}

.card-val{
    color:#FFFFFF;
    font-weight: 400;
    font-family: 'Unbounded';
    font-size: 14px;
}


.card-icon{
    background: white;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}


.detail-card{
    display: flex;
    flex-direction: row;
    margin-right: 10px;
}
.top-section {
  border-bottom: 1px solid #6f698b;
  padding: 20px 20px;
  display: flex;
}
.top-section-item {
  flex: 1;
}
.top-large {
  flex: 2;
}
.copyright {
  flex: 1;
  height: fit-content;
  padding: 40px 20px;
  color: #d7d7d7;
  display: flex;
  font-size: 14px;
  font-weight: 400;
}
.b2t {
  flex: 1;
  display: flex;
  height: fit-content;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding: 40px 20px;
  color: #d7d7d7;
  font-size: 14px;
  font-weight: 400;
}
.b2t div {
  padding-right: 5px;
}
.social {
  flex: 1;
  justify-content: end;
  display: flex;
  flex-direction: row;
  padding: 40px 20px;
}

.social .text {
  font-size: 14px;
  margin: 5px;
  color: #e3e3e3;
  font-weight: 500;
}
.social svg {
  margin: 0px 5px;
}
.content {
  border: 1px solid #7d7d7d;
}

.company-desc {
  display: flex;
  flex-direction: column;
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #cbcbcb;
}
.mid-flex {
  display: flex;
  border-bottom: 0.5px solid #4a4a4a;
}

.company-desc {
  flex: 1;
}

.mid-padding {
  padding: 20px 20px;
  flex: 1;
}

@media only screen and (max-width: 1000px) {

.top-large{
    flex:1
}
}


@media only screen and (max-width: 900px) {
  .bottom-flex {
    flex-direction: column-reverse;
  }

  .mid-flex {
    flex-direction: column;
    border-bottom: none;
  }

  .mid-padding {
    border-bottom: 0.5px solid #4a4a4a;
  }

  .company-desc {
    border: none;
  }

  .social .text {
    margin: 10px 5px;
  }

  .copyright {
    padding: 20px 10px;
    border-top: 1px solid #777777;
  }

  .b2t {
    padding: 20px 10px;
    border-top: 1px solid #777777;
  }
  .social {
    padding: 20px 10px;
    flex-direction: column;
  }
}

@media only screen and (max-width: 450px) {
  .wrapper {
    padding: 20px;
  }
}
</style>
    