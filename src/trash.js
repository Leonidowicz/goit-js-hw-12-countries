/*----------Попытка распарсить весь объект-------------------
   let mainLi = '';
    let list02 = ''
    let objInObj = ''
    let objUl = ''
    for (let key in data[0]) {if (Array.isArray(data[0][key])) {list02 = data[0][key].map((elem) => {
      let objValue = ''
            if (typeof elem === 'object') {for (let value in elem) {objValue += `<li><p><b>${value}:</b></p><span> "${elem[value]}"</span></li>`}
              elem = `<li><p><b>${key}: </b></p><ul>${objValue}</ul></li>`}
            return `<li>"${elem}"</li>`}).join('');
        let markupUl02 =`<li><p><b>${key}:</b></p><ul>${list02}</ul></li>`
        mainLi += markupUl02}
      console.log("~ mainLi", mainLi)
      if (typeof key === 'object' && !(Array.isArray(data[0][key])) && data[0][key].length > 1) {
        for (let keyObj in data[0][key]) {objUl += `<li><p><b>---${data[0][key]}:</b></p><span> "${[keyObj]}"</span></li>`}
        objInObj = `<li>  <p><b>${key}:</b></p>  <ul>${objUl}</ul>  </li>`
        mainLi += objInObj} else {let list01 = `<li><p><b>${key}: </b></p><span> "${data[0][key]}"</span></li>`
        mainLi += list01}
      markup = `<h1>${data[0].name}</h1>
              <ul>${mainLi}</ul>  `
    }--------------------неудачно-----------------*/
