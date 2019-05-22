
/*
"'users'=(('id'=10;'name'='Serge';'roles'=('visitor';'moderator'));('id'=11;'name'='Biales');true)"
'users'=
(
    (
        'id'=10;
        'name'='Serge';
        'roles'=
        (
            'visitor';
            'moderator'
        )
    );
    (
        'id'=11;
        'name'='Biales'
    );
    true
)
*/
let block = [];
let extract_block = (s) => (s.split(';').map(x=>get_element(x)))
function colorize_index(string, tab, color)
{
  let array = [];
  array = [...string].map((x,y)=>"%c" + x)
  console.log(array.join(""), ...array.map((x,y)=>{
    if (~tab.indexOf(y))
      return ("color:" + color)
    else
        return ("color:white")
  }))
  return tab[1]
}

function clean_empty_elem(array)
{
   let copy = [];
   for (var i = 0; i < array.length; i++){
       let line = array[i];
       if (line.trim().length)
           copy.push(line.trim())
   }
   return copy;
 }


(() => {
   //let lines = get_line();
   let lines = exemple;
   lines = clean_empty_elem(lines);
   lines = lines.join('');
   console.log(lines);


})();
