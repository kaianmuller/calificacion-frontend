import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SystemMessagesService } from 'src/app/services/system-messages/system-messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showCalificacionCard:boolean = false;
  showFinalCard:boolean = false;
  constructor(private messageService:MessageService,private sysMsg:SystemMessagesService,private authServ:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(this.authServ.isLogged()){
      this.router.navigate(['/calificaciones']);
    }
  }


  showLoginFailMessage(error: any) {
    this.messageService.add(this.sysMsg.getSystemMessage(error.status));
  }



  closeCalificacion(event:boolean){
    this.showCalificacionCard = false; 
    this.showFinalCard = event;
  }


}
