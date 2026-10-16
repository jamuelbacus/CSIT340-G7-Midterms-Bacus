import { useState } from "react";
import RepoCard from "./RepoCard";

function Repositories() {
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  const repositories = [
    {
      name: "portfolio",
      description: "My personal page built with React.",
      language: "JavaScript",
      commits: 48,
      handleStar: handleStarPortfolio,
      stars: portfolioStars,
    },
    {
      name: "todo-api",
      description: "A small REST API for a to-do list.",
      language: "Java",
      commits: 31,
      handleStar: handleStarTodo,
      stars: todoStars,
    },
    {
      name: "dotfiles",
      description: "My terminal and editor settings.",
      language: "Shell",
      commits: 12,
      handleStar: handleStarDotfiles,
      stars: dotfilesStars,
    },
  ];

  return (
    <main className="grid grid-cols-3 gap-8 px-20 pt-8">
      {repositories.map((repo) => {
        return (
          <RepoCard
            key={repo.name}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            commits={repo.commits}
            handleStar={repo.handleStar}
            stars={repo.stars}
          />
        );
      })}
    </main>
  );
}

export default Repositories;
