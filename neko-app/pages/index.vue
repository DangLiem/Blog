  <template>
  <div class="row">
    <div class="col-md-9 leftMain">
      <PostSingle :post="post" v-for="(post, index) in listPosts" :key="index" />
    </div>
    <div class="col-md-3 rightMain">
      <div class="search pt-3">
        <label for="search">Tìm kiếm</label>
        <input type="text" id="search" />
      </div>
      <div class="viewMost pt-5">
        <h5>Nhiều người xem</h5>
        <ul>
          <li>
            <a href="#">CORS là gì?</a>
          </li>
          <li>
            <a href="#">69 Câu hỏi phỏng vấn?</a>
          </li>
          <li>
            <a href="#">Spring MVC?</a>
          </li>
          <li>
            <a href="#">Spirng security?</a>
          </li>
          <li>
            <a href="#">JSP trong java ?</a>
          </li>
          <li>
            <a href="#">Stream API?</a>
          </li>
          <li>
            <a href="#">Colection trong java 8?</a>
          </li>
        </ul>
      </div>
      <div class="viewMost pt-5">
        <h5>Chủ đề</h5>
        <ul>
          <li>
            <a href="#">CORS là gì?</a>
          </li>
          <li>
            <a href="#">69 Câu hỏi phỏng vấn?</a>
          </li>
          <li>
            <a href="#">Spring MVC?</a>
          </li>
          <li>
            <a href="#">Spirng security?</a>
          </li>
          <li>
            <a href="#">JSP trong java ?</a>
          </li>
          <li>
            <a href="#">Stream API?</a>
          </li>
          <li>
            <a href="#">Colection trong java 8?</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PostSingle from "@/components/Post";
import postService from "@/services/post";
export default {
  data() {
    return {
      listPosts: [
        { id: "1",
          title: "Senior hay không-Senior?",
          createdDate: "11/22/2020",
          shortContent:
            "Mình sẽ mở đầu bài viết với một câu châm ngôn của bác Martin Fowler mà mình nghĩ ai là Software Engineer cũng đều nên nhớ, Any fool can write code that a computer can understand. Good programmers write code that humans can understand.Tạm dịch là, Bất cứ thằng ngu nào cũng có thể...",
        },
        {
          id: "2",
          title: "Developer tìm việc như thế nào?",
          createdDate: "11/22/2020",
          shortContent:
            "Một câu hỏi thường gặp của những bạn sinh viên mới ra trường, thậm chí là những bạn junior developer dưới một năm kinh nghiệm đó là: Developer tìm việc như thế nào?  Mình đã từng trả lời rất nhiều câu hỏi dạng như vậy nên hôm nay mình sẽ chia sẻ một số kinh …",
        },
        {
          id: "3",
          title: "Tại sao developer nên tham gia các sự kiện công nghệ?",
          createdDate: "11/22/2020",
          shortContent:
            "Mình sẽ mở đầu bài viết với một câu châm ngôn của bác Martin Fowler mà mình nghĩ ai là Software Engineer cũng đều nên nhớ, Any fool can write code that a computer can understand. Good programmers write code that humans can understand.Tạm dịch là, Bất cứ thằng ngu nào cũng có thể...",
        },
        {
          id: "4",
          title: "“Đùa nghịch” với Docker trong 5 phút",
          createdDate: "11/22/2020",
          shortContent:
            "Mình sẽ mở đầu bài viết với một câu châm ngôn của bác Martin Fowler mà mình nghĩ ai là Software Engineer cũng đều nên nhớ, Any fool can write code that a computer can understand. Good programmers write code that humans can understand.Tạm dịch là, Bất cứ thằng ngu nào cũng có thể...",
        },
        {
          id: "5",
          title: "Tôi đã làm cho bạn nhân viên bán hàng sung sướng như thế nào?",
          createdDate: "11/22/2020",
          shortContent:
            "Mình sẽ mở đầu bài viết với một câu châm ngôn của bác Martin Fowler mà mình nghĩ ai là Software Engineer cũng đều nên nhớ, Any fool can write code that a computer can understand. Good programmers write code that humans can understand.Tạm dịch là, Bất cứ thằng ngu nào cũng có thể...",
        },
        {
          id: "6",
          title: "Chuyện tối ưu code, xấu đẹp, đẹp xấu",
          createdDate: "11/22/2020",
          shortContent:
            "Mình sẽ mở đầu bài viết với một câu châm ngôn của bác Martin Fowler mà mình nghĩ ai là Software Engineer cũng đều nên nhớ, Any fool can write code that a computer can understand. Good programmers write code that humans can understand.Tạm dịch là, Bất cứ thằng ngu nào cũng có thể...",
        },
        {
          id: "7",
          title: "Tại sao developer cần biết Regular Expression?",
          createdDate: "11/22/2020",
          shortContent:
            "Mình sẽ mở đầu bài viết với một câu châm ngôn của bác Martin Fowler mà mình nghĩ ai là Software Engineer cũng đều nên nhớ, Any fool can write code that a computer can understand. Good programmers write code that humans can understand.Tạm dịch là, Bất cứ thằng ngu nào cũng có thể...",
        },
      ],
    };
  },
  components: {
    PostSingle,
  },
  methods: {
    /**
     * Lay ve tat ca cac bai viet
     * Created by nvkhai 21.21.2022
     */
    fectch: async function () {
      try {
        var response = await postService.getAllPosts();
        if (response.data.Succes) {
          this.listPosts = response.data.data
        } else {
          throw Error('Khong lay duoc du lieu post');
        }
      } catch (error) {
        logService.post(error.message);
      }
    },
  },
  created() {
    //this.fectch();
  },
};
</script>

<style scoped>
</style>