var cont = document.getElementById("cont");
var template = ``;

for (let i = 1; i <= 6; i++) {
  template += `<div class="card col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card-img">
                    <img src="img/image${i}.jpg" alt="">
                </div> 
                <div class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem minus, ad sit laboriosam saepe quaerat qui, exercitationem nihil, eligendi recusandae enim. Quas dolore natus velit, tenetur soluta id optio.</div>
            </div>`;
}
cont.innerHTML = template;
