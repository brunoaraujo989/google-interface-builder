import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Grid3x3, Mic, Camera, Keyboard, Sparkles, Search } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Google" },
      {
        name: "description",
        content: "Pesquise na web com a interface do Google: busca por texto, voz e imagem.",
      },
      { property: "og:title", content: "Google" },
      {
        property: "og:description",
        content: "Pesquise na web com a interface do Google: busca por texto, voz e imagem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const logo = [
  { c: "G", color: "text-g-blue" },
  { c: "o", color: "text-g-red" },
  { c: "o", color: "text-g-yellow" },
  { c: "g", color: "text-g-blue" },
  { c: "l", color: "text-g-green" },
  { c: "e", color: "text-g-red" },
];

function Index() {
  const [query, setQuery] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="flex items-center justify-end gap-5 px-6 py-4 text-sm">
        <a href="https://mail.google.com" className="hover:underline">
          Gmail
        </a>
        <a href="https://images.google.com" className="hover:underline">
          Imagens
        </a>
        <button aria-label="Apps do Google" className="rounded-full p-2 hover:bg-accent">
          <Grid3x3 className="size-5 text-muted-foreground" />
        </button>
        <button
          aria-label="Conta do Google"
          className="size-8 rounded-full bg-g-blue text-sm font-medium text-background"
        >
          A
        </button>
      </header>

      <main className="flex flex-1 flex-col items-center px-6 pt-[14vh]">
        <h1 className="font-display select-none text-[5.5rem] leading-none tracking-tight sm:text-[6.5rem]">
          {logo.map((l, i) => (
            <span key={i} className={l.color}>
              {l.c}
            </span>
          ))}
        </h1>

        <form onSubmit={submit} className="mt-9 w-full max-w-[584px]">
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-search transition-colors focus-within:bg-input hover:bg-input">
            <Search className="size-5 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Pesquisar"
              className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
              placeholder="Pesquisar no Google ou digitar um URL"
            />
            <div className="flex shrink-0 items-center gap-1">
              <button type="button" aria-label="Teclado virtual" className="rounded-full p-2 hover:bg-accent">
                <Keyboard className="size-5 text-muted-foreground" />
              </button>
              <button type="button" aria-label="Pesquisa por voz" className="rounded-full p-2 hover:bg-accent">
                <Mic className="size-5 text-g-blue" />
              </button>
              <button type="button" aria-label="Pesquisa por imagem" className="rounded-full p-2 hover:bg-accent">
                <Camera className="size-5 text-g-blue" />
              </button>
              <button
                type="button"
                className="ml-1 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-sm text-foreground hover:bg-secondary"
              >
                <Sparkles className="size-4 text-g-blue" />
                Modo IA
              </button>
            </div>
          </div>

          <div className="mt-7 flex justify-center gap-3">
            <button
              type="submit"
              className="rounded-md bg-secondary px-4 py-2.5 text-sm text-foreground shadow-search hover:bg-accent"
            >
              Pesquisa Google
            </button>
            <button
              type="button"
              onClick={() => (window.location.href = "https://www.google.com/doodles")}
              className="rounded-md bg-secondary px-4 py-2.5 text-sm text-foreground shadow-search hover:bg-accent"
            >
              Estou com sorte
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-muted-foreground">
          O Google está disponível em:{" "}
          <a href="#" className="text-g-blue hover:underline">
            English
          </a>{" "}
          <a href="#" className="text-g-blue hover:underline">
            Español
          </a>
        </p>
      </main>

      <footer className="mt-10 border-t border-border text-sm text-muted-foreground">
        <div className="border-b border-border px-6 py-3">Brasil</div>
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3">
          <nav className="flex flex-wrap gap-6">
            <a href="#" className="hover:underline">
              Sobre
            </a>
            <a href="#" className="hover:underline">
              Publicidade
            </a>
            <a href="#" className="hover:underline">
              Negócios
            </a>
            <a href="#" className="hover:underline">
              Como funciona a Pesquisa
            </a>
          </nav>
          <nav className="flex flex-wrap gap-6">
            <a href="#" className="hover:underline">
              Privacidade
            </a>
            <a href="#" className="hover:underline">
              Termos
            </a>
            <a href="#" className="hover:underline">
              Configurações
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
