
orders_list="";
order_modal="";
height=100,total=0;
orders=[];
var socket = io('http://localhost:8000');
socket.on('connect', function() {
  socket.emit('name', {name: 'banhang'});
})
socket.on("du_lieu",function(order){
  console.log('data: ', order);
  orders.push(order);

  var $order, $orders, i, x;
  $orders = $(".orders");
  $order = `<div class="note">
                <div class="note-inner" style="height:` + height + `px;width:`+height+`px" data-toggle="modal" data-target="#Order_detail`
                +orders.length+`"><span style="font-size:50px;">`+order[0].tableID+`</span>
                </div>
             </div>`;
    $orders.append($order);
  // // return $('.notes').isotope({
  // //   itemSelector: '.note',
  // //   layoutMode: 'vertical'
  // });
    order_modal+=`<div class="modal fade" id="Order_detail`+orders.length+`" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header" style="background-color:#2196F3">
          <h4 class="modal-title">Order details</h4>
        </div>
        <div class="modal-body">
            <div class="container-fluid" style="text-align: center;">
              <div class="row">
                <div class="col-md-1 center-margin">
                  <h6>TABLE</h6>
                </div>
                <div class="col-md-4 center-margin">
                  PRODUCT
                </div>
                <div class="col-md-2 center-margin">
                  <h6>NUMBER</h6>
                </div>
                <div class="col-md-2 center-margin">
                  <h6>PRICE</h6>
                </div>
                <div class="col-md-2 center-margin">
                  <h6>TOTAL</h6>
                </div>
                <div class="col-md-1 center-margin">
                  <br>
                </div>
              </div>
              <div id="order_products`+orders.length+`">`;
              for (var j = 1; j < order.length; j++) {
                total=0;
                total+=order[j].ProductPrice*order[j].number;
                console.log(total);
                order_modal+=`<div class="row">
                   <div class="col-md-1 center-margin">
                     1
                   </div>
                   <div class="col-md-4 center-margin">` + order[j].ProductName +
                   `</div>
                   <div class="col-md-2 center-margin">` + order[j].number +
                  `</div>
                   <div class="col-md-2 center-margin">` + order[j].ProductPrice+
                  `.000</div>
                  <div class="col-md-2 center-margin">
                    <h6></h6>
                  </div>
                   <div class="col-md-1 center-margin">
                     <br>
                   </div>
                 </div>`;
              };
              order_modal+=`</div>
                            </div>
                            <div class="row">
                               <div class="col-md-1 center-margin"></div>
                               <div class="col-md-4 center-margin"></div>
                               <div class="col-md-2 center-margin"></div>
                               <div class="col-md-2 center-margin"></div>
                              <div class="col-md-2 center-margin">
                                <h6>`+total+ `.000</h6>
                              </div>
                               <div class="col-md-1 center-margin">
                                 <br>
                               </div>
                             </div>;
                        </div>
                        <div class="modal-footer">
                          <div class="container-fluid text-center">
                            <button type="button" data-dismiss="modal" onclick="changeSTT()"style="position:inherit"class="btn btn-primary mr-auto">Xác nhận</button>
                          </div>
                        </div>

                        </div>
                      </div>

                    </div>`;
  document.getElementById("order_list_waitting").innerHTML = order_modal;

});


function changeSTT(){
  console.log("hah");
}
