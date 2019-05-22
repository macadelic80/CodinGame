
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

function get_index_parenthese(string, index)
{
  let up = 0;
  for (let i = index + 1; i < string.length; i++)
    if (string[i] == ')' && !up)
       return (colorize_index(string, [index, i], "red"));
    else
       up += string[i] == '(' ? 1 : (string[i] == ')' ? -1 : 0)
  return (-1);
}

function get_element(string)
{
  let obj = {};
 if (string[0] == "'"){
    obj.value = String(string.substr(1, string.length - 2));
    obj.type = "string";
  } else if (string[0] == 'n'){
    obj.value = null;
    obj.type = "null";
  } else if (string[0] == 't'){
    obj.value = true;
    obj.type = "bool";
  } else if (string[0] == 'f'){
    obj.value = false;
    obj.type = "bool";
  } else if (string[0] == '('){
   obj.value = get_element(String(string.substr(1, string.length - 2)));
   obj.type = "block";
  } else if (Number(string[0]) != NaN){
    obj.value = Number(string.substr(0));
    obj.type = "number";
  }
  return obj;
}

let get_line = () => {
   let lines = [];
   let N = parseInt(readline());
   for (let i = 0; i < N; i++) {
       lines.push(readline())
   }
   return lines;
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
