## Домашна 10

### Задача 1.

Да се креира нов фолдер со име “modules”. Овој фолдер треба да содржи 3 фајлови:

- index.html
- main.js
- movies.js

Во movies.js фајлот, направете една низа од најмалку 5 филмови. Истата низа да се употреби во main.js каде што ќе биде потребно со помош на JavaScript да креирате неподредена листа од филмовите и истите да ги прикажете во прелистувачот.

### Задача 2.

Во продолжение е даден следниот HTML документ:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercise</title>
  </head>
  <body>
    <div id="bands-container"></div>
    <script>
      const popularBands = [
        "The Beatles",
        "Queen",
        "Led Zeppelin",
        "ABBA",
        "BTS",
        "Nirvana",
        "U2",
        "Metallica",
        "Coldplay",
        "Pink Floyd",
      ]

      localStorage.setItem("popular-bands", JSON.stringify(popularBands))
    </script>
  </body>
</html>
```

Ваша задача е да направите едно копче “Show Popular Bands” koe што при клик ќе ги покаже бендовите кои што се зачувани во localStorage и едно копче “Clear Popular Bands” кое што ќе ги тргне елементите од прелистувачот и воедно ќе ги избрише истите од localStorage.

### Задача 3.

Во продолжение ви се дадени низа од бои и еден API endpoint koj што при секој повик, враќа различен цитат од познати историски личности:

- Бои: [
  "#3498db",
  "#e74c3c",
  "#2ecc71",
  "#f39c12",
  "#9b59b6",
  "#1abc9c",
  ]

- API endpoint: https://api.quotable.io/quotes/random

Ваша задача е да направите едноставна веб-страница што генерира случајни(random) цитати и динамички ја ажурира бојата на позадината на страната(body) на секои 5 секунди.
