# Mobile setup



## Biggest mobile screens, one breakpoint.

### Height always 100vh on mobile. 



```css

body {
    max-width: 480px;  
    height: 100%;
  	
}


@media (min-width: 481px) and (max-width: 768px) {
    body {
        max-width: 768px;
    }
}

```

