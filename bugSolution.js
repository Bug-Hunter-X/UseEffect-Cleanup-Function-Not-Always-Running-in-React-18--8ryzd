```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let id = setTimeout(() => {
      console.log('Count:', count);
    }, 1000);  // Simulate an asynchronous operation

    return () => {
      clearTimeout(id);
      console.log('Cleanup');
    };
  }, [count, isMounted]);

  useEffect(() => {
    return () => {
        setIsMounted(false);
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```