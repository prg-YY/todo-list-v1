import React from "react"
import { BsFillTrashFill } from "react-icons/bs"

const List = ({ todoList, setTodo }) => {
  const displayList = () => {
    return (
      <div>
        {todoList.map((item) => {
          return (
            <div className="task_item">
              <li>
                {item.todo}
                <button
                  onClick={() => {
                    setTodo(todoList.filter((i) => i.id !== item.id))
                  }}
                >
                  <BsFillTrashFill />
                </button>
              </li>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div className="list_container">
      <ul>{displayList()}</ul>
    </div>
  )
}

export default List
