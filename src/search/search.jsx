
const Search = ()=>{
    let list_cite = fetch("https://github.com/umpirsky/country-list/tree/master/data")
    console.log(list_cite)
    return(
<select class="form-control" id="select">

</select>
    )
}
export default Search;