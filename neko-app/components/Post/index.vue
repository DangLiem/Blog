<template>
  <div>
       <div class="post mt-2 d-flex flex-column justify-content-center">
        <div class="title">
         <h2><nuxt-link to="/2">{{ post.title }}</nuxt-link></h2>
        </div>
        <div class="content pt-2">
          <p>
            {{post.shortContent}}
          </p>
        </div>
        <div class="">
          <b-button pill variant="info">Tiếp tục đọc</b-button>
        </div>
        <div class="tag d-flex justify-content-end">
          <a class="pr-3" href="#">user</a>
          <a class="pr-3" href="#">Java</a>
          <a class="pr-3" href="#">Bình luận</a>
          <p class="pr-3">{{post.createdDate}}</p>
        </div>
      </div>
      <hr>
  </div>
</template>

<script>
import { forEach } from 'jsdom-global/keys'
export default {
    name: "Post",
    props: {
        post: {
            Type: Object,
            Required: true
        }
    },
    created() {
    }
}
</script>

<style scoped>
nuxt-link {
  color:black,

}
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: chocolate;
}
.btnRead {
  background-color:#008CBA;
  font-size: 50px;
  
}
</style>