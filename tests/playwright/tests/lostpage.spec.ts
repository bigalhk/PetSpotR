// create playwright tests for LostPet.razor
// import dependencies
import { test, expect } from '@playwright/test';

// test that h2 element with the words "Step 1: Tell us about your pet and how to contact you" renders
test('h2 element renders', async ({ page }) => {
    await page.goto('https://localhost:5001/LostPet');
    await page.waitForSelector('h2');
    expect(await page.innerText('h2')).toBe("Step 1: Tell us about your pet and how to contact you");
    });

// test that dropdown menu renders
test('dropdown menu renders', async ({ page }) => {
    await page.goto('https://localhost:5001/LostPet');
    await page.waitForSelector('select');
    expect(await page.innerText('select')).toBe("Select");
    });

// test that you can upload images when you click Choose Files button
test('upload images', async ({ page }) => {
    await page.goto('https://localhost:5001/LostPet');
    await page.waitForSelector('input[type=file]');
    const input = await page.$('input[type=file]');
    await input.setInputFiles('C:/Users/Owner/Desktop/lostpet.jpg');
    await page.waitForSelector('img');
    expect(await page.innerText('img')).toBe("lostpet.jpg");
    });





