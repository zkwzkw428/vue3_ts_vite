import { reactive } from "vue";
import axios from "axios";
export default function () {
  let initData = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg",
  ]);
  function getDogs() {
    axios
      .get("https://dog.ceo/api/breed/pembroke/images/random")
      .then(({ data }) => {
        // console.log(data);
        initData.push(data.message);
      });
  }
  return { initData, getDogs };
}
