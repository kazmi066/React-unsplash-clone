# unsplash-clone
A responsive Unsplash clone with React.
Uses: 
 - Context Api
 - Unsplash Api
 - Responsive Grid

## Demo Screenshot <br/>
![](https://github.com/kazmi066/unsplash-clone/blob/master/uploads/Screenshot%202021-11-27%20at%2009-12-11%20React%20App(1).png)

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

*Deployed here: *<br>
[https://unsplash-clone-d3.netlify.app/](https://unsplash-clone-d3.netlify.app/)
