

import{test, expect} from '@playwright/test';


test('My first Post', async({request}) => {

 const response =  await request.post('https://jsonplaceholder.typicode.com/posts', {
    data:{
         title: "My First Post",
         body: "Learning POST API",
         userId: 1
    }
 })
})
