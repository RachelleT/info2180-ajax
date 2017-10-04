<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AJAX Examples</title>
    <link rel="stylesheet" href="styles.css" media="screen" />
    <script src="fetch-api.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>Simple Example using the new Fetch API</h1>
      <p>Simply click the button below to load a random quote. Take a look at the <code>fetch-api.js</code> file to see how this was achieved.</p>
      <button type="button" id="loadTextBtn" class="btn">Load Random Quote</button>

      <h2>Your Random Quote</h2>
      <blockquote id="quote"></blockquote>

      <p>To learn more about the new Fetch API, visit the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">MDN web docs: Using Fetch</a> page.</p>
    </div>
  </body>
</html>