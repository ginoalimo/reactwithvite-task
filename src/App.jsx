import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-[#1C3A57] h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
      <footer>
        <p className="text-white text-center">
          <small>
            By{" "}
            <a href="https://https://www.instagram.com/ginoa.limo/">
              Gino A. Limo
            </a>
            &copy; 2022
          </small>
        </p>
      </footer>
    </main>
  );
}

export default App;
