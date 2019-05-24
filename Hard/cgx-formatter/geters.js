
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

function split_block(string)
{
  let first = string.split(";").filter(x => x.length)
  let shrink = []
  let im = 0, k = -1
  first.forEach((x, i) => {
    let n = (x.match(/^\(+/) || [""])[0].length
    if(n){
      if(!im) k = i
      im += n
    }
    let j = (x.match(/\)+$/) || [""])[0].length
    if(im && j){
      if(!(im -= j)){
        let z = first.slice(k, i + 1).join(";").substr(1)
        return shrink.push(split_block(z.substr(0, z.length - 1)))
      }
    }
    if(!im){
      shrink.push(x)
    }
  })
  return shrink;
}

function get_element(string)
{
  let obj = {};
  if (typeof(string) == 'object'){
   obj.value = string.map(x=>get_element(x));
   obj.type = "block";
 } else if (string[0] == "'"){
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
