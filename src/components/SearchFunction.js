import Search from '../Search'


const SearchFunc = () => {
    console.log('executed')
    var type_timer;
    var finished_writing_interval = 100;
    var my_input = document.getElementById("search_input");
    
    //Start timeout when user start typing
    my_input.addEventListener('keyup', function () {
      clearTimeout(type_timer);
      type_timer = setTimeout(finished_typing, finished_writing_interval);
    });
    
    //Clear timeout on key down event
    my_input.addEventListener('keydown', function () {
      clearTimeout(type_timer);
    });
    
    //This function runs when user has finished writing in input
    function finished_typing () {
        console.log("User finished typing");
        //Do something here ...
    }
    
}
export default SearchFunc