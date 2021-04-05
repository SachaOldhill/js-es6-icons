function getIcons() {
  return [
    {
      name: "cat",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "crow",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dog",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dove",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "horse",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "user-astronaut",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-graduate",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-ninja",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-secret",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
  ];
}

function getColor() {
  return ["blue","black","red"];
}

function print(array){
  const container = $(".icons");
  container.html('');
  array.forEach(elem => {
   const iconHtml = `
   <div>
       <i class="${elem.family} ${elem.prefix}${elem.type}"
       style="color:${elem.color}"></i>
       <div class="title">${elem.name.toUpperCase()}</div>
   </div>
   `;
   container.append(iconHtml);

  });
}

function getType(array) {
  const types = [];
  array.forEach(elem => {
    if (!types.includes(elem.type)) {
      types.push(elem.type);
    }
  });
  console.log(types);
  return types;
}
function colorIcons(array, types, colors) {
  //map cicla e crea un nuovo array
  // const newArray = array.map(elem => {
  //   const iconType = elem.type; //prendo le icone
  //   const indexType = types.indexOf(iconType); //diamo un index
  //   const color = colors[indexType];
  //   elem.color = color;
  //   console.log(iconType, indexType);
  //array.mmap ha sempre bisogno di return
  //   return elem;
  // });
  // return newArray;
  //con for each cambiamo l'array di partenza
  array.forEach(elem => {
    // prendiamo le tipologie di icone
    const iconType = elem.type;
    // mettiamo un indice per la tipologia
    const indexType = types.indexOf(iconType);
    // aggiungiamo il colore in base all'indice
    const color =  colors[indexType];
    elem.color = color;
  });
  return array;
}
function addOptions(types) {
  const select = $('#type');
  types.forEach(elem => {
    const optionHtml = `
    <option value='${elem}'>${elem}</option>
    `;
    select.append(optionHtml);
  });
}
function filterArray(array, key){
  //facciamo un array nuovo, aggiungiamo gli elementi
  //di una key fino a quando non finiscono
    const filteredArray = array.filter(elem => {
    if(elem.type == key){
      return elem;
    }
  });
  return filteredArray;
}
function init(){
  const icons = getIcons();
  const colors = getColor()
  const types = getType(icons);
  //oggetto copiato con aggiunta di nuovo elemento
  //const copyItem = [...icons];
  //copyItem.push('newItem');
  //console.log(copyItem);
  const coloredIcons = colorIcons(icons, types, colors);
  console.log(coloredIcons);
  addOptions(types);
  const select = $('#type');
  //la select lancia l'evento
  select.change(function(event){
    //console.log('change',event);
    const currentType = $(this).val();
    //console.log(currentType);
    //filtriamo le icone in base al tipo
    if(types.includes(currentType)){
      filteredIcon = filterArray(coloredIcons, currentType);
      print(filteredIcon)
    } else {
      print(coloredIcons);
    }
    console.log(filteredIcon);
  });
  print(icons);
}
$(init);
