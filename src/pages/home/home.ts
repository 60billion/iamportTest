import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { IamportService } from 'iamport-ionic-kcp';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public iamport: IamportService,
              public alert: AlertController
            ) {
              
              
  }
  
  payment(event) {
    const param = {
      pay_method : 'card',
      merchant_uid : 'merchant_' + new Date().getTime(),
      name : '주문명:결제테스트',
      amount : 1400,
      buyer_email : 'iamport@siot.do',
      buyer_name : '구매자이름',
      buyer_tel : '010-1234-5678',
      buyer_addr : '서울특별시 강남구 삼성동',
      buyer_postcode : '123-456',
      app_scheme : 'ionickcp'
    };
    
    // 아임포트 관리자 페이지 가입 후 발급된 가맹점 식별코드를 사용
    this.iamport.payment("imp93881213", param )
      .then((response)=> {
        if ( response.isSuccess() ) {
        }
      })
      .catch((err)=> {
        alert(err)
      })
    ;
  }

}
