import { Injectable } from "@angular/core";
import { NotifierService } from "angular-notifier";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})

export class RequestService {
  loading = false;
  master: any;

  public innerHeight: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private notifier: NotifierService
  )
  
  {
    // this.cargarStorage();
  }

//   cargarStorage() {
//     if (localStorage.telmah) {
//       this.master = JSON.parse(localStorage.telmah);
//     }
//   }

//   guardarStorage(data: any) {
//     this.master = data;
//     localStorage.setItem("telmah", JSON.stringify(data));
//   }

  tokenIsValid(status: number) {
    if (status === 401) {
      this.cerrarSesion();
      return false;
    }
    return true;
  }

  cerrarSesion() {
    this.master = null;
    localStorage.removeItem("telmah");
    localStorage.removeItem("rucInicio");
    this.router.navigateByUrl("/login");
  }

  showAlert(message: string, type: any) {
    this.notifier.notify(type, message);
  }

  login(data: any) {
    this.loading = true;
    return new Promise((resolve) => {
      this.http.post(`${environment.apiUrl}/auth/login`, data).subscribe(
        (response: any) => {
          this.loading = false;
          const user = {
            ...response.respuesta,
            token: response.respuesta.token,
          };
        //   this.guardarStorage(user);
          resolve([true, null]);
        },
        (error: any) => {
          this.loading = false;
          resolve([false, error.error.respuesta]);
        }
      );
    });
  }

  registroUsuario(data: any) {
    this.loading = true;
    return new Promise((resolve) => {
      this.http.post(`${environment.apiUrl}/auth/register`, data).subscribe(
        (response: any) => {
          this.loading = false;
          resolve([true, null]);
        },
        (error: any) => {
          this.loading = false;
          resolve([false, error.error.respuesta]);
        }
      );
    });
  }

  

  async getProveedores() {
    // this.loading = true;
    // if (!this.master.apiKey) {
    //   this.loading = false;
    //   this.router.navigateByUrl("/login");
    // } else {
    //   this.loading = true;
    //   const headers = new HttpHeaders({ token: this.master.apiKey });
      return new Promise((resolve) => {
        this.http
          .get(`${environment.apiUrl}tipoAbogados`)
          .subscribe(
            (response: any) => {
              this.loading = false;
              resolve([true, response]);
            },
            (error: any) => {
              this.loading = false;
              if (!this.tokenIsValid(error.status)) {
              }
              resolve([false]);
            }
          );
      });
    // }
  }


   

  async getHorariosporTipo() {
    // this.loading = true;
    // if (!this.master.apiKey) {
    //   this.loading = false;
    //   this.router.navigateByUrl("/login");
    // } else {
    //   this.loading = true;
    //   const headers = new HttpHeaders({ token: this.master.apiKey });
      return new Promise((resolve) => {
        this.http
          .get(`${environment.apiUrl}horarios-tipoabogado/6`)
          .subscribe(
            (response: any) => {
              this.loading = false;
              resolve([true, response]);
            },
            (error: any) => {
              this.loading = false;
              if (!this.tokenIsValid(error.status)) {
              }
              resolve([false]);
            }
          );
      });
    // }
  }

  

}

