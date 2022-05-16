import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

function getHomeHTML(homePage = document.body) {
  const homeContent = homePage.innerText;
  const homeHTML = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(homeContent);
  return homeHTML;
}

export default getHomeHTML;
