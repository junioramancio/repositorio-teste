import {useState} from "react";

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('')
    const [category,setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category){
            alert('nao pode deixar campos em branco')
        }else {
    
        addTodo(value,category)

        //limpartodo
        setValue('')
        setCategory('')
        }
    }
    return (
        <div className="todo-form">
            <h2>Criar tarefas:</h2>
            <form onSubmit={handleSubmit}>
                <input 
                   type = "text"
                   placeholder="Digite o titulo"
                   onChange={(e) =>setValue(e.target.value)}
                   value = {value}


                />
                <select 
                 value={category} 
                 onChange={(e) =>setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudo">Estudos</option>
                </select>
                <button  type="submit">Criar Tarefas</button>
            </form>

        </div>
    )
}

export default TodoForm