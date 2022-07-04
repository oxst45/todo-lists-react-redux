import {TasksType} from '../App6';
import {addTaskAC, changeTaskIsDoneAC, changeTaskTitleAC, deleteTaskAC, tasksReducer} from './tasks-reducer';
import {v1} from 'uuid';


test('Correct task of todolist should be deleted', () => {
    // 1. Входные данные (тестовые данные)
    const testState: TasksType = {
        'todolistID-1': [
            {id: '1', title: 'html', isDone: true},
            {id: '2', title: 'css', isDone: true},
            {id: '3', title: 'js', isDone: false},
        ],
        'todolistID-2': [
            {id: '1', title: 'apple juice', isDone: false},
            {id: '2', title: 'orange', isDone: true},
            {id: '3', title: 'milk', isDone: false},
        ]
    }
    // 2. Тестирование функции (вызов функции)


    const newState = tasksReducer(testState, deleteTaskAC('todolistID-2', '3'));

    // 3. Проверка результатов (ожидания)
    // expect(newState['todolistID-1'].length).toBe(3);
    // expect(newState['todolistID-2'].length).toBe(2);

    expect(newState).toEqual({
        'todolistID-1': [
            {id: '1', title: 'html', isDone: true},
            {id: '2', title: 'css', isDone: true},
            {id: '3', title: 'js', isDone: false},
        ],
        'todolistID-2': [
            {id: '1', title: 'apple juice', isDone: false},
            {id: '2', title: 'orange', isDone: true},
        ]
    })
})

// TDD принцип - Test Driven Development
// Add task to todolist

test('New task should be added to beginning of the state', () => {
    // 1. Входные данные
    const testState: TasksType = {
        'todolistID-1': [
            // {id: 'fds34253-gfs-25424-fsd', tech: 'react', isDone: false},
            {id: '1', title: 'html', isDone: true},
            {id: '2', title: 'css', isDone: true},
            {id: '3', title: 'js', isDone: false},
        ],
        'todolistID-2': [
            {id: '1', title: 'apple juice', isDone: false},
            {id: '2', title: 'orange', isDone: true},
            {id: '3', title: 'milk', isDone: false},
        ]
    }
    // 2. Тестируемая функция
    const id = v1();
    const newState = tasksReducer(testState, addTaskAC('todolistID-1', id, 'react'))

    // 3. Проверка результата (ожидания)
    expect(newState['todolistID-1'].length).toBe(4)
    expect(newState['todolistID-2'].length).toBe(3)

    // expect(newState['todolistID-1'][0].id).toBeDefined()
    expect(newState['todolistID-1'][0].id).toBe(id)
    expect(newState['todolistID-1'][0].title).toBe('react')
    expect(newState['todolistID-1'][0].isDone).toBe(false)
})

// Change Title
// Change status (checkbox)

test('Correct task title should be changed', () => {
    const testState: TasksType = {
        'todolistID-1': [
            {id: '1', title: 'html', isDone: true},
            {id: '2', title: 'css', isDone: true},
            {id: '3', title: 'js', isDone: false},
        ],
        'todolistID-2': [
            {id: '1', title: 'apple juice', isDone: false},
            {id: '2', title: 'orange', isDone: true},
            {id: '3', title: 'milk', isDone: false},
        ]
    }

    const newTestState = tasksReducer(testState, changeTaskTitleAC('todolistID-2', '1', 'chocolate'))

    expect(newTestState).toEqual(
        {
            'todolistID-1': [
                {id: '1', title: 'html', isDone: true},
                {id: '2', title: 'css', isDone: true},
                {id: '3', title: 'js', isDone: false},
            ],
            'todolistID-2': [
                {id: '1', title: 'chocolate', isDone: false},
                {id: '2', title: 'orange', isDone: true},
                {id: '3', title: 'milk', isDone: false},
            ]
        }
    )
})

test('Correct task status should be changed', () => {
    const testState: TasksType = {
        'todolistID-1': [
            {id: '1', title: 'html', isDone: true},
            {id: '2', title: 'css', isDone: true},
            {id: '3', title: 'js', isDone: false},
        ],
        'todolistID-2': [
            {id: '1', title: 'apple juice', isDone: false},
            {id: '2', title: 'orange', isDone: true},
            {id: '3', title: 'milk', isDone: false},
        ]
    }


    const newState = tasksReducer(testState, changeTaskIsDoneAC('todolistID-2', '1', true))

    expect(newState).toEqual(
        {
            'todolistID-1': [
                {id: '1', title: 'html', isDone: true},
                {id: '2', title: 'css', isDone: true},
                {id: '3', title: 'js', isDone: false},
            ],
            'todolistID-2': [
                {id: '1', title: 'apple juice', isDone: true},
                {id: '2', title: 'orange', isDone: true},
                {id: '3', title: 'milk', isDone: false},
            ]
        }
    )
})





// delete todolist -> DELETE (filter)
// add todolist -> ADD (spread)
// update filter -> UPDATE (map)
// update todolist title -> UPDATE (map)



