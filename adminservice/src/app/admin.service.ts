import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API = "http://localhost:8080"; // Update this to your API endpoint

  public registerAdmin(adminData: any) {
    return this.http.post(`${this.API}/admin`, adminData);
  }

  public getAdmins() {
    return this.http.get(`${this.API}/admin`);
  }

  public deleteAdmin(adminId: any) {
    return this.http.delete(`${this.API}/admin/${adminId}`);
  }

  public updateAdmin(admin: any) {
    return this.http.put(`${this.API}/admin/${admin.id}`, admin);
  }

  constructor(private http: HttpClient) { }
}
