import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Employee } from "../model/employee";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {

    private apiServerUrl: string = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) { }


    public getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<any>(`${this.apiServerUrl}/employee/all`);
    }

    public getEmployeeById(id: number): Observable<Employee> {
        return this.httpClient.get<any>(`${this.apiServerUrl}/employee/find/${id}`);
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<any>(`${this.apiServerUrl}/employee/add`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.put<any>(`${this.apiServerUrl}/employee/update`, employee);
    }

    public deleteEmployee(id: number): Observable<void> {
        return this.httpClient.delete<any>(`${this.apiServerUrl}/employee/delete/${id}`);
    }

}