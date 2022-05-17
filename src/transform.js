import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

function getHomeHTML(homePage = document.body) {
  const homeContent = homePage.innerText;
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(homeContent).value;
}

function getPostContent(postsContent = {}, url = '') {
  fetch(url)
    .then((response) => response.text())
    .then((value) => {
      console.log(value);
    });
}

export default getHomeHTML;
export { getPostContent };
