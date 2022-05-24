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

async function getPostContent(url = '') {
  const response = await fetch(url);
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('text/markdown')) {
    return 'file type not match ⚠️';
  }
  const value = await response.text();
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(value).value;
}

export default getHomeHTML;
export { getPostContent };
