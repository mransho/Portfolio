<template>
  <div class="layout">
    <v-layout class="flex-column">
      <v-main class="main d-flex justify-center align-center flex-column">
        <slot></slot>
        <img
          src="./../assets/stars1.webp"
          id="stars1"
          class="w-100 top-0"
          alt=""
        />
        <h2 class="MAHMOUD">MAHMOUD</h2>
        <img src="./../assets/moon2.webp" id="moon2" class="w-100" alt="" />
        <img
          src="./../assets/mountains3.webp"
          id="mountains3"
          class="w-100"
          alt=""
        />
        <img
          src="./../assets/mountains4.webp"
          id="mountains4"
          class="w-100"
          alt=""
        />
        <img src="./../assets/river5.webp" id="river5" class="w-100" alt="" />
        <img src="./../assets/boat6.webp" id="boat6" class="w-100" alt="" />
        <img
          src="./../assets/mountains7.webp"
          id="mountains7"
          class="w-100"
          alt=""
        />
      </v-main>
      <div class="cont">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          neque architecto soluta, omnis mollitia, molestias eum veritatis
          doloribus delectus reiciendis eligendi voluptatibus ex quis voluptas
          dolores nesciunt! Qui, vel distinctio voluptatum repudiandae sequi
          molestias iusto voluptate natus officia possimus? Vel, consectetur
          quod. Amet, repudiandae porro sunt earum aliquid exercitationem fuga
          assumenda quae nihil eos non laborum, veritatis velit iusto?
          Voluptatum earum explicabo, error fugit voluptates provident velit
          neque nam animi, quam ipsam hic maiores aspernatur ut odit rem, ad
          commodi. Nihil accusantium iste minus voluptate voluptatibus error
          corporis optio excepturi placeat! Dolorum repellat dolorem aliquid
          deserunt doloremque quisquam dicta esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          neque architecto soluta, omnis mollitia, molestias eum veritatis
          doloribus delectus reiciendis eligendi voluptatibus ex quis voluptas
          dolores nesciunt! Qui, vel distinctio voluptatum repudiandae sequi
          molestias iusto voluptate natus officia possimus? Vel, consectetur
          quod. Amet, repudiandae porro sunt earum aliquid exercitationem fuga
          assumenda quae nihil eos non laborum, veritatis velit iusto?
          Voluptatum earum explicabo, error fugit voluptates provident velit
          neque nam animi, quam ipsam hic maiores aspernatur ut odit rem, ad
          commodi. Nihil accusantium iste minus voluptate voluptatibus error
          corporis optio excepturi placeat! Dolorum repellat dolorem aliquid
          deserunt doloremque quisquam dicta esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          neque architecto soluta, omnis mollitia, molestias eum veritatis
          doloribus delectus reiciendis eligendi voluptatibus ex quis voluptas
          dolores nesciunt! Qui, vel distinctio voluptatum repudiandae sequi
          molestias iusto voluptate natus officia possimus? Vel, consectetur
          quod. Amet, repudiandae porro sunt earum aliquid exercitationem fuga
          assumenda quae nihil eos non laborum, veritatis velit iusto?
          Voluptatum earum explicabo, error fugit voluptates provident velit
          neque nam animi, quam ipsam hic maiores aspernatur ut odit rem, ad
          commodi. Nihil accusantium iste minus voluptate voluptatibus error
          corporis optio excepturi placeat! Dolorum repellat dolorem aliquid
          deserunt doloremque quisquam dicta esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          neque architecto soluta, omnis mollitia, molestias eum veritatis
          doloribus delectus reiciendis eligendi voluptatibus ex quis voluptas
          dolores nesciunt! Qui, vel distinctio voluptatum repudiandae sequi
          molestias iusto voluptate natus officia possimus? Vel, consectetur
          quod. Amet, repudiandae porro sunt earum aliquid exercitationem fuga
          assumenda quae nihil eos non laborum, veritatis velit iusto?
          Voluptatum earum explicabo, error fugit voluptates provident velit
          neque nam animi, quam ipsam hic maiores aspernatur ut odit rem, ad
          commodi. Nihil accusantium iste minus voluptate voluptatibus error
          corporis optio excepturi placeat! Dolorum repellat dolorem aliquid
          deserunt doloremque quisquam dicta esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          neque architecto soluta, omnis mollitia, molestias eum veritatis
          doloribus delectus reiciendis eligendi voluptatibus ex quis voluptas
          dolores nesciunt! Qui, vel distinctio voluptatum repudiandae sequi
          molestias iusto voluptate natus officia possimus? Vel, consectetur
          quod. Amet, repudiandae porro sunt earum aliquid exercitationem fuga
          assumenda quae nihil eos non laborum, veritatis velit iusto?
          Voluptatum earum explicabo, error fugit voluptates provident velit
          neque nam animi, quam ipsam hic maiores aspernatur ut odit rem, ad
          commodi. Nihil accusantium iste minus voluptate voluptatibus error
          corporis optio excepturi placeat! Dolorum repellat dolorem aliquid
          deserunt doloremque quisquam dicta esse?
        </p>
      </div>
      <appNav />
    </v-layout>
  </div>
</template>

<script>
import appNav from "./appNav.vue";
// import AppFooter from "./AppFooter.vue";
// import FixedNav from "./FixedNav.vue";
// import ResponsiveNav from "./ResponsiveNav.vue";
export default {
  name: "appLayout",
  components: {
    appNav,
    // AppFooter,
    // FixedNav,
    // ResponsiveNav,
  },
};
</script>
<style scoped lang="scss">
.main {
  position: relative;
  height: 100vh;
}
.main::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: linear-gradient(to top, #0c0612, transparent);
}
img {
  position: absolute;
}
#moon2 {
  mix-blend-mode: screen;
  transform: translateY(108px);
}
.MAHMOUD {
  color: #fff;
  font-size: 20px;
  transform: translateY(-100px);
}
.cont {
  text-align: start;
  color: white;
  h2 {
    margin: 20px;
    font-size: 30px;
  }
  p {
    margin: 20px;
  }
}
</style>
