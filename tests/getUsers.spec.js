
import { test, expect } from '@playwright/test';

test('Get Employye detail', async ({ request }) => {

    const response = await request.get("https://dummy.restapiexample.com/api/v1/employees")
    console.log(response);
     expect(response.status()).toBe(200);
     
    const responseBody = await response.json()

    console.log(responseBody.data[1].employee_name)
    console.log(responseBody.data[4].employee_age)
   
})