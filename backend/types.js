import zod from 'zod';

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

export default createTodo;