$.getJSON('static/JSON/packge.json', function(data){
  /*функция формат даты */ 
    function dateFormat(date) {
      var todayDate = date.getDate();
      if (todayDate < 10) todayDate = '0' + todayDate;
      var month = date.getMonth() + 1;
      if (month < 10) month = '0' + month;
      return todayDate + '.' + month;
    }
  
    var day = new Date(); // 30 Янв 2014
    let formatDay = dateFormat(day);
  
  /*функция формат даты + 7 дней*/ 
    function dateSeven(date) {
      var todayDate = date.getDate() + 7;
      if (todayDate < 10) todayDate = '0' + todayDate;
      var month = date.getMonth() + 1;
      if (month < 10) month = '0' + month;
      return todayDate + '.' + month;
    }
  
    let newDay = dateSeven(day);
      $.each(data, function(key, val) {
        if(formatDay == val.data){
          $('.Widget-content').append('<div class="Widget-content_person"><div class="Widget-content_person_data"><h3>'
          + val.data +val.year+
          '</h3><span></span></div><p class="Widget-content_person_name">'+val.name+'</p></div>');
        }
        if(formatDay.match(/\d\d$/ig)[0] == val.data.match(/\d\d$/ig)[0] && formatDay.match(/^\d\d/ig)[0] < val.data.match(/^\d\d/ig)[0] && val.data.match(/^\d\d/ig)[0] < newDay.match(/^\d\d/ig)[0]  ) {
          $('.Widget-contentData').append('<div class="Widget-contentData_personDat"><div class="Widget-contentData_personDat_data1"><h3>'
          + val.data +val.year+
          '</h3><span class="sp"></span></div><p class="Widget-contentData_person_name1">'+val.name+'</p></div>');
        }
      });
  });
  /*Информация о сотруднике у которого день рождение-----------------------------------------------------------------------------*/
  let xhr = new XMLHttpRequest(), data;
  xhr.open('get', 'static/JSON/packge.json', true);
  xhr.onload = function() {
      if (xhr.readyState == 4 && (~~(xhr.status / 100)) == 2) {
        arrayObject = JSON.parse(xhr.responseText);
          for(let index in arrayObject) {
            let Widget__content_person_name = document.querySelectorAll(".Widget-content_person_name");
            
            for(let i = 0; i < Widget__content_person_name.length; i++) {
              Widget__content_person_name[i].addEventListener("click", () => {
                let moda = document.querySelector("#modal");
                moda.classList.add("active");
                if(arrayObject[index].name === Widget__content_person_name[i].textContent) {
                  let newElement = document.createElement("div");
                  newElement.classList.add("newElem");
                  newElement.innerHTML = `
                    <div class="modal-block">
                      <div class="modal-block_persons">
                        <p>${arrayObject[index].name}</p><i class="fa fa-times" id="btnClose" aria-hidden="true"></i>
                      </div>
                      <div class="modal-block_link">
                      <p>${arrayObject[index].data}</p><a href="${arrayObject[index].link}">${arrayObject[index].nameLink}</a><span>${arrayObject[index].Department}</span></div>
                    </div>
                  `;
                  let modalAdd = document.querySelector(".modal")
                  modalAdd.appendChild(newElement);
  
                  let deletedElment = document.querySelector(".newElem");
                  let clos = document.querySelector("#btnClose");
  
                  clos.addEventListener("click", () => {
                    moda.classList.remove("active");
                    modalAdd.removeChild(deletedElment);
                });
                }
              });
            }
  /*Информация о сотруднике у которого скоро будет день рождение-----------------------------------------------------------------------------*/
            let widget__contentData_person_name1 = document.querySelectorAll(".Widget-contentData_person_name1");
  
            for(let i = 0; i < widget__contentData_person_name1.length; i++) {
              widget__contentData_person_name1[i].addEventListener("click", () => {
                let moda = document.querySelector("#modal");
                moda.classList.add("active");
                if(arrayObject[index].name === widget__contentData_person_name1[i].textContent) {
                  let newElement = document.createElement("div");
                  newElement.classList.add("newElem");
                  newElement.innerHTML = `
                    <div class="modal-block">
                      <div class="modal-block_persons">
                        <p>${arrayObject[index].name}</p><i class="fa fa-times" id="btnClose" aria-hidden="true"></i>
                      </div>
                      <div class="modal-block_link">
                      <p>${arrayObject[index].data}</p><a href="${arrayObject[index].link}">${arrayObject[index].nameLink}</a><span>${arrayObject[index].Department}</span></div>
                    </div>
                  `;
                  let modalAdd = document.querySelector(".modal")
                  modalAdd.appendChild(newElement);
  
                  let deletedElment = document.querySelector(".newElem");
                  let clos = document.querySelector("#btnClose");
  
                  clos.addEventListener("click", () => {
                    moda.classList.remove("active");
                    modalAdd.removeChild(deletedElment);
                });
                }
              });
            }
          }
      }
  }
  xhr.send(null);