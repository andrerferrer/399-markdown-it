// 1. import the plugin
import MarkdownIt from 'markdown-it';
// 2. create the function
const initMarkdown = () => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const markdown = new MarkdownIt();
  // if this was ruby it would look like this
  // markdown = MarkdownIt.new()

  textarea.addEventListener('keyup', (event) => {
    const markdownTranslatedIntoHTML = markdown.render(textarea.value);
    preview.innerHTML = markdownTranslatedIntoHTML;
  });
};
// 3. export the function
export { initMarkdown };