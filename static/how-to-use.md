# How to Use
Nimblog requires only a few lines of HTML to deploy and is suitable for lightweight bloggers.

* Runs on static website hosting platform, such as [GitHub Pages](https://pages.github.com/).
* Easy to customize themes, as you only need to bring in your own CSS files.
* Use [heti](https://github.com/sivan/heti) to optimize the layout.

I recommend the directory structure below.

```
index.html
your_essay_1.md
your_essay_2.md
your_pic_1.jpg
...
```

Then paste the following content in `index.html`.

```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <link rel="stylesheet" href="...">
    <meta charset='UTF-8'>
    <title>Nimblog</title>
</head>
<body>
# [Your Blog](/)
- [your essay 1](your_essay_1.md)
- [your essay 2](your_essay_2.md)
<script type='module' src='...'></script>
</body>
</html>
```

As you can see, you can write Markdown directly in `<body>` and link to your Markdown documents. Once you're done, just upload this directory to a static website hosting platform.

## Live Preview
You can edit online with StackBlitz.
