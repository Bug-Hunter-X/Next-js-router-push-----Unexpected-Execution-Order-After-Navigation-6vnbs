```javascript
import {useRouter} from 'next/router';

const MyComponent = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // Perform some action after navigation
    console.log('Navigation completed!'); 
  };

  return (
    <button onClick={handleClick}>
      Go to Another Page
    </button>
  );
};

export default MyComponent;
```