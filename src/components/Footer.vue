<template>
    <footer class="footer" v-scroll-reveal="{delay: 500}">
        <div class="footer-image">
            <img src="../assets/logo.png" alt="Logo webpage in footer">
            <p><span>© </span> Felix Sandoval. All Rights Reserved</p>
        </div>

        <div class="footer-about">
        <div class="footer-about__nav">
            <h6>Platform</h6>
            <ul class="footer-about__menu" v-if="linkOne !== ''">
            <li class="footer-about__item" v-for="(item,index) in linkOne" :key="index">
                <a href="" class="footer-about__link">{{item.name}}</a></li>
            </ul>
        </div>
        <div class="footer-about__nav">
            <h6>Company</h6>
            <ul class="footer-about__menu">
            <li class="footer-about__item"><a href="" class="footer-about__link">Careers</a></li>
            </ul>
        </div>
        <div class="footer-about__nav">
            <h6>Resources</h6>
            <ul class="footer-about__menu" v-if="linkThree !== ''">
            <li class="footer-about__item" v-for="(item,index) in linkThree" :key="index">
                <a href="" class="footer-about__link">{{item.name}}</a></li>
            </ul>
        </div>
        </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data(){
      return{
          linkOne: [{
              name: 'Creators'
          },
          {
              name: 'Brands & Agency'
          },
          {
              name: 'Pricing'
          },
          {
              name: 'Community'
          }],
          linkThree: [{
              name: 'Help'
          },
          {
              name: 'Support'
          },
          {
              name: 'Terms of Use'
          },
          {
              name: 'Privacy'
          },
          {
              name: 'legacy'
          }]
      }
  }
}
</script>