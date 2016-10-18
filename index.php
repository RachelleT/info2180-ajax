<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AJAX Example</title>
    <link rel="stylesheet" href="styles.css" media="screen" />
    <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
    <script src="app.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>Name Search</h1>
      <form id="myform" action="process.php" method="post">
        <div class="form-field">
          <input type="text" name="q" id="q" placeholder="Enter a name" />
          <span>Try entering a name such as Yannick, Mary, Tom or Marsha.</span>
        </div>
        <button id="searchBtn" name="searchBtn" class="btn">Search</button>
        <button id="jQuerySearchBtn" name="jQuerySearchBtn" class="btn">jQuery Search</button>
      </form>
      <hr />
      <h2>Search Results</h2>
      <div id="results"></div>
    </div>
  </body>
</html>
