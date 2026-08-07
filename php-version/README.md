# Interface do Google — PHP + HTML

Versão standalone (sem React) com os **dois temas**: claro e escuro.

## Arquivos
- `index.php` — página + tratamento da busca (redireciona para o Google)
- `style.css` — todo o design system (tema claro em `:root`, escuro em `html.dark`)

## Como rodar
```bash
cd php-version
php -S localhost:8000
```
Abra http://localhost:8000

## Tema
- Botão 🌙 / ☀️ no topo alterna o tema
- A escolha fica salva num cookie `tema` (1 ano), então o PHP já renderiza o tema certo no primeiro carregamento

## Hospedagem
Suba a pasta `php-version` para qualquer hospedagem com PHP (Hostinger, cPanel, etc.).
