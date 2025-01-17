# React 18+ useEffect Cleanup Issue

This repository demonstrates a potential issue with the `useEffect` cleanup function in React 18 and later versions.  Under certain circumstances, particularly when dealing with asynchronous operations, the cleanup function might not execute if the component unmounts before the asynchronous task is complete.

## Problem

The provided `bug.js` file contains a `MyComponent` which utilizes `useEffect` to log the count and perform cleanup. If the component is unmounted rapidly, the cleanup may be skipped. 

## Solution

The `bugSolution.js` offers a refined approach, using a flag to manage the asynchronous operation and ensuring cleanup occurs even upon unmounting.

## How to reproduce

1. Clone the repository.
2. Run `npm install`
3. Run `npm start` (or your preferred start command)
4. Rapidly click the button multiple times and quickly navigate away from the page (to simulate unmounting) to see if the cleanup is reliably running.
