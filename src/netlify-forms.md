---
permalink: /netlify-forms.html
eleventyExcludeFromCollections: true
---
<!DOCTYPE html>
<html>
<head><title>Forms</title></head>
<body>
  <!-- Hidden form for Netlify detection -->
  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    <input type="hidden" name="form-name" value="contact">
    <input name="bot-field">
    <input name="name" type="text">
    <input name="email" type="email">
    <select name="subject"></select>
    <textarea name="message"></textarea>
  </form>
</body>
</html>
