import React from 'react'

export default function page() {
    function getAPI(){
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error:', error));
    }
    getAPI()
  return (
    <div>page</div>
  )
}
