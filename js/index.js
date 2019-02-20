$.getJSON('/JSON/packge.json', function(data){
/*функция формат даты */ 
  function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    return dd + '.' + mm;
  }
  var d = new Date(); // 30 Янв 2014
  let tm = formatDate(d);
  console.log(tm);

/*функция формат даты + 7 дней*/ 
  function formatDate7(date) {
    var dd = date.getDate() + 7;
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    return dd + '.' + mm;
  }
  var dat = new Date(); 
  let timerr = formatDate7(dat);
  console.log(timerr);

    $.each(data, function(key, val) {
      if(tm == val.data){
        $('.Widget-content').append('<div class="Widget-content_person"><div class="Widget-content_person_data"><h3>'
        + val.data +val.year+
        '</h3><span></span></div><p class="Widget-content_person_name">'+val.name+'</p></div>');
      }
      else {
        /*console.log("false");*/
      }

      if(tm < val.data && timerr > val.data) {
        $('.Widget-contentData').append('<div class="Widget-contentData_personDat"><div class="Widget-contentData_personDat_data1"><h3>'
        + val.data +val.year+
        '</h3><span class="sp"></span></div><p class="Widget-contentData_person_name1">'+val.name+'</p></div>');
      }
      else{
        console.log('false');
      }
    });
});


var xhr = new XMLHttpRequest(), data;
xhr.open('get', '/JSON/packge.json', true);
xhr.onload = function() {
    if (xhr.readyState == 4 && (~~(xhr.status / 100)) == 2) {
        dat = JSON.parse(xhr.responseText);
        for(let index in dat) {
          /*console.log(dat[index].name);*/
          let bmgg = document.querySelectorAll(".Widget-content_person_name");
          let modalBlock = document.querySelector(".modal-block_persons");
          let modalBlockLink = document.querySelector(".modal-block_link");

          for(let i = 0; i < bmgg.length; i++) {
            bmgg[i].addEventListener("click", () => {
              let moda = document.querySelector("#modal");
              moda.classList.add("active");
              if(dat[index].name === bmgg[i].textContent) {
                console.log("true");
                let elem = document.createElement("p");
                    elem.innerHTML = dat[index].name;
                let bmmmm = modalBlock.firstChild.nextSibling;
                    modalBlock.insertBefore(elem, bmmmm);

                    let el1 = document.createElement("p");
                    el1.innerHTML = dat[index].data;
                    modalBlockLink.appendChild(el1);

                    var a = document.createElement('a');
                    var linkText = document.createTextNode(dat[index].nameLink);
                    a.appendChild(linkText);
                    a.href = dat[index].link;
                    modalBlockLink.appendChild(a);

                    let el2 = document.createElement("span");
                    el2.innerHTML = dat[index].Department;
                    modalBlockLink.appendChild(el2);

                    let clos = document.querySelector("#btnClose");
                    let textModalHeader = document.querySelector(".modal-block_persons p");
                    let textModalContent = document.querySelector(".modal-block_link p");
                    let textModalContentLink = document.querySelector(".modal-block_link a");
                    let textModalContentDepartament = document.querySelector(".modal-block_link span");
                    clos.addEventListener("click", () => {
                      moda.classList.remove("active");
                      modalBlock.removeChild(textModalHeader);
                      modalBlockLink.removeChild(textModalContent);
                      modalBlockLink.removeChild(textModalContentLink);
                      modalBlockLink.removeChild(textModalContentDepartament);
                  });
              }
              else{
                console.log("false");
              }
              });
          }
          
          let bmgg2 = document.querySelectorAll(".Widget-contentData_person_name1");

          for(let i = 0; i < bmgg2.length; i++) {
            bmgg2[i].addEventListener("click", () => {
              let moda = document.querySelector("#modal");
              moda.classList.add("active");
              if(dat[index].name === bmgg2[i].textContent) {
                console.log("true");
                let elem = document.createElement("p");
                    elem.innerHTML = dat[index].name;
                let bmmmm = modalBlock.firstChild.nextSibling;
                    modalBlock.insertBefore(elem, bmmmm);

                    let el1 = document.createElement("p");
                    el1.innerHTML = dat[index].data;
                    modalBlockLink.appendChild(el1);

                    var a = document.createElement('a');
                    var linkText = document.createTextNode(dat[index].nameLink);
                    a.appendChild(linkText);
                    a.href = dat[index].link;
                    modalBlockLink.appendChild(a);

                    let el2 = document.createElement("span");
                    el2.innerHTML = dat[index].Department;
                    modalBlockLink.appendChild(el2);

                    let clos = document.querySelector("#btnClose");
                    let textModalHeader = document.querySelector(".modal-block_persons p");
                    let textModalContent = document.querySelector(".modal-block_link p");
                    let textModalContentLink = document.querySelector(".modal-block_link a");
                    let textModalContentDepartament = document.querySelector(".modal-block_link span");
                    clos.addEventListener("click", () => {
                      moda.classList.remove("active");
                      modalBlock.removeChild(textModalHeader);
                      modalBlockLink.removeChild(textModalContent);
                      modalBlockLink.removeChild(textModalContentLink);
                      modalBlockLink.removeChild(textModalContentDepartament);
                  });
              }
              else{
                console.log("false");
              }
              });
          }
        }
    }
}
xhr.send(null);