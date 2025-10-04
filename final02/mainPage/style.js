let btnList = document.querySelectorAll(".header-navtab-btn");
let contentList =  document.querySelectorAll(".tab-content-item");

btnList.forEach((btn) => {
    btn.addEventListener("click",(event)=>{
        //1.duyệt danh sách các nút và xoá actived
        btnList.forEach((_btn)=>{
            _btn.classList.remove("actived");
        });
        //2.cài actived vào nút vừa nhấn (event.taget)
        event.target.classList.add("actived");
        //3.lấy id vửa thằng vừa nhấn
        let id  = event.target.id;
        //4.duyệt danh sách content và xoá actived sau đó cài actived vào content có id
        //tương ứng
        contentList.forEach((content) => {
            content.classList.remove("actived");
        });
        //
        document.querySelector(`.tab-content-item[data-id='${id}']`).classList.add("actived");
    });
});