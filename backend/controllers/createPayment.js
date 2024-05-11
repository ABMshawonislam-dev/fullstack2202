const Category = require("../model/categoryModel");
const paypal = require('paypal-rest-sdk');
let createPaymentController = async (req, res) => {
    paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': 'ARc98bduEajyhDsaL9k7L07uK9lhpykQ1OKt1itQFIRmNqB751d4AN9S7FiJ8RTJzqHPS_6fcwcpWJ_6',
        'client_secret': 'EHn4ui6DPcU28ab7m0wQn3X2fjt1kxvhMAFry_m7NbqIRu55ZHs_42vcnCdpJu8ILGnFf3Ih4QP5sQQM'
      });
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Red Sox Hat",
                    "sku": "001",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00"
            },
            "description": "Hat for the best team ever"
        }]
    }

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0;i < payment.links.length;i++){
              if(payment.links[i].rel === 'approval_url'){
                res.send({status:"done"});
              }
            }
        }
      });
      
   
};

module.exports = createPaymentController
