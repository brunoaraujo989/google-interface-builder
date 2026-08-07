<?php
// Interface do Google em PHP + HTML (tema claro e escuro)
// Uso: coloque esta pasta no seu servidor PHP e acesse index.php
$tema = isset($_COOKIE['tema']) && $_COOKIE['tema'] === 'dark' ? 'dark' : 'light';
$q = isset($_GET['q']) ? trim($_GET['q']) : '';
if ($q !== '') {
  header('Location: https://www.google.com/search?q=' . urlencode($q));
  exit;
}
$logo = [
  ['G', 'g-blue'], ['o', 'g-red'], ['o', 'g-yellow'],
  ['g', 'g-blue'], ['l', 'g-green'], ['e', 'g-red'],
];
?>
<!DOCTYPE html>
<html lang="pt-BR" class="<?= $tema === 'dark' ? 'dark' : '' ?>">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Google</title>
  <meta name="description" content="Pesquise na web com a interface do Google: busca por texto, voz e imagem.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Roboto:wght@400;500&display=swap">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="topbar">
    <a href="https://mail.google.com">Gmail</a>
    <a href="https://images.google.com">Imagens</a>
    <button id="toggle-tema" class="icon-btn" aria-label="Alternar tema">
      <span class="only-light">🌙</span><span class="only-dark">☀️</span>
    </button>
    <button class="icon-btn" aria-label="Apps do Google">⋮⋮⋮</button>
    <button class="avatar" aria-label="Conta do Google">A</button>
  </header>

  <main>
    <h1 class="logo">
      <?php foreach ($logo as $l): ?><span class="<?= $l[1] ?>"><?= $l[0] ?></span><?php endforeach; ?>
    </h1>

    <form class="search" method="get" action="index.php">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" name="q" aria-label="Pesquisar" autocomplete="off"
               placeholder="Pesquisar no Google ou digitar um URL">
        <div class="tools">
          <button type="button" class="icon-btn" aria-label="Teclado virtual">⌨</button>
          <button type="button" class="icon-btn blue" aria-label="Pesquisa por voz">🎙</button>
          <button type="button" class="icon-btn blue" aria-label="Pesquisa por imagem">📷</button>
          <button type="button" class="ai-btn">✦ Modo IA</button>
        </div>
      </div>

      <div class="actions">
        <button type="submit" class="btn">Pesquisa Google</button>
        <a class="btn" href="https://www.google.com/doodles">Estou com sorte</a>
      </div>
    </form>

    <p class="langs">
      O Google está disponível em:
      <a href="#">English</a>
      <a href="#">Español</a>
    </p>
  </main>

  <footer>
    <div class="country">Brasil</div>
    <div class="links">
      <nav>
        <a href="#">Sobre</a><a href="#">Publicidade</a><a href="#">Negócios</a>
        <a href="#">Como funciona a Pesquisa</a>
      </nav>
      <nav>
        <a href="#">Privacidade</a><a href="#">Termos</a><a href="#">Configurações</a>
      </nav>
    </div>
  </footer>

  <script>
    document.getElementById('toggle-tema').addEventListener('click', function () {
      var dark = document.documentElement.classList.toggle('dark');
      document.cookie = 'tema=' + (dark ? 'dark' : 'light') + ';path=/;max-age=31536000';
    });
  </script>
</body>
</html>
