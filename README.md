# unsplash-clone
A responsive Unsplash clone with React.
Uses: 
 - Context Api
 - Unsplash Api
 - Responsive Grid

*You have to grab your API key from [unsplash](https://unsplash.com/developers)* <br>

Place that key in your headers to get the results: <br>
in my case, I used axios:
```
  axios.defaults.headers.common["Authorization"] ="Client-ID key";
  ```

### Endpoints used:
>(Search image) https://api.unsplash.com/search/photos?per_page=50&query= <br>
>(Multiple images)https://api.unsplash.com/photos/random/?count=50 <br>
>(Single Random image) https://source.unsplash.com/collection/220381/1600x900

*Deplyed here:*
[https://unsplash-clone01.herokuapp.com/](https://unsplash-clone01.herokuapp.com/)
