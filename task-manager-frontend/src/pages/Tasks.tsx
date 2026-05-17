import BoardComponent from "../components/boardComponent"

const Tasks: React.FC = () => {
    return(
        <div className="min-h-screen bg-transparent relative">
        

        <header>
          
        </header>
        {/* Main Content :D */}
        <main className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="text-center px-2 py-2 bg-transparent border border-slate-400 rounded-lg w-fit">
              <h1 className="font-serif text-lg">
                Sophia's Task Manager
              </h1>
            </div>
          </div>
          <div className="m-5 flex items-center justify-between border border-slate-400 rounded-lg">
            <input 
            placeholder="Enter task name..."
            className="font-serif px-2 focus:outline-none w-130"></input>
            <button className="m-2 rounded-lg px-2 py-2 font-serif text-white bg-slate-500">
              Create Task
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <BoardComponent text="Urgent" color="text-red-400" />
            <BoardComponent text="To-Do" color="text-yellow-400"/>
            <BoardComponent text="Can Wait" color="text-emerald-400"/>
          </div>
        </main>
      </div>
    )
};

export default Tasks;